/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin/controller.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/interjection-js/index.js":
/*!***********************************************!*\
  !*** ./node_modules/interjection-js/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * interjection.js v0.0.0
 * https://github.com/
 *
 * Copyright (c) 2019 DIMITRIS RAPTIS
 * Released under the MIT license
 */

const interjections = __webpack_require__(/*! ./interjections */ "./node_modules/interjection-js/interjections.js");

function generate() {
  return interjections[Math.floor(Math.random() * interjections.length)];
}

module.exports = generate;


/***/ }),

/***/ "./node_modules/interjection-js/interjections.js":
/*!*******************************************************!*\
  !*** ./node_modules/interjection-js/interjections.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var interjections = [
  "Aha",
  "Boo-yah",
  "Ho-ho",
  "Hurrah ",
  "Olé",
  "Rah",
  "Ta-da",
  "Bazinga!",
  "Ahem",
  "Ooh-la-la",
  "Whoa",
  "Yahoo",
  "Yeah",
  "Yoo-hoo",
  "Zing",
  "Congrats",
  "Yowza",
  "Aloha",
  "Alleluia",
  "Holy Cow",
  "Yea",
  "Yeah",
  "Yo",
  "Phoar",
  "Va-va-voom",
  "Yay",
  "Whee",
  "Whoopee",
  "Woo",
  "Yo-ho-ho",
  "Yippee",
  "Yee-haw",
  "Yay"
];

module.exports = interjections;


/***/ }),

/***/ "./src/plugin/commands/clarityPrediction.js":
/*!**************************************************!*\
  !*** ./src/plugin/commands/clarityPrediction.js ***!
  \**************************************************/
/*! exports provided: clarityPrediction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clarityPrediction", function() { return clarityPrediction; });
const { setApiKey } = __webpack_require__(/*! ./setApiKey.js */ "./src/plugin/commands/setApiKey.js");
const { showUIAsync } = __webpack_require__(/*! ../utils/showUIAsync.js */ "./src/plugin/utils/showUIAsync.js");
const {
  convertFrameToArraybuffer
} = __webpack_require__(/*! ../utils/convertFrameToArraybuffer.js */ "./src/plugin/utils/convertFrameToArraybuffer.js");
const { MESSAGES } = __webpack_require__(/*! ../utils/constants.js */ "./src/plugin/utils/constants.js");

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

function clarityPrediction(device) {
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


/***/ }),

/***/ "./src/plugin/commands/generateHeatmap.js":
/*!************************************************!*\
  !*** ./src/plugin/commands/generateHeatmap.js ***!
  \************************************************/
/*! exports provided: generateHeatmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateHeatmap", function() { return generateHeatmap; });
const { setApiKey } = __webpack_require__(/*! ./setApiKey.js */ "./src/plugin/commands/setApiKey.js");
const { showUIAsync } = __webpack_require__(/*! ../utils/showUIAsync.js */ "./src/plugin/utils/showUIAsync.js");
const {
  convertFrameToArraybuffer
} = __webpack_require__(/*! ../utils/convertFrameToArraybuffer.js */ "./src/plugin/utils/convertFrameToArraybuffer.js");
const {
  MESSAGES,
  MIN_AOI_WIDTH,
  MIN_AOI_HEIGHT
} = __webpack_require__(/*! ../utils/constants.js */ "./src/plugin/utils/constants.js");

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

function generateHeatmap() {
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


/***/ }),

/***/ "./src/plugin/commands/learnCredits.js":
/*!*********************************************!*\
  !*** ./src/plugin/commands/learnCredits.js ***!
  \*********************************************/
/*! exports provided: learnCredits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "learnCredits", function() { return learnCredits; });
const { MESSAGES } = __webpack_require__(/*! ../utils/constants.js */ "./src/plugin/utils/constants.js");
const { showUIAsync } = __webpack_require__(/*! ../utils/showUIAsync.js */ "./src/plugin/utils/showUIAsync.js");

const learnCredits = () => {
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


/***/ }),

/***/ "./src/plugin/commands/setApiKey.js":
/*!******************************************!*\
  !*** ./src/plugin/commands/setApiKey.js ***!
  \******************************************/
/*! exports provided: setApiKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApiKey", function() { return setApiKey; });
const { MESSAGES } = __webpack_require__(/*! ../utils/constants.js */ "./src/plugin/utils/constants.js");
const { showUIAsync } = __webpack_require__(/*! ../utils/showUIAsync.js */ "./src/plugin/utils/showUIAsync.js");

async function setApiKey() {
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


/***/ }),

/***/ "./src/plugin/commands/showOnBoarding.js":
/*!***********************************************!*\
  !*** ./src/plugin/commands/showOnBoarding.js ***!
  \***********************************************/
/*! exports provided: showOnBoarding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOnBoarding", function() { return showOnBoarding; });
const { MESSAGES } = __webpack_require__(/*! ../utils/constants.js */ "./src/plugin/utils/constants.js");
const { showUIAsync } = __webpack_require__(/*! ../utils/showUIAsync.js */ "./src/plugin/utils/showUIAsync.js");

function showOnBoarding() {
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


/***/ }),

/***/ "./src/plugin/controller.ts":
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { showUIAsync } = __webpack_require__(/*! ./utils/showUIAsync.js */ "./src/plugin/utils/showUIAsync.js");
const { learnCredits } = __webpack_require__(/*! ./commands/learnCredits.js */ "./src/plugin/commands/learnCredits.js");
const { showOnBoarding } = __webpack_require__(/*! ./commands/showOnBoarding.js */ "./src/plugin/commands/showOnBoarding.js");
const { setApiKey } = __webpack_require__(/*! ./commands/setApiKey.js */ "./src/plugin/commands/setApiKey.js");
const { generateHeatmap } = __webpack_require__(/*! ./commands/generateHeatmap.js */ "./src/plugin/commands/generateHeatmap.js");
const { clarityPrediction } = __webpack_require__(/*! ./commands/clarityPrediction.js */ "./src/plugin/commands/clarityPrediction.js");
(() => __awaiter(this, void 0, void 0, function* () {
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
}))();


/***/ }),

/***/ "./src/plugin/utils/constants.js":
/*!***************************************!*\
  !*** ./src/plugin/utils/constants.js ***!
  \***************************************/
