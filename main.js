const BRANDING_COLOR = {
  r: 0.24313725531101227,
  g: 0.12941177189350128,
  b: 0.8705882430076599
};
const FONT = { family: "Rubik", style: "Bold" };

function getSelectedFrameNodes() {
  return figma.currentPage.selection.filter(item => item.type === "FRAME");
}

async function setApiKey() {
  figma.showUI(__html__);
  figma.ui.onmessage = msg => {
    if (msg.type === "set-api-key") {
      const { apiKey } = msg;
      figma.root.setPluginData("apiKey", apiKey);
    }
    figma.closePlugin(
      "👏 Your new API key has been set. \nRun 'Generate Heatmap' command to test it!"
    );
  };

  const previousApiKey = figma.root.getPluginData("apiKey");
  figma.ui.postMessage({ type: "set-previous-api-key", previousApiKey });
}

function findAOILayers() {
  const items = figma.currentPage.selection
    .map(node => {
      const children = typeof node.findAll === "function" ? node.findAll() : [];
      const nodes = [node, ...children].filter(Boolean);
      return nodes;
    })
    .reduce((a, b) => a.concat(b), []);

  return items
    .filter(item => item.type === "RECTANGLE" && item.name === "AOI")
    .filter(rect => {
      if (isRectOutsideFrame(rect, rect.parent)) {
        figma.notify(
          " 😱 One of your rectangles is outside the current Frame."
        );
        rect.opacity = 0;
        rect.name = "🚨 Outside Frame";
        return false;
      } else if (isRectSmall(rect)) {
        figma.notify(
          " 👎 One of your rectangles was not big enough (minimum 70x32 pixels)"
        );
        rect.opacity = 0;
        rect.name = "🚨 Too Small (min 70x32)";
      } else {
        rect.fills = [
          {
            blendMode: "NORMAL",
            color: getColor(rect),
            opacity: 0,
            type: "SOLID",
            visible: true
          }
        ];
        return true;
      }
    });
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

function getColor(rectangle) {
  const solidFills = rectangle.fills.filter(fill => fill.type === "SOLID");
  const hasColor = solidFills.length > 0;
  return hasColor ? solidFills[0].color : BRANDING_COLOR;
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
  return rect.width < 70 || rect.height < 32;
}

async function drawAOIRectangles(rectangles, scores) {
  rectangles.forEach((rect, index) => {
    const color = getColor(rect);
    const score = scores.find(area => rect.id === area.id).score;

    // const background = figma.createRectangle();
    const scoreBackground = figma.createRectangle();
    const scoreText = figma.createText();
    const group = figma.group([scoreText, scoreBackground, rect], rect.parent);
    group.name = `AOI Group ${1 + index}`;
    group.locked = true;

    // background.resize(rect.width, rect.height);
    // background.x = rect.x;
    // background.y = rect.y;
    rect.name = "Area of Interest";
    rect.fills = [
      {
        blendMode: "NORMAL",
        color: color,
        opacity: 0.2,
        type: "SOLID",
        visible: true
      }
    ];
    rect.strokes = [
      {
        blendMode: "NORMAL",
        color: color,
        opacity: 1,
        type: "SOLID",
        visible: true
      }
    ];
    rect.strokeWeight = 4;

    scoreBackground.name = "Score Background";
    scoreBackground.resize(70, 32);
    scoreBackground.x = rect.x;
    scoreBackground.y = rect.y;
    scoreBackground.fills = [
      {
        blendMode: "NORMAL",
        color: color,
        opacity: 1,
        type: "SOLID",
        visible: true
      }
    ];

    scoreText.fontName = FONT;
    scoreText.fontSize = 16;
    scoreText.characters = `${score}%`;
    scoreText.x = rect.x + 14;
    scoreText.y = rect.y + 7;
    scoreText.fills = [
      {
        blendMode: "NORMAL",
        color: { r: 1, g: 1, b: 1 },
        opacity: 1,
        type: "SOLID",
        visible: true
      }
    ];
  });
}

async function predictAOI() {
  const selectedFrames = getSelectedFrameNodes();
  const rectangles = findAOILayers();

  if (selectedFrames.length === 0) {
    figma.closePlugin("🥺 You must select at least one frame.");
  } else if (rectangles.length === 0) {
    figma.closePlugin('🧐 You must create at least one rectangel named"AOI".');
  } else {
    // Check API key existence
    const apiKey = figma.root.getPluginData("apiKey");
    if (!apiKey) {
      setApiKey();
    } else {
      selectedFrames.map(async (frame, index) => {
        // 🐛 TODO: Should make some changes to handle multiple Frames asynchronous
        await figma.loadFontAsync(FONT);

        const isLast = selectedFrames.length - 1 === index;
        const base64 = await convertFrameToBase64(frame);
        await postImage(base64, apiKey, frame, isLast, true, rectangles);
      });
    }
  }
}

async function generateHeatmap() {
  figma.showUI(__html__, { visible: true, width: 500 height: 400 });

  figma.ui.postMessage({
    type: "onboarding"
  });

  return;

  const selectedFrames = getSelectedFrameNodes();

  if (selectedFrames.length === 0) {
    figma.closePlugin("🥺 You must select at least one frame.");
  } else {
    // Check API key existence
    const apiKey = figma.root.getPluginData("apiKey");
    if (!apiKey) {
      setApiKey();
    } else {
      selectedFrames.map(async (frame, index) => {
        // 🐛 TODO: Should make some changes to handle multiple Frames asynchronous
        const isLast = selectedFrames.length - 1 === index;
        const base64 = await convertFrameToBase64(frame);
        await postImage(base64, apiKey, frame, isLast, false, []);
      });
    }
  }
}

async function convertFrameToBase64(frame) {
  const exportSettings = { format: "JPG", contentsOnly: true };
  const arraybuffer = await frame.exportAsync(exportSettings);
  const imgBase64 = "data:image/jpg;base64," + encode(arraybuffer);
  return imgBase64;
}

async function postImage(image, apiKey, frame, isLast, hasAOI, rectangles) {
  figma.showUI(__html__, { visible: false });
  const aoi = rectangles.map(rect => ({
    points: [
      { x: rect.x, y: rect.y, index: 0 },
      { x: rect.x + rect.width, y: rect.y, index: 1 },
      { x: rect.x + rect.width, y: rect.y + rect.height, index: 2 },
      { x: rect.x, y: rect.y + rect.height, index: 3 }
    ],
    id: rect.id
  }));

  figma.ui.postMessage({
    type: "postImage",
    image,
    apiKey,
    isLast,
    hasAOI,
    aoi
  });

  figma.ui.onmessage = async msg => {
    const { type } = msg;

    switch (type) {
      case "heatmap":
        const { bytes, shouldClose, scores } = msg;
        const image = figma.createImage(bytes);
        const imageFill = {
          type: "IMAGE",
          imageHash: image.hash,
          imageTransform: [[1, 0, 0], [0, 1, 0]],
          blendMode: "NORMAL",
          opacity: 1,
          scaleMode: "FILL",
          scalingFactor: 1,
          visible: true,
          filters: {
            exposure: 0.0,
            contrast: 0.0,
            saturation: 0.0,
            temperature: 0.0,
            tint: 0.0,
            highlights: 0.0,
            shadows: 0.0
          }
        };

        const rectangle = figma.createRectangle();
        rectangle.name = "Heatmap";
        rectangle.resize(frame.width, frame.height);
        rectangle.x = 0;
        rectangle.y = 0;
        rectangle.fills = [imageFill];
        frame.appendChild(rectangle);

        if (hasAOI) {
          drawAOIRectangles(rectangles, scores);
        }

        // if (shouldClose)
        figma.closePlugin("🎉 Bazinga!");
        break;

      case "request-error":
        const { error } = msg;
        figma.closePlugin(error);

      default:
        figma.closePlugin();
        break;
    }
  };
}

(async () => {
  switch (figma.command) {
    case "generateHeatmap":
      generateHeatmap();
      break;
    case "setApiKey":
      setApiKey();
      break;
    case "predictAOI":
      predictAOI();
      break;
    default:
      figma.closePlugin("Unknown command");
  }
})();

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function encode(arraybuffer) {
  var bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = "";

  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
    base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
    base64 += chars[bytes[i + 2] & 63];
  }

  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }

  return base64;
}
