const { MESSAGES } = require("../utils/constants.js");
const { showUIAsync } = require("../utils/showUIAsync.js");

export async function setApiKey() {
  showUIAsync(__html__, { visible: true, width: 600, height: 500 }).then(() => {
    figma.ui.onmessage = msg => {
      if (msg.type === "set-api-key") {
        // Set the new API key
        const { apiKey } = msg;
        figma.clientStorage.setAsync("apiKey", apiKey).then(() => {
          figma.closePlugin(MESSAGES.apiKeySuccess);
        });
      } else if (msg.type === "cancel-api-key") {
        // User cancel input, so no action is taken
        figma.closePlugin(MESSAGES.apiKeyCancel);
      } else {
        figma.closePlugin();
      }
    };

    // Here send a message based on the cookie existance
    figma.clientStorage.getAsync("apiKey").then(previousApiKey => {
      figma.ui.postMessage({ type: "set-previous-api-key", previousApiKey });
    });
  });
}