/*! exports provided: MIN_AOI_WIDTH, MIN_AOI_HEIGHT, API_URL, getRandomTip, USEFUL_TIPS, ON_BOARDING, API_ERRORS, AOI_ERRORS, MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_AOI_WIDTH", function() { return MIN_AOI_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_AOI_HEIGHT", function() { return MIN_AOI_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomTip", function() { return getRandomTip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USEFUL_TIPS", function() { return USEFUL_TIPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_BOARDING", function() { return ON_BOARDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ERRORS", function() { return API_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AOI_ERRORS", function() { return AOI_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES", function() { return MESSAGES; });
/* harmony import */ var interjection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! interjection-js */ "./node_modules/interjection-js/index.js");
/* harmony import */ var interjection_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(interjection_js__WEBPACK_IMPORTED_MODULE_0__);


const MIN_AOI_WIDTH = 10;
const MIN_AOI_HEIGHT = 10;
const API_URL = "https://api.visualeyes.design/predict/";

function selectRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomTip() {
  return (
    selectRandomFromArray(THINK_EMOJIS) +
    " TIP: " +
    selectRandomFromArray(USEFUL_TIPS)
  );
}

const SUCCESS_EMOJIS = ["🙌", "🚀", "🎉", "👌", "🥰", "🥳"];
const THINK_EMOJIS = ["🧠", "🤔", "💡"];

function randomEmoji() {
  return selectRandomFromArray(SUCCESS_EMOJIS);
}

const USEFUL_TIPS = [
  "The AOI Rectange should be placed at the top Frame...",

  "Create Areas of Interest by drawing a Rectangle named AOI inside your Frame...",
  "The attention is higher on the red areas...",
  "Clarity scoring based on custom demogrpahics would be available soon...",
  "A/B testing small UI tweaks is a common use case of VisualEyes..."
];

const ON_BOARDING = {
  title: "Welcome on board",
  tips: [
    {
      title: "🔥 How to generate your Attention Heatmap:",
      steps: ["Select a Frame ", "Run the plugin command"]
    },
    {
      title: "📦 How to create Areas of Interest:",
      steps: [
        "Create a Rectangle named AOI",
        "Select the Frame",
        "Run the plugin command"
      ]
    }
  ],
  footer: {
    text: "🔗 Learn more about the usage of our plugin here:",
    link: "https://www.visualeyes.design/learn`,"
  }
};

const API_ERRORS = {
  STATUS_400: "😱 We are deeply sorry, but something went terrible wrong!",
  STATUS_401: "🙅‍ Your API key is invalid",
  STATUS_402: "🌈 You should upgrade your account to access this feature",
  STATUS_403: "🚨 Your heatmaps limit has been exceeded",
  STATUS_503:
    "🚧 Our elves are working hard to update our services. VisualEyes will be online really soon!!"
};

const AOI_ERRORS = {
  size: {
    message: `👎 One of your rectangles was not big enough (minimum ${MIN_AOI_WIDTH}x${MIN_AOI_HEIGHT} pixels)`,
    layerName: `🚨 Too small (minimum ${MIN_AOI_WIDTH}x${MIN_AOI_HEIGHT})`
  },
  placement: {
    message: `😱 One of your rectangles is outside the current Frame.`,
    layerName: `🚨 Off the current Frame`
  }
};

const MESSAGES = {
  apiKeySuccess: randomEmoji() + " Your new API key has been saved.",
  apiKeyCancel: "🏃 Keep using your old API key.",
  noSelection: "🥺 You must select at least one frame.",
  noAPIKey: "✋Please enter your VisualEyes API key first",
  success: randomEmoji() + ` ${interjection_js__WEBPACK_IMPORTED_MODULE_0___default()()}! Your heatmap is ready!`,
  successWithAOIPrompt: `🦸‍ You can impress even more your client with Areas of Interest...`,
  onBoardingEnd: "🚢 Re-run the plugin to see the magic!",
  setApiKey: "🔧 Please set your API key first!"
};


/***/ }),

/***/ "./src/plugin/utils/convertFrameToArraybuffer.js":
/*!*******************************************************!*\
  !*** ./src/plugin/utils/convertFrameToArraybuffer.js ***!
  \*******************************************************/
/*! exports provided: convertFrameToArraybuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFrameToArraybuffer", function() { return convertFrameToArraybuffer; });
async function convertFrameToArraybuffer(frame) {
  const exportSettings = { format: "JPG", contentsOnly: true };
  const arraybuffer = await frame.exportAsync(exportSettings);
  return arraybuffer;
}


/***/ }),

/***/ "./src/plugin/utils/showUIAsync.js":
/*!*****************************************!*\
  !*** ./src/plugin/utils/showUIAsync.js ***!
  \*****************************************/
