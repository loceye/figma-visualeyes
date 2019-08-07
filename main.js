// import base64 from "utils/base64";

function getSelectedFrameNodes() {
  return figma.currentPage.selection.filter((item) => item.type === "FRAME");
}

async function setApiKey() {
  figma.showUI(__html__);
  figma.ui.onmessage = (msg) => {
    if (msg.type === "set-api-key") {
      const { apiKey } = msg;
      figma.root.setPluginData("apiKey", apiKey);
    }
    figma.closePlugin();
  };
}

async function generateHeatmap() {
  const selectedFrames = getSelectedFrameNodes();

  if (selectedFrames.length === 0) {
    figma.closePlugin("You must select at least one frame.");
  } else {
    // Check API key existence
    const apiKey = figma.root.getPluginData("apiKey");
    if (!apiKey) {
      setApiKey();
    } else {
      selectedFrames.map(async (frame) => {
        const base64 = await convertFrameToBase64(frame);
        postImage(base64, apiKey, frame);
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

async function postImage(image, apiKey, frame) {
  figma.showUI(__html__, { visible: false });
  figma.ui.postMessage({ type: "postImage", image, apiKey });

  figma.ui.onmessage = async (msg) => {
    const { type } = msg;

    switch (type) {
      case "heatmap":
        const { bytes } = msg;
        const image = figma.createImage(bytes);
        console.log(image);
        console.log(bytes);

        const fill = {
          type: "IMAGE",
          imageHash: image.hash,
          scaleMode: "FIT",
          scalingFactor: 1,
          filters: {
            exposure: 0.0,
            contrast: 0.0,
            saturation: 0.0,
            temperature: 0.0,
            tint: 0.0,
            highlights: 0.0,
            shadows: 0.0,
          },
        };

        const rect = figma.createRectangle();
        rect.resize(frame.width, frame.height);
        rect.x = 0;
        rect.y = 0;
        rect.fills = [fill];

        frame.appendChild(rect);
        break;

      case "request-error":
        const { error } = msg;
        alert(error);
        break;

      default:
        break;
    }

    figma.closePlugin();
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
