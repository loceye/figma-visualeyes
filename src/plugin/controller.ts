const { showUIAsync } = require("./utils/showUIAsync.js");
const { learnCredits } = require("./commands/learnCredits.js");
const { showOnBoarding } = require("./commands/showOnBoarding.js");
const { setApiKey } = require("./commands/setApiKey.js");
const { generateHeatmap } = require("./commands/generateHeatmap.js");
const { clarityPrediction } = require("./commands/clarityPrediction.js");

(async () => {
  switch (figma.command) {
    case "learnCredits":
      learnCredits();
      break;
    case "generateHeatmap":
      generateHeatmap();
      break;
    case "clarityPredictionDesktop":
      clarityPrediction("desktop");
      break;
    case "clarityPredictionMobile":
      clarityPrediction("mobile");
      break;
    case "showOnBoarding":
      showOnBoarding();
      break;
    case "setApiKey":
      setApiKey();
      break;
    default:
      figma.closePlugin("Unknown command");
  }
})();
