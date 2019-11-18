const { setApiKey } = require("./setApiKey.js");
const { showUIAsync } = require("../utils/showUIAsync.js");
const {
  convertFrameToArraybuffer
} = require("../utils/convertFrameToArraybuffer.js");
const {
  MESSAGES,
  MIN_AOI_WIDTH,
  MIN_AOI_HEIGHT
} = require("../utils/constants.js");

function getSelectedFrameNodes() {
  return figma.currentPage.selection.filter(item => item.type === "FRAME");
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

export function generateHeatmap() {
  // Check API key existence
  figma.clientStorage.getAsync("apiKey").then(apiKey => {
    if (!apiKey) {
      setApiKey();
    } else {
      startProcess();
    }
    return;
  });
}

async function startProcess() {
  const selectedFrames = getSelectedFrameNodes();

  if (selectedFrames.length === 0) {
    figma.closePlugin(MESSAGES.noSelection);
  } else {
    figma.notify("🏃‍ Prediction has been started...");

    const rectangles = findAOILayers();
    const hasAOI = rectangles.length > 0;

    figma.clientStorage.getAsync("hasUsedAOI").then(hasUsedAOI => {
      if (!(hasUsedAOI === "true") && hasAOI) {
        console.log(
          "This cool guy has just used our AOI feature. Let's not spam him anymore!"
        );
        figma.clientStorage.setAsync("hasUsedAOI", "true"); //here is possible error
      }
      figma.clientStorage.getAsync("apiKey").then(async apiKey => {
        const frame = selectedFrames[0];
        const arraybuffer = await convertFrameToArraybuffer(frame);
        postImage(arraybuffer, apiKey, frame, hasAOI, rectangles);
      });
    });
  }
}

function postImage(arraybuffer, apiKey, frame, hasAOI, aoi) {
  showUIAsync(__html__, { visible: false, width: 500, height: 350 }).then(
    () => {
      figma.ui.postMessage({
        type: "post-image",
        arraybuffer,
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
            result.name = "VisualEyes";
            result.children
              .map(node => {
                const children =
                  typeof node.findAll === "function" ? node.findAll() : [];
                const nodes = [node, ...children].filter(Boolean);
                return nodes;
              })
              .reduce((a, b) => a.concat(b), [])
              .filter(item => {
                console.log(item.type);
                if (item.type === "GROUP" && item.name.trim() === "Group") {
                  item.name = "AOI";
                  return true;
                }
                if (
                  item.type === "RECTANGLE" &&
                  item.name.trim() === "Rectangle"
                ) {
                  item.name = "Heatmap";
                  return true;
                }
                return false;
              });
            frame.appendChild(result);

            // Check if the user has used AOI

            figma.clientStorage.getAsync("hasUsedAOI").then(hasUsedAOI => {
              if (hasUsedAOI === "true") {
                figma.closePlugin(MESSAGES.success);
              } else {
                figma.closePlugin(MESSAGES.successWithAOIPrompt);
              }
            });
            break;

          case "reached-limit":
            figma.ui.show();
            break;

          case "request-error":
            const { error } = msg;
            figma.closePlugin(error);
            break;

          case "limit-end":
          default:
            figma.closePlugin();
            break;
        }
      };
    }
  );
}