/*! exports provided: showUIAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUIAsync", function() { return showUIAsync; });
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

const showUIAsync = (target, options) => {
  figma.showUI(target, options);
  waitUIThread();

  return new Promise(resolve => {
    figma.ui.onmessage = msg => {
      if (msg.type === "pong") {
        resolve("true");
        isUIReady = true;
      }
    };
  });
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludGVyamVjdGlvbi1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW50ZXJqZWN0aW9uLWpzL2ludGVyamVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb21tYW5kcy9jbGFyaXR5UHJlZGljdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2NvbW1hbmRzL2dlbmVyYXRlSGVhdG1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2NvbW1hbmRzL2xlYXJuQ3JlZGl0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2NvbW1hbmRzL3NldEFwaUtleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL2NvbW1hbmRzL3Nob3dPbkJvYXJkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3V0aWxzL2NvbnZlcnRGcmFtZVRvQXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi91dGlscy9zaG93VUlBc3luYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG1CQUFPLENBQUMsd0VBQWlCOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBLE9BQU8sWUFBWSxHQUFHLG1CQUFPLENBQUMsMERBQWdCO0FBQzlDLE9BQU8sY0FBYyxHQUFHLG1CQUFPLENBQUMsa0VBQXlCO0FBQ3pEO0FBQ0E7QUFDQSxDQUFDLEdBQUcsbUJBQU8sQ0FBQyw4RkFBdUM7QUFDbkQsT0FBTyxXQUFXLEdBQUcsbUJBQU8sQ0FBQyw4REFBdUI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwwQ0FBMEM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLGVBQWUsT0FBTzs7QUFFdEI7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBLE9BQU8sWUFBWSxHQUFHLG1CQUFPLENBQUMsMERBQWdCO0FBQzlDLE9BQU8sY0FBYyxHQUFHLG1CQUFPLENBQUMsa0VBQXlCO0FBQ3pEO0FBQ0E7QUFDQSxDQUFDLEdBQUcsbUJBQU8sQ0FBQyw4RkFBdUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsbUJBQU8sQ0FBQyw4REFBdUI7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asa0ZBQWtGLGNBQWMsR0FBRyxlQUFlO0FBQ2xIO0FBQ0EseUNBQXlDLGNBQWMsR0FBRyxlQUFlO0FBQ3pFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLFNBQVMsc0JBQXNCO0FBQy9CO0FBQ0EsS0FBSyxpQkFBaUI7QUFDdEIsS0FBSyw0QkFBNEI7QUFDakMsS0FBSyx3Q0FBd0M7QUFDN0MsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLDBDQUEwQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxlQUFlLE9BQU87O0FBRXRCO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVMQTtBQUFBO0FBQUEsT0FBTyxXQUFXLEdBQUcsbUJBQU8sQ0FBQyw4REFBdUI7QUFDcEQsT0FBTyxjQUFjLEdBQUcsbUJBQU8sQ0FBQyxrRUFBeUI7O0FBRWxEO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBLE9BQU8sV0FBVyxHQUFHLG1CQUFPLENBQUMsOERBQXVCO0FBQ3BELE9BQU8sY0FBYyxHQUFHLG1CQUFPLENBQUMsa0VBQXlCOztBQUVsRDtBQUNQLHlCQUF5Qix5Q0FBeUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQStDO0FBQzNFLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBLE9BQU8sV0FBVyxHQUFHLG1CQUFPLENBQUMsOERBQXVCO0FBQ3BELE9BQU8sY0FBYyxHQUFHLG1CQUFPLENBQUMsa0VBQXlCOztBQUVsRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDQSxPQUFPLGNBQWMsR0FBRyxtQkFBTyxDQUFDLGlFQUF3QjtBQUN4RCxPQUFPLGVBQWUsR0FBRyxtQkFBTyxDQUFDLHlFQUE0QjtBQUM3RCxPQUFPLGlCQUFpQixHQUFHLG1CQUFPLENBQUMsNkVBQThCO0FBQ2pFLE9BQU8sWUFBWSxHQUFHLG1CQUFPLENBQUMsbUVBQXlCO0FBQ3ZELE9BQU8sa0JBQWtCLEdBQUcsbUJBQU8sQ0FBQywrRUFBK0I7QUFDbkUsT0FBTyxvQkFBb0IsR0FBRyxtQkFBTyxDQUFDLG1GQUFpQztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHNFQUFzRSxjQUFjLEdBQUcsZUFBZTtBQUN0Ryx3Q0FBd0MsY0FBYyxHQUFHLGVBQWU7QUFDeEUsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzREFBb0IsR0FBRztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUFBO0FBQU87QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4vY29udHJvbGxlci50c1wiKTtcbiIsIi8qIVxuICogaW50ZXJqZWN0aW9uLmpzIHYwLjAuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxOSBESU1JVFJJUyBSQVBUSVNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbmNvbnN0IGludGVyamVjdGlvbnMgPSByZXF1aXJlKFwiLi9pbnRlcmplY3Rpb25zXCIpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGludGVyamVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW50ZXJqZWN0aW9ucy5sZW5ndGgpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbiIsInZhciBpbnRlcmplY3Rpb25zID0gW1xuICBcIkFoYVwiLFxuICBcIkJvby15YWhcIixcbiAgXCJIby1ob1wiLFxuICBcIkh1cnJhaCBcIixcbiAgXCJPbMOpXCIsXG4gIFwiUmFoXCIsXG4gIFwiVGEtZGFcIixcbiAgXCJCYXppbmdhIVwiLFxuICBcIkFoZW1cIixcbiAgXCJPb2gtbGEtbGFcIixcbiAgXCJXaG9hXCIsXG4gIFwiWWFob29cIixcbiAgXCJZZWFoXCIsXG4gIFwiWW9vLWhvb1wiLFxuICBcIlppbmdcIixcbiAgXCJDb25ncmF0c1wiLFxuICBcIllvd3phXCIsXG4gIFwiQWxvaGFcIixcbiAgXCJBbGxlbHVpYVwiLFxuICBcIkhvbHkgQ293XCIsXG4gIFwiWWVhXCIsXG4gIFwiWWVhaFwiLFxuICBcIllvXCIsXG4gIFwiUGhvYXJcIixcbiAgXCJWYS12YS12b29tXCIsXG4gIFwiWWF5XCIsXG4gIFwiV2hlZVwiLFxuICBcIldob29wZWVcIixcbiAgXCJXb29cIixcbiAgXCJZby1oby1ob1wiLFxuICBcIllpcHBlZVwiLFxuICBcIlllZS1oYXdcIixcbiAgXCJZYXlcIlxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcmplY3Rpb25zO1xuIiwiY29uc3QgeyBzZXRBcGlLZXkgfSA9IHJlcXVpcmUoXCIuL3NldEFwaUtleS5qc1wiKTtcbmNvbnN0IHsgc2hvd1VJQXN5bmMgfSA9IHJlcXVpcmUoXCIuLi91dGlscy9zaG93VUlBc3luYy5qc1wiKTtcbmNvbnN0IHtcbiAgY29udmVydEZyYW1lVG9BcnJheWJ1ZmZlclxufSA9IHJlcXVpcmUoXCIuLi91dGlscy9jb252ZXJ0RnJhbWVUb0FycmF5YnVmZmVyLmpzXCIpO1xuY29uc3QgeyBNRVNTQUdFUyB9ID0gcmVxdWlyZShcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiKTtcblxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRGcmFtZU5vZGVzKCkge1xuICByZXR1cm4gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gXCJGUkFNRVwiKTtcbn1cblxuZnVuY3Rpb24gcG9zdEltYWdlKGFycmF5YnVmZmVyLCBhcGlLZXksIGZyYW1lLCBkZXZpY2UpIHtcbiAgc2hvd1VJQXN5bmMoX19odG1sX18sIHsgdmlzaWJsZTogZmFsc2UsIHdpZHRoOiA1MDAsIGhlaWdodDogMzUwIH0pLnRoZW4oXG4gICAgKCkgPT4ge1xuICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInBvc3QtY2xhcml0eS1pbWFnZVwiLFxuICAgICAgICBhcnJheWJ1ZmZlcixcbiAgICAgICAgYXBpS2V5LFxuICAgICAgICBkZXZpY2VcbiAgICAgIH0pO1xuXG4gICAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBhc3luYyBtc2cgPT4ge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IG1zZztcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwic3ZnLXJlc3VsdFwiOlxuICAgICAgICAgICAgY29uc3QgeyBzdmcgfSA9IG1zZztcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpZ21hLmNyZWF0ZU5vZGVGcm9tU3ZnKHN2Zyk7XG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IFwiVmlzdWFsRXllc1wiO1xuICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQocmVzdWx0KTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwicmVhY2hlZC1saW1pdFwiOlxuICAgICAgICAgICAgZmlnbWEudWkuc2hvdygpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwicmVxdWVzdC1lcnJvclwiOlxuICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gbXNnO1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oZXJyb3IpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwibGltaXQtZW5kXCI6XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0UHJvY2VzcyhkZXZpY2UpIHtcbiAgY29uc3Qgc2VsZWN0ZWRGcmFtZXMgPSBnZXRTZWxlY3RlZEZyYW1lTm9kZXMoKTtcblxuICBpZiAoc2VsZWN0ZWRGcmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMubm9TZWxlY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIGZpZ21hLm5vdGlmeShcIvCfj4PigI0gUHJlZGljdGlvbiBoYXMgYmVlbiBzdGFydGVkLi4uXCIpO1xuXG4gICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcImFwaUtleVwiKS50aGVuKGFzeW5jIGFwaUtleSA9PiB7XG4gICAgICBjb25zdCBmcmFtZSA9IHNlbGVjdGVkRnJhbWVzWzBdO1xuICAgICAgY29uc3QgYXJyYXlidWZmZXIgPSBhd2FpdCBjb252ZXJ0RnJhbWVUb0FycmF5YnVmZmVyKGZyYW1lKTtcbiAgICAgIHBvc3RJbWFnZShhcnJheWJ1ZmZlciwgYXBpS2V5LCBmcmFtZSwgZGV2aWNlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhcml0eVByZWRpY3Rpb24oZGV2aWNlKSB7XG4gIC8vIENoZWNrIEFQSSBrZXkgZXhpc3RlbmNlXG4gIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJhcGlLZXlcIikudGhlbihhcGlLZXkgPT4ge1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwiaGFzT25Cb2FyZGluZ1wiLCBcInRydWVcIikudGhlbigoKSA9PiB7XG4gICAgICAgIHNldEFwaUtleSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UHJvY2VzcyhkZXZpY2UpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0pO1xufVxuIiwiY29uc3QgeyBzZXRBcGlLZXkgfSA9IHJlcXVpcmUoXCIuL3NldEFwaUtleS5qc1wiKTtcbmNvbnN0IHsgc2hvd1VJQXN5bmMgfSA9IHJlcXVpcmUoXCIuLi91dGlscy9zaG93VUlBc3luYy5qc1wiKTtcbmNvbnN0IHtcbiAgY29udmVydEZyYW1lVG9BcnJheWJ1ZmZlclxufSA9IHJlcXVpcmUoXCIuLi91dGlscy9jb252ZXJ0RnJhbWVUb0FycmF5YnVmZmVyLmpzXCIpO1xuY29uc3Qge1xuICBNRVNTQUdFUyxcbiAgTUlOX0FPSV9XSURUSCxcbiAgTUlOX0FPSV9IRUlHSFRcbn0gPSByZXF1aXJlKFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCIpO1xuXG5mdW5jdGlvbiBnZXRTZWxlY3RlZEZyYW1lTm9kZXMoKSB7XG4gIHJldHVybiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSBcIkZSQU1FXCIpO1xufVxuXG5mdW5jdGlvbiBmaW5kQU9JTGF5ZXJzKCkge1xuICBjb25zdCByZWN0YW5nbGVzID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uXG4gICAgLm1hcChub2RlID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdHlwZW9mIG5vZGUuZmluZEFsbCA9PT0gXCJmdW5jdGlvblwiID8gbm9kZS5maW5kQWxsKCkgOiBbXTtcbiAgICAgIGNvbnN0IG5vZGVzID0gW25vZGUsIC4uLmNoaWxkcmVuXS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICByZXR1cm4gbm9kZXM7XG4gICAgfSlcbiAgICAucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChiKSwgW10pXG4gICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gXCJSRUNUQU5HTEVcIiAmJiBpdGVtLm5hbWUudHJpbSgpID09PSBcIkFPSVwiKVxuICAgIC5tYXAocmVjdCA9PiB7XG4gICAgICBpZiAoaXNSZWN0T3V0c2lkZUZyYW1lKHJlY3QsIHJlY3QucGFyZW50KSkge1xuICAgICAgICAvLyBmaWdtYS5ub3RpZnkoJyDwn5ixIE9uZSBvZiB5b3VyIHJlY3RhbmdsZXMgaXMgb3V0c2lkZSB0aGUgY3VycmVudCBGcmFtZS4nKTtcbiAgICAgICAgcmVjdC5vcGFjaXR5ID0gMDtcbiAgICAgICAgcmVjdC5uYW1lID0gXCLwn5qoIE91dHNpZGUgRnJhbWVcIjtcbiAgICAgIH0gZWxzZSBpZiAoaXNSZWN0U21hbGwocmVjdCkpIHtcbiAgICAgICAgLy8gZmlnbWEubm90aWZ5KCcg8J+RjiBPbmUgb2YgeW91ciByZWN0YW5nbGVzIHdhcyBub3QgYmlnIGVub3VnaCAobWluaW11bSAke01JTl9BT0lfV0lEVEh9eCR7TUlOX0FPSV9IRUlHSFR9IHBpeGVscyknKTtcbiAgICAgICAgcmVjdC5vcGFjaXR5ID0gMDtcbiAgICAgICAgcmVjdC5uYW1lID0gYPCfmqggVG9vIFNtYWxsIChtaW4gJHtNSU5fQU9JX1dJRFRIfXgke01JTl9BT0lfSEVJR0hUfSlgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjdC5maWxscyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICAgICAgICBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZWN0O1xuICAgIH0pXG4gICAgLm1hcChyZWN0ID0+ICh7XG4gICAgICBwb2ludHM6IGdldFBvaW50cyhyZWN0KSxcbiAgICAgIGlkOiByZWN0LmlkXG4gICAgfSkpO1xuXG4gIHJldHVybiByZWN0YW5nbGVzO1xufVxuXG5mdW5jdGlvbiBnZXRQb2ludHMocmVjdGFuZ2xlKSB7XG4gIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gcmVjdGFuZ2xlO1xuICByZXR1cm4gW1xuICAgIHsgeCwgeSwgaW5kZXg6IDAgfSxcbiAgICB7IHg6IHggKyB3aWR0aCwgeSwgaW5kZXg6IDEgfSxcbiAgICB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCwgaW5kZXg6IDIgfSxcbiAgICB7IHgsIHk6IHkgKyBoZWlnaHQsIGluZGV4OiAzIH1cbiAgXTtcbn1cblxuZnVuY3Rpb24gaXNSZWN0T3V0c2lkZUZyYW1lKHJlY3QsIGZyYW1lKSB7XG4gIHJldHVybiAoXG4gICAgcmVjdC54IDwgMCB8fFxuICAgIHJlY3QueCArIHJlY3Qud2lkdGggPiBmcmFtZS53aWR0aCB8fFxuICAgIHJlY3QueSA8IDAgfHxcbiAgICByZWN0LnkgKyByZWN0LmhlaWdodCA+IGZyYW1lLmhlaWdodFxuICApO1xufVxuXG5mdW5jdGlvbiBpc1JlY3RTbWFsbChyZWN0KSB7XG4gIHJldHVybiByZWN0LndpZHRoIDwgTUlOX0FPSV9XSURUSCB8fCByZWN0LmhlaWdodCA8IE1JTl9BT0lfSEVJR0hUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIZWF0bWFwKCkge1xuICAvLyBDaGVjayBBUEkga2V5IGV4aXN0ZW5jZVxuICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwiYXBpS2V5XCIpLnRoZW4oYXBpS2V5ID0+IHtcbiAgICBpZiAoIWFwaUtleSkge1xuICAgICAgc2V0QXBpS2V5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UHJvY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzdGFydFByb2Nlc3MoKSB7XG4gIGNvbnN0IHNlbGVjdGVkRnJhbWVzID0gZ2V0U2VsZWN0ZWRGcmFtZU5vZGVzKCk7XG5cbiAgaWYgKHNlbGVjdGVkRnJhbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLm5vU2VsZWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBmaWdtYS5ub3RpZnkoXCLwn4+D4oCNIFByZWRpY3Rpb24gaGFzIGJlZW4gc3RhcnRlZC4uLlwiKTtcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSBmaW5kQU9JTGF5ZXJzKCk7XG4gICAgY29uc3QgaGFzQU9JID0gcmVjdGFuZ2xlcy5sZW5ndGggPiAwO1xuXG4gICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcImhhc1VzZWRBT0lcIikudGhlbihoYXNVc2VkQU9JID0+IHtcbiAgICAgIGlmICghKGhhc1VzZWRBT0kgPT09IFwidHJ1ZVwiKSAmJiBoYXNBT0kpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCJUaGlzIGNvb2wgZ3V5IGhhcyBqdXN0IHVzZWQgb3VyIEFPSSBmZWF0dXJlLiBMZXQncyBub3Qgc3BhbSBoaW0gYW55bW9yZSFcIlxuICAgICAgICApO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwiaGFzVXNlZEFPSVwiLCBcInRydWVcIik7IC8vaGVyZSBpcyBwb3NzaWJsZSBlcnJvclxuICAgICAgfVxuICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcImFwaUtleVwiKS50aGVuKGFzeW5jIGFwaUtleSA9PiB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gc2VsZWN0ZWRGcmFtZXNbMF07XG4gICAgICAgIGNvbnN0IGFycmF5YnVmZmVyID0gYXdhaXQgY29udmVydEZyYW1lVG9BcnJheWJ1ZmZlcihmcmFtZSk7XG4gICAgICAgIHBvc3RJbWFnZShhcnJheWJ1ZmZlciwgYXBpS2V5LCBmcmFtZSwgaGFzQU9JLCByZWN0YW5nbGVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3RJbWFnZShhcnJheWJ1ZmZlciwgYXBpS2V5LCBmcmFtZSwgaGFzQU9JLCBhb2kpIHtcbiAgc2hvd1VJQXN5bmMoX19odG1sX18sIHsgdmlzaWJsZTogZmFsc2UsIHdpZHRoOiA1MDAsIGhlaWdodDogMzUwIH0pLnRoZW4oXG4gICAgKCkgPT4ge1xuICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInBvc3QtaW1hZ2VcIixcbiAgICAgICAgYXJyYXlidWZmZXIsXG4gICAgICAgIGFwaUtleSxcbiAgICAgICAgaGFzQU9JLFxuICAgICAgICBhb2lcbiAgICAgIH0pO1xuXG4gICAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBhc3luYyBtc2cgPT4ge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IG1zZztcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwic3ZnLXJlc3VsdFwiOlxuICAgICAgICAgICAgY29uc3QgeyBzdmcgfSA9IG1zZztcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpZ21hLmNyZWF0ZU5vZGVGcm9tU3ZnKHN2Zyk7XG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IFwiVmlzdWFsRXllc1wiO1xuICAgICAgICAgICAgcmVzdWx0LmNoaWxkcmVuXG4gICAgICAgICAgICAgIC5tYXAobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPVxuICAgICAgICAgICAgICAgICAgdHlwZW9mIG5vZGUuZmluZEFsbCA9PT0gXCJmdW5jdGlvblwiID8gbm9kZS5maW5kQWxsKCkgOiBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlcyA9IFtub2RlLCAuLi5jaGlsZHJlbl0uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYiksIFtdKVxuICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0udHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJHUk9VUFwiICYmIGl0ZW0ubmFtZS50cmltKCkgPT09IFwiR3JvdXBcIikge1xuICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gXCJBT0lcIjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIgJiZcbiAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZS50cmltKCkgPT09IFwiUmVjdGFuZ2xlXCJcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSA9IFwiSGVhdG1hcFwiO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZXN1bHQpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBoYXMgdXNlZCBBT0lcblxuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcImhhc1VzZWRBT0lcIikudGhlbihoYXNVc2VkQU9JID0+IHtcbiAgICAgICAgICAgICAgaWYgKGhhc1VzZWRBT0kgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMuc3VjY2Vzcyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMuc3VjY2Vzc1dpdGhBT0lQcm9tcHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcInJlYWNoZWQtbGltaXRcIjpcbiAgICAgICAgICAgIGZpZ21hLnVpLnNob3coKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcInJlcXVlc3QtZXJyb3JcIjpcbiAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IG1zZztcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKGVycm9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImxpbWl0LWVuZFwiOlxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICApO1xufVxuIiwiY29uc3QgeyBNRVNTQUdFUyB9ID0gcmVxdWlyZShcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiKTtcbmNvbnN0IHsgc2hvd1VJQXN5bmMgfSA9IHJlcXVpcmUoXCIuLi91dGlscy9zaG93VUlBc3luYy5qc1wiKTtcblxuZXhwb3J0IGNvbnN0IGxlYXJuQ3JlZGl0cyA9ICgpID0+IHtcbiAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcImFwaUtleVwiKS50aGVuKGFwaUtleSA9PiB7XG4gICAgaWYgKCFhcGlLZXkpIHtcbiAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLnNldFVwQXBpS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1VJQXN5bmMoX19odG1sX18sIHsgdmlzaWJsZTogZmFsc2UgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICB0eXBlOiBcImxlYXJuLWNyZWRpdHNcIixcbiAgICAgICAgICBhcGlLZXk6IGFwaUtleVxuICAgICAgICB9KTtcblxuICAgICAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gXCJnZXQtY3JlZGl0c1wiKSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihg8J+UpiBZb3UgaGF2ZSAke21zZy5jcmVkaXRzfSBjcmVkaXRzIGxlZnQhYCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFxuICAgICAgICAgICAgICBcIvCfmqggU29tZXRoaW5nIHdlbnQgd3JvbmchIFBsZWFzZSwgY29udGFjdCB1cyBhdCBpbmZvQGxvY2V5ZS5pb1wiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiY29uc3QgeyBNRVNTQUdFUyB9ID0gcmVxdWlyZShcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiKTtcbmNvbnN0IHsgc2hvd1VJQXN5bmMgfSA9IHJlcXVpcmUoXCIuLi91dGlscy9zaG93VUlBc3luYy5qc1wiKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldEFwaUtleSgpIHtcbiAgc2hvd1VJQXN5bmMoX19odG1sX18sIHsgdmlzaWJsZTogdHJ1ZSwgd2lkdGg6IDYwMCwgaGVpZ2h0OiA1MDAgfSkudGhlbigoKSA9PiB7XG4gICAgZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gXCJzZXQtYXBpLWtleVwiKSB7XG4gICAgICAgIC8vIFNldCB0aGUgbmV3IEFQSSBrZXlcbiAgICAgICAgY29uc3QgeyBhcGlLZXkgfSA9IG1zZztcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhcImFwaUtleVwiLCBhcGlLZXkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLmFwaUtleVN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiY2FuY2VsLWFwaS1rZXlcIikge1xuICAgICAgICAvLyBVc2VyIGNhbmNlbCBpbnB1dCwgc28gbm8gYWN0aW9uIGlzIHRha2VuXG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLmFwaUtleUNhbmNlbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBIZXJlIHNlbmQgYSBtZXNzYWdlIGJhc2VkIG9uIHRoZSBjb29raWUgZXhpc3RhbmNlXG4gICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcImFwaUtleVwiKS50aGVuKHByZXZpb3VzQXBpS2V5ID0+IHtcbiAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzZXQtcHJldmlvdXMtYXBpLWtleVwiLCBwcmV2aW91c0FwaUtleSB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJjb25zdCB7IE1FU1NBR0VTIH0gPSByZXF1aXJlKFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCIpO1xuY29uc3QgeyBzaG93VUlBc3luYyB9ID0gcmVxdWlyZShcIi4uL3V0aWxzL3Nob3dVSUFzeW5jLmpzXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd09uQm9hcmRpbmcoKSB7XG4gIHNob3dVSUFzeW5jKF9faHRtbF9fLCB7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICB3aWR0aDogNjAwLFxuICAgIGhlaWdodDogNTAwXG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwib24tYm9hcmRpbmdcIlxuICAgIH0pO1xuXG4gICAgZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICAgIGlmIChtc2cudHlwZSA9PT0gXCJzZXQtb24tYm9hcmRpbmctY29va2llXCIpIHtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhcImhhc09uQm9hcmRpbmdcIiwgXCJmYWxzZVwiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihNRVNTQUdFUy5vbkJvYXJkaW5nRW5kKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jb25zdCB7IHNob3dVSUFzeW5jIH0gPSByZXF1aXJlKFwiLi91dGlscy9zaG93VUlBc3luYy5qc1wiKTtcbmNvbnN0IHsgbGVhcm5DcmVkaXRzIH0gPSByZXF1aXJlKFwiLi9jb21tYW5kcy9sZWFybkNyZWRpdHMuanNcIik7XG5jb25zdCB7IHNob3dPbkJvYXJkaW5nIH0gPSByZXF1aXJlKFwiLi9jb21tYW5kcy9zaG93T25Cb2FyZGluZy5qc1wiKTtcbmNvbnN0IHsgc2V0QXBpS2V5IH0gPSByZXF1aXJlKFwiLi9jb21tYW5kcy9zZXRBcGlLZXkuanNcIik7XG5jb25zdCB7IGdlbmVyYXRlSGVhdG1hcCB9ID0gcmVxdWlyZShcIi4vY29tbWFuZHMvZ2VuZXJhdGVIZWF0bWFwLmpzXCIpO1xuY29uc3QgeyBjbGFyaXR5UHJlZGljdGlvbiB9ID0gcmVxdWlyZShcIi4vY29tbWFuZHMvY2xhcml0eVByZWRpY3Rpb24uanNcIik7XG4oKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHN3aXRjaCAoZmlnbWEuY29tbWFuZCkge1xuICAgICAgICBjYXNlIFwibGVhcm5DcmVkaXRzXCI6XG4gICAgICAgICAgICBsZWFybkNyZWRpdHMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZ2VuZXJhdGVIZWF0bWFwXCI6XG4gICAgICAgICAgICBnZW5lcmF0ZUhlYXRtYXAoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY2xhcml0eVByZWRpY3Rpb25EZXNrdG9wXCI6XG4gICAgICAgICAgICBjbGFyaXR5UHJlZGljdGlvbihcImRlc2t0b3BcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNsYXJpdHlQcmVkaWN0aW9uTW9iaWxlXCI6XG4gICAgICAgICAgICBjbGFyaXR5UHJlZGljdGlvbihcIm1vYmlsZVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2hvd09uQm9hcmRpbmdcIjpcbiAgICAgICAgICAgIHNob3dPbkJvYXJkaW5nKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNldEFwaUtleVwiOlxuICAgICAgICAgICAgc2V0QXBpS2V5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwiVW5rbm93biBjb21tYW5kXCIpO1xuICAgIH1cbn0pKSgpO1xuIiwiaW1wb3J0IGdlbmVyYXRlSW50ZXJqZWN0aW9uIGZyb20gXCJpbnRlcmplY3Rpb24tanNcIjtcblxuZXhwb3J0IGNvbnN0IE1JTl9BT0lfV0lEVEggPSAxMDtcbmV4cG9ydCBjb25zdCBNSU5fQU9JX0hFSUdIVCA9IDEwO1xuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vYXBpLnZpc3VhbGV5ZXMuZGVzaWduL3ByZWRpY3QvXCI7XG5cbmZ1bmN0aW9uIHNlbGVjdFJhbmRvbUZyb21BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21UaXAoKSB7XG4gIHJldHVybiAoXG4gICAgc2VsZWN0UmFuZG9tRnJvbUFycmF5KFRISU5LX0VNT0pJUykgK1xuICAgIFwiIFRJUDogXCIgK1xuICAgIHNlbGVjdFJhbmRvbUZyb21BcnJheShVU0VGVUxfVElQUylcbiAgKTtcbn1cblxuY29uc3QgU1VDQ0VTU19FTU9KSVMgPSBbXCLwn5mMXCIsIFwi8J+agFwiLCBcIvCfjolcIiwgXCLwn5GMXCIsIFwi8J+lsFwiLCBcIvCfpbNcIl07XG5jb25zdCBUSElOS19FTU9KSVMgPSBbXCLwn6egXCIsIFwi8J+klFwiLCBcIvCfkqFcIl07XG5cbmZ1bmN0aW9uIHJhbmRvbUVtb2ppKCkge1xuICByZXR1cm4gc2VsZWN0UmFuZG9tRnJvbUFycmF5KFNVQ0NFU1NfRU1PSklTKTtcbn1cblxuZXhwb3J0IGNvbnN0IFVTRUZVTF9USVBTID0gW1xuICBcIlRoZSBBT0kgUmVjdGFuZ2Ugc2hvdWxkIGJlIHBsYWNlZCBhdCB0aGUgdG9wIEZyYW1lLi4uXCIsXG5cbiAgXCJDcmVhdGUgQXJlYXMgb2YgSW50ZXJlc3QgYnkgZHJhd2luZyBhIFJlY3RhbmdsZSBuYW1lZCBBT0kgaW5zaWRlIHlvdXIgRnJhbWUuLi5cIixcbiAgXCJUaGUgYXR0ZW50aW9uIGlzIGhpZ2hlciBvbiB0aGUgcmVkIGFyZWFzLi4uXCIsXG4gIFwiQ2xhcml0eSBzY29yaW5nIGJhc2VkIG9uIGN1c3RvbSBkZW1vZ3JwYWhpY3Mgd291bGQgYmUgYXZhaWxhYmxlIHNvb24uLi5cIixcbiAgXCJBL0IgdGVzdGluZyBzbWFsbCBVSSB0d2Vha3MgaXMgYSBjb21tb24gdXNlIGNhc2Ugb2YgVmlzdWFsRXllcy4uLlwiXG5dO1xuXG5leHBvcnQgY29uc3QgT05fQk9BUkRJTkcgPSB7XG4gIHRpdGxlOiBcIldlbGNvbWUgb24gYm9hcmRcIixcbiAgdGlwczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIvCflKUgSG93IHRvIGdlbmVyYXRlIHlvdXIgQXR0ZW50aW9uIEhlYXRtYXA6XCIsXG4gICAgICBzdGVwczogW1wiU2VsZWN0IGEgRnJhbWUgXCIsIFwiUnVuIHRoZSBwbHVnaW4gY29tbWFuZFwiXVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwi8J+TpiBIb3cgdG8gY3JlYXRlIEFyZWFzIG9mIEludGVyZXN0OlwiLFxuICAgICAgc3RlcHM6IFtcbiAgICAgICAgXCJDcmVhdGUgYSBSZWN0YW5nbGUgbmFtZWQgQU9JXCIsXG4gICAgICAgIFwiU2VsZWN0IHRoZSBGcmFtZVwiLFxuICAgICAgICBcIlJ1biB0aGUgcGx1Z2luIGNvbW1hbmRcIlxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgZm9vdGVyOiB7XG4gICAgdGV4dDogXCLwn5SXIExlYXJuIG1vcmUgYWJvdXQgdGhlIHVzYWdlIG9mIG91ciBwbHVnaW4gaGVyZTpcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnZpc3VhbGV5ZXMuZGVzaWduL2xlYXJuYCxcIlxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgQVBJX0VSUk9SUyA9IHtcbiAgU1RBVFVTXzQwMDogXCLwn5ixIFdlIGFyZSBkZWVwbHkgc29ycnksIGJ1dCBzb21ldGhpbmcgd2VudCB0ZXJyaWJsZSB3cm9uZyFcIixcbiAgU1RBVFVTXzQwMTogXCLwn5mF4oCNIFlvdXIgQVBJIGtleSBpcyBpbnZhbGlkXCIsXG4gIFNUQVRVU180MDI6IFwi8J+MiCBZb3Ugc2hvdWxkIHVwZ3JhZGUgeW91ciBhY2NvdW50IHRvIGFjY2VzcyB0aGlzIGZlYXR1cmVcIixcbiAgU1RBVFVTXzQwMzogXCLwn5qoIFlvdXIgaGVhdG1hcHMgbGltaXQgaGFzIGJlZW4gZXhjZWVkZWRcIixcbiAgU1RBVFVTXzUwMzpcbiAgICBcIvCfmqcgT3VyIGVsdmVzIGFyZSB3b3JraW5nIGhhcmQgdG8gdXBkYXRlIG91ciBzZXJ2aWNlcy4gVmlzdWFsRXllcyB3aWxsIGJlIG9ubGluZSByZWFsbHkgc29vbiEhXCJcbn07XG5cbmV4cG9ydCBjb25zdCBBT0lfRVJST1JTID0ge1xuICBzaXplOiB7XG4gICAgbWVzc2FnZTogYPCfkY4gT25lIG9mIHlvdXIgcmVjdGFuZ2xlcyB3YXMgbm90IGJpZyBlbm91Z2ggKG1pbmltdW0gJHtNSU5fQU9JX1dJRFRIfXgke01JTl9BT0lfSEVJR0hUfSBwaXhlbHMpYCxcbiAgICBsYXllck5hbWU6IGDwn5qoIFRvbyBzbWFsbCAobWluaW11bSAke01JTl9BT0lfV0lEVEh9eCR7TUlOX0FPSV9IRUlHSFR9KWBcbiAgfSxcbiAgcGxhY2VtZW50OiB7XG4gICAgbWVzc2FnZTogYPCfmLEgT25lIG9mIHlvdXIgcmVjdGFuZ2xlcyBpcyBvdXRzaWRlIHRoZSBjdXJyZW50IEZyYW1lLmAsXG4gICAgbGF5ZXJOYW1lOiBg8J+aqCBPZmYgdGhlIGN1cnJlbnQgRnJhbWVgXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFUyA9IHtcbiAgYXBpS2V5U3VjY2VzczogcmFuZG9tRW1vamkoKSArIFwiIFlvdXIgbmV3IEFQSSBrZXkgaGFzIGJlZW4gc2F2ZWQuXCIsXG4gIGFwaUtleUNhbmNlbDogXCLwn4+DIEtlZXAgdXNpbmcgeW91ciBvbGQgQVBJIGtleS5cIixcbiAgbm9TZWxlY3Rpb246IFwi8J+luiBZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3Qgb25lIGZyYW1lLlwiLFxuICBub0FQSUtleTogXCLinItQbGVhc2UgZW50ZXIgeW91ciBWaXN1YWxFeWVzIEFQSSBrZXkgZmlyc3RcIixcbiAgc3VjY2VzczogcmFuZG9tRW1vamkoKSArIGAgJHtnZW5lcmF0ZUludGVyamVjdGlvbigpfSEgWW91ciBoZWF0bWFwIGlzIHJlYWR5IWAsXG4gIHN1Y2Nlc3NXaXRoQU9JUHJvbXB0OiBg8J+muOKAjSBZb3UgY2FuIGltcHJlc3MgZXZlbiBtb3JlIHlvdXIgY2xpZW50IHdpdGggQXJlYXMgb2YgSW50ZXJlc3QuLi5gLFxuICBvbkJvYXJkaW5nRW5kOiBcIvCfmqIgUmUtcnVuIHRoZSBwbHVnaW4gdG8gc2VlIHRoZSBtYWdpYyFcIixcbiAgc2V0QXBpS2V5OiBcIvCflKcgUGxlYXNlIHNldCB5b3VyIEFQSSBrZXkgZmlyc3QhXCJcbn07XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gY29udmVydEZyYW1lVG9BcnJheWJ1ZmZlcihmcmFtZSkge1xuICBjb25zdCBleHBvcnRTZXR0aW5ncyA9IHsgZm9ybWF0OiBcIkpQR1wiLCBjb250ZW50c09ubHk6IHRydWUgfTtcbiAgY29uc3QgYXJyYXlidWZmZXIgPSBhd2FpdCBmcmFtZS5leHBvcnRBc3luYyhleHBvcnRTZXR0aW5ncyk7XG4gIHJldHVybiBhcnJheWJ1ZmZlcjtcbn1cbiIsIi8vIHNob3dVSUFzeW5jKCkgZnVuY3Rpb24gaGFuZGxlcyB0aGUgUElORy1QT05HIGNvbW11bmljYXRpb25cbnZhciBpc1VJUmVhZHkgPSBmYWxzZTtcbmNvbnN0IFBJTkdfUE9OR19JTlRFUlZBTCA9IDIwMDtcblxuZnVuY3Rpb24gcGluZ1VJKCkge1xuICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgdHlwZTogXCJwaW5nXCJcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhaXRVSVRocmVhZCgpIHtcbiAgaWYgKGlzVUlSZWFkeSkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBwaW5nVUkoKTtcbiAgICBzZXRUaW1lb3V0KHdhaXRVSVRocmVhZCwgUElOR19QT05HX0lOVEVSVkFMKTtcbiAgfVxuICByZXR1cm47XG59XG5cbmV4cG9ydCBjb25zdCBzaG93VUlBc3luYyA9ICh0YXJnZXQsIG9wdGlvbnMpID0+IHtcbiAgZmlnbWEuc2hvd1VJKHRhcmdldCwgb3B0aW9ucyk7XG4gIHdhaXRVSVRocmVhZCgpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgICAgaWYgKG1zZy50eXBlID09PSBcInBvbmdcIikge1xuICAgICAgICByZXNvbHZlKFwidHJ1ZVwiKTtcbiAgICAgICAgaXNVSVJlYWR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9