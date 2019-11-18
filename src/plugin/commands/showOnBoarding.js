const { MESSAGES } = require("../utils/constants.js");
const { showUIAsync } = require("../utils/showUIAsync.js");

export function showOnBoarding() {
  showUIAsync(__html__, {
    visible: true,
    width: 600,
    height: 500
  }).then(() => {
    figma.ui.postMessage({
      type: "on-boarding"
    });

    figma.ui.onmessage = msg => {
      if (msg.type === "set-on-boarding-cookie") {
        figma.clientStorage.setAsync("hasOnBoarding", "false").then(() => {
          figma.closePlugin(MESSAGES.onBoardingEnd);
        });
      } else {
        figma.closePlugin();
      }
    };
  });
}
