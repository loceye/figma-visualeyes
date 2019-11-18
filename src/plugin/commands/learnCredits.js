const { MESSAGES } = require("../utils/constants.js");
const { showUIAsync } = require("../utils/showUIAsync.js");

export const learnCredits = () => {
  figma.clientStorage.getAsync("apiKey").then(apiKey => {
    if (!apiKey) {
      figma.closePlugin(MESSAGES.setUpApiKey);
    } else {
      showUIAsync(__html__, { visible: false }).then(() => {
        figma.ui.postMessage({
          type: "learn-credits",
          apiKey: apiKey
        });

        figma.ui.onmessage = msg => {
          if (msg.type === "get-credits") {
            figma.closePlugin(`🔦 You have ${msg.credits} credits left!`);
          } else {
            figma.closePlugin(
              "🚨 Something went wrong! Please, contact us at info@loceye.io"
            );
          }
        };
      });
    }
  });
};
