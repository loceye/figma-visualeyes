const { arraybufferToBase64 } = require("./utils/arraybufferToBase64.js");
const {
  MESSAGES,
  AOI_ERRORS,
  getRandomTip,
  MIN_AOI_WIDTH,
  MIN_AOI_HEIGHT
} = require("./utils/constants.js");

// showUIAsync() function handles the PING-PONG communication
var isUIReady = false;
const PING_PONG_INTERVAL = 200;

function pingUI() {
  figma.ui.postMessage({
    type: "ping"
  });
}

function waitUIThread() {
  if (isUIReady) {
    return;
  } else {
    pingUI();
    setTimeout(waitUIThread, PING_PONG_INTERVAL);
  }
  return;
}

function showUIAsync(target, options) {
  figma.showUI(target, options);
  waitUIThread();

  return new Promise((resolve, reject) => {
    figma.ui.onmessage = msg => {
      if (msg.type === "pong") {
        resolve("true");
        isUIReady = true;
      }
    };
  });
}

function getSelectedFrameNodes() {
  return figma.currentPage.selection.filter(item => item.type === "FRAME");
}

async function setApiKey(isFromHeatmap) {
  showUIAsync(__html__, { visible: true, width: 600, height: 500 }).then(() => {
    figma.ui.onmessage = msg => {
      if (msg.type === "set-api-key") {
        // Set the new API key
        const { apiKey } = msg;
        figma.root.setPluginData("apiKey", apiKey);
        figma.root.setPluginData("hasOnBoarding", "true");
        if (isFromHeatmap) {
          figma.notify(MESSAGES.apiKeySuccess);
          showOnBoarding();
        } else {
          figma.closePlugin(MESSAGES.apiKeySuccess);
        }
      } else if (msg.type === "cancel-api-key") {
        // User cancel input, so no action is taken
        figma.closePlugin(MESSAGES.apiKeyCancel);
      } else {
        figma.closePlugin();
      }
    };

    // Here send a message based on the cookie existance
    const previousApiKey = figma.root.getPluginData("apiKey");
    figma.ui.postMessage({ type: "set-previous-api-key", previousApiKey });
  });
}

function findAOILayers() {
  const rectangles = figma.currentPage.selection
    .map(node => {
      const children = typeof node.findAll === "function" ? node.findAll() : [];
      const nodes = [node, ...children].filter(Boolean);
      return nodes;
    })
    .reduce((a, b) => a.concat(b), [])
    .filter(item => item.type === "RECTANGLE" && item.name.trim() === "AOI")
    .map(rect => {
      if (isRectOutsideFrame(rect, rect.parent)) {
        // figma.notify(' 😱 One of your rectangles is outside the current Frame.');
        rect.opacity = 0;
        rect.name = "🚨 Outside Frame";
      } else if (isRectSmall(rect)) {
        // figma.notify(' 👎 One of your rectangles was not big enough (minimum ${MIN_AOI_WIDTH}x${MIN_AOI_HEIGHT} pixels)');
        rect.opacity = 0;
        rect.name = `🚨 Too Small (min ${MIN_AOI_WIDTH}x${MIN_AOI_HEIGHT})`;
      } else {
        rect.fills = [
          {
            blendMode: "NORMAL",
            color: { r: 0, g: 0, b: 0 },
            opacity: 0,
            type: "SOLID",
            visible: true
          }
        ];
      }
      return rect;
    })
    .map(rect => ({
      points: getPoints(rect),
      id: rect.id
    }));

  return rectangles;
}

function getPoints(rectangle) {
  const { x, y, width, height } = rectangle;
  return [
    { x, y, index: 0 },
    { x: x + width, y, index: 1 },
    { x: x + width, y: y + height, index: 2 },
    { x, y: y + height, index: 3 }
  ];
}

function isRectOutsideFrame(rect, frame) {
  return (
    rect.x < 0 ||
    rect.x + rect.width > frame.width ||
    rect.y < 0 ||
    rect.y + rect.height > frame.height
  );
}

function isRectSmall(rect) {
  return rect.width < MIN_AOI_WIDTH || rect.height < MIN_AOI_HEIGHT;
}

function generateHeatmap() {
  // Check API key existence
  const apiKey = figma.root.getPluginData("apiKey");
  if (!apiKey) {
    figma.root.setPluginData("hasOnBoarding", "true");
    setApiKey(true);
  } else {
    const hasOnBoarding = figma.root.getPluginData("hasOnBoarding") === "true";
    if (hasOnBoarding) {
      showUIAsync(__html__, { visible: true, width: 600, height: 500 }).then(
        () => {
          showOnBoarding();
        }
      );
    } else {
      startProcess();
    }
  }
  return;
}

function showOnBoarding() {
  figma.ui.postMessage({
    type: "on-boarding"
  });

  figma.ui.onmessage = msg => {
    if (msg.type === "set-on-boarding-cookie") {
      figma.root.setPluginData("hasOnBoarding", "false");
      figma.closePlugin(MESSAGES.onBoardingEnd);
    } else {
      figma.closePlugin();
    }
  };
}

async function startProcess() {
  const selectedFrames = getSelectedFrameNodes();

  if (selectedFrames.length === 0) {
    figma.closePlugin(MESSAGES.noSelection);
  } else {
    figma.notify(getRandomTip());

    const rectangles = findAOILayers();
    const hasAOI = rectangles.length > 0;

    const hasUsedAOI = figma.root.getPluginData("hasUsedAOI") === "true";
    if (!hasUsedAOI && hasAOI) {
      console.log(
        "This cool guy has just used our AOI feature. Let's not spam him anymore!"
      );
      figma.root.setPluginData("hasUsedAOI", "true");
    }

    console.log("here1");

    const apiKey = figma.root.getPluginData("apiKey");
    console.log("here2");
    const frame = selectedFrames[0];
    console.log("here3");
    const base64 = await convertFrameToBase64(frame);
    console.log("here4");
    postImage(base64, apiKey, frame, hasAOI, rectangles);
    console.log("here5");
  }
}

async function convertFrameToBase64(frame) {
  const exportSettings = { format: "JPG", contentsOnly: true };
  const arraybuffer = await frame.exportAsync(exportSettings);
  console.log(arraybuffer.length);

  const imgBase64 = "data:image/jpg;base64," + arraybufferToBase64(arraybuffer);
  console.log("here9");

  return imgBase64;
}

function postImage(image, apiKey, frame, hasAOI, aoi) {
  showUIAsync(__html__, { visible: false }).then(() => {
    figma.ui.postMessage({
      type: "post-image",
      image,
      apiKey,
      hasAOI,
      aoi
    });

    figma.ui.onmessage = async msg => {
      const { type } = msg;

      switch (type) {
        case "svg-result":
          const { svg } = msg;
          const result = figma.createNodeFromSvg(svg);
          frame.appendChild(result);

          // Check if the user has used AOI
          const hasUsedAOI = figma.root.getPluginData("hasUsedAOI") === "true";
          if (hasUsedAOI) {
            figma.closePlugin(MESSAGES.success);
          } else {
            figma.closePlugin(MESSAGES.successWithAOIPrompt);
          }

          break;

        case "request-error":
          const { error } = msg;
          figma.closePlugin(error);

        default:
          figma.closePlugin();
          break;
      }
    };
  });
}

(async () => {
  switch (figma.command) {
    case "generateHeatmap":
      generateHeatmap();
      break;
    case "setApiKey":
      setApiKey(false);
      break;
    default:
      figma.closePlugin("Unknown command");
  }
})();
