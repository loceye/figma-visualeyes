const { setApiKey } = require("./setApiKey.js");
const { showUIAsync } = require("../utils/showUIAsync.js");
const {
  convertFrameToArraybuffer
} = require("../utils/convertFrameToArraybuffer.js");
const { MESSAGES } = require("../utils/constants.js");

function getSelectedFrameNodes() {
  return figma.currentPage.selection.filter(item => item.type === "FRAME");
}

function postImage(arraybuffer, apiKey, frame, device) {
  showUIAsync(__html__, { visible: false, width: 500, height: 350 }).then(
    () => {
      figma.ui.postMessage({
        type: "post-clarity-image",
        arraybuffer,
        apiKey,
        device
      });

      figma.ui.onmessage = async msg => {
        const { type } = msg;

        switch (type) {
          case "svg-result":
            const { svg } = msg;
            const result = figma.createNodeFromSvg(svg);
            result.name = "VisualEyes";
            frame.appendChild(result);
            figma.closePlugin(MESSAGES.success);
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

async function startProcess(device) {
  const selectedFrames = getSelectedFrameNodes();

  if (selectedFrames.length === 0) {
    figma.closePlugin(MESSAGES.noSelection);
  } else {
    figma.notify("🏃‍ Prediction has been started...");

    figma.clientStorage.getAsync("apiKey").then(async apiKey => {
      const frame = selectedFrames[0];
      const arraybuffer = await convertFrameToArraybuffer(frame);
      postImage(arraybuffer, apiKey, frame, device);
    });
  }
}

export function clarityPrediction(device) {
  // Check API key existence
  figma.clientStorage.getAsync("apiKey").then(apiKey => {
    if (!apiKey) {
      figma.clientStorage.setAsync("hasOnBoarding", "true").then(() => {
        setApiKey();
      });
    } else {
      startProcess(device);
    }
    return;
  });
}
