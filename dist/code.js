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
const { MESSAGES, AOI_ERRORS, getRandomTip, MIN_AOI_WIDTH, MIN_AOI_HEIGHT } = __webpack_require__(/*! ./utils/constants.js */ "./src/plugin/utils/constants.js");
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
    }
    else {
        pingUI();
        setTimeout(waitUIThread, PING_PONG_INTERVAL);
    }
    return;
}
function showUIAsync(target, options) {
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
}
function getSelectedFrameNodes() {
    return figma.currentPage.selection.filter(item => item.type === "FRAME");
}
function setApiKey(isFromHeatmap) {
    return __awaiter(this, void 0, void 0, function* () {
        showUIAsync(__html__, { visible: true, width: 600, height: 500 }).then(() => {
            figma.ui.onmessage = msg => {
                if (msg.type === "set-api-key") {
                    const { apiKey } = msg;
                    figma.clientStorage.setAsync("apiKey", apiKey).then(() => {
                        if (isFromHeatmap) {
                            figma.notify(MESSAGES.apiKeySuccess);
                            showOnBoarding();
                        }
                        else {
                            figma.closePlugin(MESSAGES.apiKeySuccess);
                        }
                    });
                }
                else if (msg.type === "cancel-api-key") {
                    figma.closePlugin(MESSAGES.apiKeyCancel);
                }
                else {
                    figma.closePlugin();
                }
            };
            figma.clientStorage.getAsync("apiKey").then(previousApiKey => {
                figma.ui.postMessage({ type: "set-previous-api-key", previousApiKey });
            });
        });
    });
}
function learnCredits() {
    figma.clientStorage.getAsync("apiKey").then(apiKey => {
        if (!apiKey) {
            figma.closePlugin(MESSAGES.setUpApiKey);
        }
        else {
            showUIAsync(__html__, { visible: false }).then(() => {
                figma.ui.postMessage({
                    type: "learn-credits",
                    apiKey: apiKey
                });
                figma.ui.onmessage = msg => {
                    if (msg.type === "get-credits") {
                        figma.closePlugin(`🔦 You have ${msg.credits} credits left!`);
                    }
                    else {
                        figma.closePlugin("🚨 Something went wrong! Please, contact us at info@loceye.io");
                    }
                };
            });
        }
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
            rect.opacity = 0;
            rect.name = "🚨 Outside Frame";
        }
        else if (isRectSmall(rect)) {
            rect.opacity = 0;
            rect.name = `🚨 Too Small (min ${MIN_AOI_WIDTH}x${MIN_AOI_HEIGHT})`;
        }
        else {
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
    return (rect.x < 0 ||
        rect.x + rect.width > frame.width ||
        rect.y < 0 ||
        rect.y + rect.height > frame.height);
}
function isRectSmall(rect) {
    return rect.width < MIN_AOI_WIDTH || rect.height < MIN_AOI_HEIGHT;
}
function generateHeatmap() {
    figma.clientStorage.getAsync("apiKey").then(apiKey => {
        if (!apiKey) {
            figma.clientStorage.setAsync("hasOnBoarding", "true").then(() => {
                setApiKey(true);
            });
        }
        else {
            figma.clientStorage.getAsync("hasOnBoarding").then(hasOnBoarding => {
                if (hasOnBoarding === "true") {
                    showUIAsync(__html__, {
                        visible: true,
                        width: 600,
                        height: 500
                    }).then(() => {
                        showOnBoarding();
                    });
                }
                else {
                    startProcess();
                }
            });
        }
        return;
    });
}
function showOnBoarding() {
    figma.ui.postMessage({
        type: "on-boarding"
    });
    figma.ui.onmessage = msg => {
        if (msg.type === "set-on-boarding-cookie") {
            figma.clientStorage.setAsync("hasOnBoarding", "false").then(() => {
                figma.closePlugin(MESSAGES.onBoardingEnd);
            });
        }
        else {
            figma.closePlugin();
        }
    };
}
function startProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const selectedFrames = getSelectedFrameNodes();
        if (selectedFrames.length === 0) {
            figma.closePlugin(MESSAGES.noSelection);
        }
        else {
            figma.notify(getRandomTip());
            const rectangles = findAOILayers();
            const hasAOI = rectangles.length > 0;
            figma.clientStorage.getAsync("hasUsedAOI").then(hasUsedAOI => {
                if (!(hasUsedAOI === "true") && hasAOI) {
                    console.log("This cool guy has just used our AOI feature. Let's not spam him anymore!");
                    figma.clientStorage.setAsync("hasUsedAOI", "true");
                }
                figma.clientStorage.getAsync("apiKey").then((apiKey) => __awaiter(this, void 0, void 0, function* () {
                    const frame = selectedFrames[0];
                    const arraybuffer = yield convertFrameToArraybuffer(frame);
                    postImage(arraybuffer, apiKey, frame, hasAOI, rectangles);
                }));
            });
        }
    });
}
function convertFrameToArraybuffer(frame) {
    return __awaiter(this, void 0, void 0, function* () {
        const exportSettings = { format: "JPG", contentsOnly: true };
        const arraybuffer = yield frame.exportAsync(exportSettings);
        return arraybuffer;
    });
}
function postImage(arraybuffer, apiKey, frame, hasAOI, aoi) {
    showUIAsync(__html__, { visible: false, width: 500, height: 350 }).then(() => {
        figma.ui.postMessage({
            type: "post-image",
            arraybuffer,
            apiKey,
            hasAOI,
            aoi
        });
        figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
            const { type } = msg;
            switch (type) {
                case "svg-result":
                    const { svg } = msg;
                    const result = figma.createNodeFromSvg(svg);
                    result.name = "VisualEyes";
                    result.children
                        .map(node => {
                        const children = typeof node.findAll === "function" ? node.findAll() : [];
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
                        if (item.type === "RECTANGLE" &&
                            item.name.trim() === "Rectangle") {
                            item.name = "Heatmap";
                            return true;
                        }
                        return false;
                    });
                    frame.appendChild(result);
                    figma.clientStorage.getAsync("hasUsedAOI").then(hasUsedAOI => {
                        if (hasUsedAOI === "true") {
                            figma.closePlugin(MESSAGES.success);
                        }
                        else {
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
        });
    });
}
(() => __awaiter(this, void 0, void 0, function* () {
    switch (figma.command) {
        case "learnCredits":
            learnCredits();
            break;
        case "generateHeatmap":
            generateHeatmap();
            break;
        case "setApiKey":
            setApiKey(false);
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludGVyamVjdGlvbi1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW50ZXJqZWN0aW9uLWpzL2ludGVyamVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdXRpbHMvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsbUJBQU8sQ0FBQyx3RUFBaUI7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBLE9BQU8sb0VBQW9FLEdBQUcsbUJBQU8sQ0FBQyw2REFBc0I7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlDQUF5QztBQUN4RTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsK0NBQStDO0FBQ3JGLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHlEQUF5RCxZQUFZO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWMsR0FBRyxlQUFlO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsd0NBQXdDO0FBQ2pELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwyQkFBMkIsMENBQTBDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZTRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHNFQUFzRSxjQUFjLEdBQUcsZUFBZTtBQUN0Ryx3Q0FBd0MsY0FBYyxHQUFHLGVBQWU7QUFDeEUsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzREFBb0IsR0FBRztBQUN0RDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGx1Z2luL2NvbnRyb2xsZXIudHNcIik7XG4iLCIvKiFcbiAqIGludGVyamVjdGlvbi5qcyB2MC4wLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkgRElNSVRSSVMgUkFQVElTXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuXG5jb25zdCBpbnRlcmplY3Rpb25zID0gcmVxdWlyZShcIi4vaW50ZXJqZWN0aW9uc1wiKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gIHJldHVybiBpbnRlcmplY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGludGVyamVjdGlvbnMubGVuZ3RoKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGU7XG4iLCJ2YXIgaW50ZXJqZWN0aW9ucyA9IFtcbiAgXCJBaGFcIixcbiAgXCJCb28teWFoXCIsXG4gIFwiSG8taG9cIixcbiAgXCJIdXJyYWggXCIsXG4gIFwiT2zDqVwiLFxuICBcIlJhaFwiLFxuICBcIlRhLWRhXCIsXG4gIFwiQmF6aW5nYSFcIixcbiAgXCJBaGVtXCIsXG4gIFwiT29oLWxhLWxhXCIsXG4gIFwiV2hvYVwiLFxuICBcIllhaG9vXCIsXG4gIFwiWWVhaFwiLFxuICBcIllvby1ob29cIixcbiAgXCJaaW5nXCIsXG4gIFwiQ29uZ3JhdHNcIixcbiAgXCJZb3d6YVwiLFxuICBcIkFsb2hhXCIsXG4gIFwiQWxsZWx1aWFcIixcbiAgXCJIb2x5IENvd1wiLFxuICBcIlllYVwiLFxuICBcIlllYWhcIixcbiAgXCJZb1wiLFxuICBcIlBob2FyXCIsXG4gIFwiVmEtdmEtdm9vbVwiLFxuICBcIllheVwiLFxuICBcIldoZWVcIixcbiAgXCJXaG9vcGVlXCIsXG4gIFwiV29vXCIsXG4gIFwiWW8taG8taG9cIixcbiAgXCJZaXBwZWVcIixcbiAgXCJZZWUtaGF3XCIsXG4gIFwiWWF5XCJcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gaW50ZXJqZWN0aW9ucztcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc3QgeyBNRVNTQUdFUywgQU9JX0VSUk9SUywgZ2V0UmFuZG9tVGlwLCBNSU5fQU9JX1dJRFRILCBNSU5fQU9JX0hFSUdIVCB9ID0gcmVxdWlyZShcIi4vdXRpbHMvY29uc3RhbnRzLmpzXCIpO1xudmFyIGlzVUlSZWFkeSA9IGZhbHNlO1xuY29uc3QgUElOR19QT05HX0lOVEVSVkFMID0gMjAwO1xuZnVuY3Rpb24gcGluZ1VJKCkge1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJwaW5nXCJcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHdhaXRVSVRocmVhZCgpIHtcbiAgICBpZiAoaXNVSVJlYWR5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBpbmdVSSgpO1xuICAgICAgICBzZXRUaW1lb3V0KHdhaXRVSVRocmVhZCwgUElOR19QT05HX0lOVEVSVkFMKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gc2hvd1VJQXN5bmModGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgZmlnbWEuc2hvd1VJKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgd2FpdFVJVGhyZWFkKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSBcInBvbmdcIikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIGlzVUlSZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRTZWxlY3RlZEZyYW1lTm9kZXMoKSB7XG4gICAgcmV0dXJuIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09IFwiRlJBTUVcIik7XG59XG5mdW5jdGlvbiBzZXRBcGlLZXkoaXNGcm9tSGVhdG1hcCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNob3dVSUFzeW5jKF9faHRtbF9fLCB7IHZpc2libGU6IHRydWUsIHdpZHRoOiA2MDAsIGhlaWdodDogNTAwIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09IFwic2V0LWFwaS1rZXlcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGFwaUtleSB9ID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwiYXBpS2V5XCIsIGFwaUtleSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGcm9tSGVhdG1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShNRVNTQUdFUy5hcGlLZXlTdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93T25Cb2FyZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMuYXBpS2V5U3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJjYW5jZWwtYXBpLWtleVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLmFwaUtleUNhbmNlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwiYXBpS2V5XCIpLnRoZW4ocHJldmlvdXNBcGlLZXkgPT4ge1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzZXQtcHJldmlvdXMtYXBpLWtleVwiLCBwcmV2aW91c0FwaUtleSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGxlYXJuQ3JlZGl0cygpIHtcbiAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwiYXBpS2V5XCIpLnRoZW4oYXBpS2V5ID0+IHtcbiAgICAgICAgaWYgKCFhcGlLZXkpIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLnNldFVwQXBpS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNob3dVSUFzeW5jKF9faHRtbF9fLCB7IHZpc2libGU6IGZhbHNlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJsZWFybi1jcmVkaXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGFwaUtleTogYXBpS2V5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSBcImdldC1jcmVkaXRzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKGDwn5SmIFlvdSBoYXZlICR7bXNnLmNyZWRpdHN9IGNyZWRpdHMgbGVmdCFgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKFwi8J+aqCBTb21ldGhpbmcgd2VudCB3cm9uZyEgUGxlYXNlLCBjb250YWN0IHVzIGF0IGluZm9AbG9jZXllLmlvXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaW5kQU9JTGF5ZXJzKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25cbiAgICAgICAgLm1hcChub2RlID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0eXBlb2Ygbm9kZS5maW5kQWxsID09PSBcImZ1bmN0aW9uXCIgPyBub2RlLmZpbmRBbGwoKSA6IFtdO1xuICAgICAgICBjb25zdCBub2RlcyA9IFtub2RlLCAuLi5jaGlsZHJlbl0uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgfSlcbiAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYiksIFtdKVxuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSBcIlJFQ1RBTkdMRVwiICYmIGl0ZW0ubmFtZS50cmltKCkgPT09IFwiQU9JXCIpXG4gICAgICAgIC5tYXAocmVjdCA9PiB7XG4gICAgICAgIGlmIChpc1JlY3RPdXRzaWRlRnJhbWUocmVjdCwgcmVjdC5wYXJlbnQpKSB7XG4gICAgICAgICAgICByZWN0Lm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgcmVjdC5uYW1lID0gXCLwn5qoIE91dHNpZGUgRnJhbWVcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1JlY3RTbWFsbChyZWN0KSkge1xuICAgICAgICAgICAgcmVjdC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHJlY3QubmFtZSA9IGDwn5qoIFRvbyBTbWFsbCAobWluICR7TUlOX0FPSV9XSURUSH14JHtNSU5fQU9JX0hFSUdIVH0pYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVjdDtcbiAgICB9KVxuICAgICAgICAubWFwKHJlY3QgPT4gKHtcbiAgICAgICAgcG9pbnRzOiBnZXRQb2ludHMocmVjdCksXG4gICAgICAgIGlkOiByZWN0LmlkXG4gICAgfSkpO1xuICAgIHJldHVybiByZWN0YW5nbGVzO1xufVxuZnVuY3Rpb24gZ2V0UG9pbnRzKHJlY3RhbmdsZSkge1xuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gcmVjdGFuZ2xlO1xuICAgIHJldHVybiBbXG4gICAgICAgIHsgeCwgeSwgaW5kZXg6IDAgfSxcbiAgICAgICAgeyB4OiB4ICsgd2lkdGgsIHksIGluZGV4OiAxIH0sXG4gICAgICAgIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0LCBpbmRleDogMiB9LFxuICAgICAgICB7IHgsIHk6IHkgKyBoZWlnaHQsIGluZGV4OiAzIH1cbiAgICBdO1xufVxuZnVuY3Rpb24gaXNSZWN0T3V0c2lkZUZyYW1lKHJlY3QsIGZyYW1lKSB7XG4gICAgcmV0dXJuIChyZWN0LnggPCAwIHx8XG4gICAgICAgIHJlY3QueCArIHJlY3Qud2lkdGggPiBmcmFtZS53aWR0aCB8fFxuICAgICAgICByZWN0LnkgPCAwIHx8XG4gICAgICAgIHJlY3QueSArIHJlY3QuaGVpZ2h0ID4gZnJhbWUuaGVpZ2h0KTtcbn1cbmZ1bmN0aW9uIGlzUmVjdFNtYWxsKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCA8IE1JTl9BT0lfV0lEVEggfHwgcmVjdC5oZWlnaHQgPCBNSU5fQU9JX0hFSUdIVDtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSGVhdG1hcCgpIHtcbiAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwiYXBpS2V5XCIpLnRoZW4oYXBpS2V5ID0+IHtcbiAgICAgICAgaWYgKCFhcGlLZXkpIHtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJoYXNPbkJvYXJkaW5nXCIsIFwidHJ1ZVwiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBcGlLZXkodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJoYXNPbkJvYXJkaW5nXCIpLnRoZW4oaGFzT25Cb2FyZGluZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc09uQm9hcmRpbmcgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dVSUFzeW5jKF9faHRtbF9fLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAwXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd09uQm9hcmRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzaG93T25Cb2FyZGluZygpIHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwib24tYm9hcmRpbmdcIlxuICAgIH0pO1xuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gXCJzZXQtb24tYm9hcmRpbmctY29va2llXCIpIHtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJoYXNPbkJvYXJkaW5nXCIsIFwiZmFsc2VcIikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMub25Cb2FyZGluZ0VuZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gc3RhcnRQcm9jZXNzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRnJhbWVzID0gZ2V0U2VsZWN0ZWRGcmFtZU5vZGVzKCk7XG4gICAgICAgIGlmIChzZWxlY3RlZEZyYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLm5vU2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShnZXRSYW5kb21UaXAoKSk7XG4gICAgICAgICAgICBjb25zdCByZWN0YW5nbGVzID0gZmluZEFPSUxheWVycygpO1xuICAgICAgICAgICAgY29uc3QgaGFzQU9JID0gcmVjdGFuZ2xlcy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcImhhc1VzZWRBT0lcIikudGhlbihoYXNVc2VkQU9JID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIShoYXNVc2VkQU9JID09PSBcInRydWVcIikgJiYgaGFzQU9JKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBjb29sIGd1eSBoYXMganVzdCB1c2VkIG91ciBBT0kgZmVhdHVyZS4gTGV0J3Mgbm90IHNwYW0gaGltIGFueW1vcmUhXCIpO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwiaGFzVXNlZEFPSVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJhcGlLZXlcIikudGhlbigoYXBpS2V5KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gc2VsZWN0ZWRGcmFtZXNbMF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5YnVmZmVyID0geWllbGQgY29udmVydEZyYW1lVG9BcnJheWJ1ZmZlcihmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RJbWFnZShhcnJheWJ1ZmZlciwgYXBpS2V5LCBmcmFtZSwgaGFzQU9JLCByZWN0YW5nbGVzKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY29udmVydEZyYW1lVG9BcnJheWJ1ZmZlcihmcmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGV4cG9ydFNldHRpbmdzID0geyBmb3JtYXQ6IFwiSlBHXCIsIGNvbnRlbnRzT25seTogdHJ1ZSB9O1xuICAgICAgICBjb25zdCBhcnJheWJ1ZmZlciA9IHlpZWxkIGZyYW1lLmV4cG9ydEFzeW5jKGV4cG9ydFNldHRpbmdzKTtcbiAgICAgICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcG9zdEltYWdlKGFycmF5YnVmZmVyLCBhcGlLZXksIGZyYW1lLCBoYXNBT0ksIGFvaSkge1xuICAgIHNob3dVSUFzeW5jKF9faHRtbF9fLCB7IHZpc2libGU6IGZhbHNlLCB3aWR0aDogNTAwLCBoZWlnaHQ6IDM1MCB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJwb3N0LWltYWdlXCIsXG4gICAgICAgICAgICBhcnJheWJ1ZmZlcixcbiAgICAgICAgICAgIGFwaUtleSxcbiAgICAgICAgICAgIGhhc0FPSSxcbiAgICAgICAgICAgIGFvaVxuICAgICAgICB9KTtcbiAgICAgICAgZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBtc2c7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3ZnLXJlc3VsdFwiOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN2ZyB9ID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmaWdtYS5jcmVhdGVOb2RlRnJvbVN2ZyhzdmcpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQubmFtZSA9IFwiVmlzdWFsRXllc1wiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHR5cGVvZiBub2RlLmZpbmRBbGwgPT09IFwiZnVuY3Rpb25cIiA/IG5vZGUuZmluZEFsbCgpIDogW107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlcyA9IFtub2RlLCAuLi5jaGlsZHJlbl0uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYiksIFtdKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0udHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcIkdST1VQXCIgJiYgaXRlbS5uYW1lLnRyaW0oKSA9PT0gXCJHcm91cFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gXCJBT0lcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwiUkVDVEFOR0xFXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUudHJpbSgpID09PSBcIlJlY3RhbmdsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gXCJIZWF0bWFwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwiaGFzVXNlZEFPSVwiKS50aGVuKGhhc1VzZWRBT0kgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1VzZWRBT0kgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMuc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihNRVNTQUdFUy5zdWNjZXNzV2l0aEFPSVByb21wdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVhY2hlZC1saW1pdFwiOlxuICAgICAgICAgICAgICAgICAgICBmaWdtYS51aS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyZXF1ZXN0LWVycm9yXCI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibGltaXQtZW5kXCI6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBzd2l0Y2ggKGZpZ21hLmNvbW1hbmQpIHtcbiAgICAgICAgY2FzZSBcImxlYXJuQ3JlZGl0c1wiOlxuICAgICAgICAgICAgbGVhcm5DcmVkaXRzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImdlbmVyYXRlSGVhdG1hcFwiOlxuICAgICAgICAgICAgZ2VuZXJhdGVIZWF0bWFwKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNldEFwaUtleVwiOlxuICAgICAgICAgICAgc2V0QXBpS2V5KGZhbHNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJVbmtub3duIGNvbW1hbmRcIik7XG4gICAgfVxufSkpKCk7XG4iLCJpbXBvcnQgZ2VuZXJhdGVJbnRlcmplY3Rpb24gZnJvbSBcImludGVyamVjdGlvbi1qc1wiO1xuXG5leHBvcnQgY29uc3QgTUlOX0FPSV9XSURUSCA9IDEwO1xuZXhwb3J0IGNvbnN0IE1JTl9BT0lfSEVJR0hUID0gMTA7XG5leHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly9hcGkudmlzdWFsZXllcy5kZXNpZ24vcHJlZGljdC9cIjtcblxuZnVuY3Rpb24gc2VsZWN0UmFuZG9tRnJvbUFycmF5KGFycikge1xuICByZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVRpcCgpIHtcbiAgcmV0dXJuIChcbiAgICBzZWxlY3RSYW5kb21Gcm9tQXJyYXkoVEhJTktfRU1PSklTKSArXG4gICAgXCIgVElQOiBcIiArXG4gICAgc2VsZWN0UmFuZG9tRnJvbUFycmF5KFVTRUZVTF9USVBTKVxuICApO1xufVxuXG5jb25zdCBTVUNDRVNTX0VNT0pJUyA9IFtcIvCfmYxcIiwgXCLwn5qAXCIsIFwi8J+OiVwiLCBcIvCfkYxcIiwgXCLwn6WwXCIsIFwi8J+ls1wiXTtcbmNvbnN0IFRISU5LX0VNT0pJUyA9IFtcIvCfp6BcIiwgXCLwn6SUXCIsIFwi8J+SoVwiXTtcblxuZnVuY3Rpb24gcmFuZG9tRW1vamkoKSB7XG4gIHJldHVybiBzZWxlY3RSYW5kb21Gcm9tQXJyYXkoU1VDQ0VTU19FTU9KSVMpO1xufVxuXG5leHBvcnQgY29uc3QgVVNFRlVMX1RJUFMgPSBbXG4gIFwiVGhlIEFPSSBSZWN0YW5nZSBzaG91bGQgYmUgcGxhY2VkIGF0IHRoZSB0b3AgRnJhbWUuLi5cIixcblxuICBcIkNyZWF0ZSBBcmVhcyBvZiBJbnRlcmVzdCBieSBkcmF3aW5nIGEgUmVjdGFuZ2xlIG5hbWVkIEFPSSBpbnNpZGUgeW91ciBGcmFtZS4uLlwiLFxuICBcIlRoZSBhdHRlbnRpb24gaXMgaGlnaGVyIG9uIHRoZSByZWQgYXJlYXMuLi5cIixcbiAgXCJDbGFyaXR5IHNjb3JpbmcgYmFzZWQgb24gY3VzdG9tIGRlbW9ncnBhaGljcyB3b3VsZCBiZSBhdmFpbGFibGUgc29vbi4uLlwiLFxuICBcIkEvQiB0ZXN0aW5nIHNtYWxsIFVJIHR3ZWFrcyBpcyBhIGNvbW1vbiB1c2UgY2FzZSBvZiBWaXN1YWxFeWVzLi4uXCJcbl07XG5cbmV4cG9ydCBjb25zdCBPTl9CT0FSRElORyA9IHtcbiAgdGl0bGU6IFwiV2VsY29tZSBvbiBib2FyZFwiLFxuICB0aXBzOiBbXG4gICAge1xuICAgICAgdGl0bGU6IFwi8J+UpSBIb3cgdG8gZ2VuZXJhdGUgeW91ciBBdHRlbnRpb24gSGVhdG1hcDpcIixcbiAgICAgIHN0ZXBzOiBbXCJTZWxlY3QgYSBGcmFtZSBcIiwgXCJSdW4gdGhlIHBsdWdpbiBjb21tYW5kXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCLwn5OmIEhvdyB0byBjcmVhdGUgQXJlYXMgb2YgSW50ZXJlc3Q6XCIsXG4gICAgICBzdGVwczogW1xuICAgICAgICBcIkNyZWF0ZSBhIFJlY3RhbmdsZSBuYW1lZCBBT0lcIixcbiAgICAgICAgXCJTZWxlY3QgdGhlIEZyYW1lXCIsXG4gICAgICAgIFwiUnVuIHRoZSBwbHVnaW4gY29tbWFuZFwiXG4gICAgICBdXG4gICAgfVxuICBdLFxuICBmb290ZXI6IHtcbiAgICB0ZXh0OiBcIvCflJcgTGVhcm4gbW9yZSBhYm91dCB0aGUgdXNhZ2Ugb2Ygb3VyIHBsdWdpbiBoZXJlOlwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cudmlzdWFsZXllcy5kZXNpZ24vbGVhcm5gLFwiXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBUElfRVJST1JTID0ge1xuICBTVEFUVVNfNDAwOiBcIvCfmLEgV2UgYXJlIGRlZXBseSBzb3JyeSwgYnV0IHNvbWV0aGluZyB3ZW50IHRlcnJpYmxlIHdyb25nIVwiLFxuICBTVEFUVVNfNDAxOiBcIvCfmYXigI0gWW91ciBBUEkga2V5IGlzIGludmFsaWRcIixcbiAgU1RBVFVTXzQwMjogXCLwn4yIIFlvdSBzaG91bGQgdXBncmFkZSB5b3VyIGFjY291bnQgdG8gYWNjZXNzIHRoaXMgZmVhdHVyZVwiLFxuICBTVEFUVVNfNDAzOiBcIvCfmqggWW91ciBoZWF0bWFwcyBsaW1pdCBoYXMgYmVlbiBleGNlZWRlZFwiLFxuICBTVEFUVVNfNTAzOlxuICAgIFwi8J+apyBPdXIgZWx2ZXMgYXJlIHdvcmtpbmcgaGFyZCB0byB1cGRhdGUgb3VyIHNlcnZpY2VzLiBWaXN1YWxFeWVzIHdpbGwgYmUgb25saW5lIHJlYWxseSBzb29uISFcIlxufTtcblxuZXhwb3J0IGNvbnN0IEFPSV9FUlJPUlMgPSB7XG4gIHNpemU6IHtcbiAgICBtZXNzYWdlOiBg8J+RjiBPbmUgb2YgeW91ciByZWN0YW5nbGVzIHdhcyBub3QgYmlnIGVub3VnaCAobWluaW11bSAke01JTl9BT0lfV0lEVEh9eCR7TUlOX0FPSV9IRUlHSFR9IHBpeGVscylgLFxuICAgIGxheWVyTmFtZTogYPCfmqggVG9vIHNtYWxsIChtaW5pbXVtICR7TUlOX0FPSV9XSURUSH14JHtNSU5fQU9JX0hFSUdIVH0pYFxuICB9LFxuICBwbGFjZW1lbnQ6IHtcbiAgICBtZXNzYWdlOiBg8J+YsSBPbmUgb2YgeW91ciByZWN0YW5nbGVzIGlzIG91dHNpZGUgdGhlIGN1cnJlbnQgRnJhbWUuYCxcbiAgICBsYXllck5hbWU6IGDwn5qoIE9mZiB0aGUgY3VycmVudCBGcmFtZWBcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IE1FU1NBR0VTID0ge1xuICBhcGlLZXlTdWNjZXNzOiByYW5kb21FbW9qaSgpICsgXCIgWW91ciBuZXcgQVBJIGtleSBoYXMgYmVlbiBzYXZlZC5cIixcbiAgYXBpS2V5Q2FuY2VsOiBcIvCfj4MgS2VlcCB1c2luZyB5b3VyIG9sZCBBUEkga2V5LlwiLFxuICBub1NlbGVjdGlvbjogXCLwn6W6IFlvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCBvbmUgZnJhbWUuXCIsXG4gIG5vQVBJS2V5OiBcIuKci1BsZWFzZSBlbnRlciB5b3VyIFZpc3VhbEV5ZXMgQVBJIGtleSBmaXJzdFwiLFxuICBzdWNjZXNzOiByYW5kb21FbW9qaSgpICsgYCAke2dlbmVyYXRlSW50ZXJqZWN0aW9uKCl9ISBZb3VyIGhlYXRtYXAgaXMgcmVhZHkhYCxcbiAgc3VjY2Vzc1dpdGhBT0lQcm9tcHQ6IGDwn6a44oCNIFlvdSBjYW4gaW1wcmVzcyBldmVuIG1vcmUgeW91ciBjbGllbnQgd2l0aCBBcmVhcyBvZiBJbnRlcmVzdC4uLmAsXG4gIG9uQm9hcmRpbmdFbmQ6IFwi8J+aoiBSZS1ydW4gdGhlIHBsdWdpbiB0byBzZWUgdGhlIG1hZ2ljIVwiLFxuICBzZXRBcGlLZXk6IFwi8J+UpyBQbGVhc2Ugc2V0IHlvdXIgQVBJIGtleSBmaXJzdCFcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=