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
const { arraybufferToBase64 } = __webpack_require__(/*! ./utils/arraybufferToBase64.js */ "./src/plugin/utils/arraybufferToBase64.js");
const { MESSAGES, AOI_ERRORS, getRandomTip } = __webpack_require__(/*! ./utils/constants.js */ "./src/plugin/utils/constants.js");
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
    return new Promise((resolve, reject) => {
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
                    figma.root.setPluginData("apiKey", apiKey);
                    figma.root.setPluginData("hasOnBoarding", "true");
                    if (isFromHeatmap) {
                        figma.notify(MESSAGES.apiKeySuccess);
                        showOnBoarding();
                    }
                    else {
                        figma.closePlugin(MESSAGES.apiKeySuccess);
                    }
                }
                else if (msg.type === "cancel-api-key") {
                    figma.closePlugin(MESSAGES.apiKeyCancel);
                }
                else {
                    figma.closePlugin();
                }
            };
            const previousApiKey = figma.root.getPluginData("apiKey");
            figma.ui.postMessage({ type: "set-previous-api-key", previousApiKey });
        });
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
            rect.name = "🚨 Too Small (min 70x32)";
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
    return rect.width < 70 || rect.height < 32;
}
function generateHeatmap() {
    const apiKey = figma.root.getPluginData("apiKey");
    if (!apiKey) {
        figma.root.setPluginData("hasOnBoarding", "true");
        setApiKey(true);
    }
    else {
        const hasOnBoarding = figma.root.getPluginData("hasOnBoarding") === "true";
        if (hasOnBoarding) {
            showUIAsync(__html__, { visible: true, width: 600, height: 500 }).then(() => {
                showOnBoarding();
            });
        }
        else {
            startProcess();
        }
    }
    return;
}
function showOnBoarding() {
    figma.ui.postMessage({
        type: "on-boarding"
    });
    figma.ui.onmessage = msg => {
        if (msg.type === "set-on-boarding-cookie") {
            figma.root.setPluginData("hasOnBoarding", "false");
            figma.closePlugin(MESSAGES.onBoardingEnd);
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
            const hasUsedAOI = figma.root.getPluginData("hasUsedAOI") === "true";
            if (!hasUsedAOI && hasAOI) {
                console.log("This cool guy has just used our AOI feature. Let's not spam him anymore!");
                figma.root.setPluginData("hasUsedAOI", "true");
            }
            const apiKey = figma.root.getPluginData("apiKey");
            const frame = selectedFrames[0];
            const base64 = yield convertFrameToBase64(frame);
            postImage(base64, apiKey, frame, hasAOI, rectangles);
        }
    });
}
function convertFrameToBase64(frame) {
    return __awaiter(this, void 0, void 0, function* () {
        const exportSettings = { format: "JPG", contentsOnly: true };
        const arraybuffer = yield frame.exportAsync(exportSettings);
        const imgBase64 = "data:image/jpg;base64," + arraybufferToBase64(arraybuffer);
        return imgBase64;
    });
}
function postImage(image, apiKey, frame, hasAOI, aoi) {
    showUIAsync(__html__, { visible: false }).then(() => {
        figma.ui.postMessage({
            type: "post-image",
            image,
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
                    frame.appendChild(result);
                    const hasUsedAOI = figma.root.getPluginData("hasUsedAOI") === "true";
                    if (hasUsedAOI) {
                        figma.closePlugin(MESSAGES.success);
                    }
                    else {
                        figma.closePlugin(MESSAGES.successWithAOIPrompt);
                    }
                    break;
                case "request-error":
                    const { error } = msg;
                    figma.closePlugin(error);
                default:
                    figma.closePlugin();
                    break;
            }
        });
    });
}
(() => __awaiter(this, void 0, void 0, function* () {
    switch (figma.command) {
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

/***/ "./src/plugin/utils/arraybufferToBase64.js":
/*!*************************************************!*\
  !*** ./src/plugin/utils/arraybufferToBase64.js ***!
  \*************************************************/
/*! exports provided: arraybufferToBase64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraybufferToBase64", function() { return arraybufferToBase64; });
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

function arraybufferToBase64(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = '';

    for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }

    return base64;
}


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
  onBoardingEnd: "🚢 Re-run the plugin to see the magic!"
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludGVyamVjdGlvbi1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW50ZXJqZWN0aW9uLWpzL2ludGVyamVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdXRpbHMvYXJyYXlidWZmZXJUb0Jhc2U2NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3V0aWxzL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG1CQUFPLENBQUMsd0VBQWlCOztBQUUvQztBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDek9EO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EOztBQUU1QztBQUNBO0FBQ0E7O0FBRVA7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxzRUFBc0UsY0FBYyxHQUFHLGVBQWU7QUFDdEcsd0NBQXdDLGNBQWMsR0FBRyxlQUFlO0FBQ3hFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0RBQW9CLEdBQUc7QUFDdEQ7QUFDQTtBQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4vY29udHJvbGxlci50c1wiKTtcbiIsIi8qIVxuICogaW50ZXJqZWN0aW9uLmpzIHYwLjAuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxOSBESU1JVFJJUyBSQVBUSVNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbmNvbnN0IGludGVyamVjdGlvbnMgPSByZXF1aXJlKFwiLi9pbnRlcmplY3Rpb25zXCIpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGludGVyamVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW50ZXJqZWN0aW9ucy5sZW5ndGgpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbiIsInZhciBpbnRlcmplY3Rpb25zID0gW1xuICBcIkFoYVwiLFxuICBcIkJvby15YWhcIixcbiAgXCJIby1ob1wiLFxuICBcIkh1cnJhaCBcIixcbiAgXCJPbMOpXCIsXG4gIFwiUmFoXCIsXG4gIFwiVGEtZGFcIixcbiAgXCJCYXppbmdhIVwiLFxuICBcIkFoZW1cIixcbiAgXCJPb2gtbGEtbGFcIixcbiAgXCJXaG9hXCIsXG4gIFwiWWFob29cIixcbiAgXCJZZWFoXCIsXG4gIFwiWW9vLWhvb1wiLFxuICBcIlppbmdcIixcbiAgXCJDb25ncmF0c1wiLFxuICBcIllvd3phXCIsXG4gIFwiQWxvaGFcIixcbiAgXCJBbGxlbHVpYVwiLFxuICBcIkhvbHkgQ293XCIsXG4gIFwiWWVhXCIsXG4gIFwiWWVhaFwiLFxuICBcIllvXCIsXG4gIFwiUGhvYXJcIixcbiAgXCJWYS12YS12b29tXCIsXG4gIFwiWWF5XCIsXG4gIFwiV2hlZVwiLFxuICBcIldob29wZWVcIixcbiAgXCJXb29cIixcbiAgXCJZby1oby1ob1wiLFxuICBcIllpcHBlZVwiLFxuICBcIlllZS1oYXdcIixcbiAgXCJZYXlcIlxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcmplY3Rpb25zO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jb25zdCB7IGFycmF5YnVmZmVyVG9CYXNlNjQgfSA9IHJlcXVpcmUoXCIuL3V0aWxzL2FycmF5YnVmZmVyVG9CYXNlNjQuanNcIik7XG5jb25zdCB7IE1FU1NBR0VTLCBBT0lfRVJST1JTLCBnZXRSYW5kb21UaXAgfSA9IHJlcXVpcmUoXCIuL3V0aWxzL2NvbnN0YW50cy5qc1wiKTtcbnZhciBpc1VJUmVhZHkgPSBmYWxzZTtcbmNvbnN0IFBJTkdfUE9OR19JTlRFUlZBTCA9IDIwMDtcbmZ1bmN0aW9uIHBpbmdVSSgpIHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwicGluZ1wiXG4gICAgfSk7XG59XG5mdW5jdGlvbiB3YWl0VUlUaHJlYWQoKSB7XG4gICAgaWYgKGlzVUlSZWFkeSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwaW5nVUkoKTtcbiAgICAgICAgc2V0VGltZW91dCh3YWl0VUlUaHJlYWQsIFBJTkdfUE9OR19JTlRFUlZBTCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmZ1bmN0aW9uIHNob3dVSUFzeW5jKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGZpZ21hLnNob3dVSSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIHdhaXRVSVRocmVhZCgpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09IFwicG9uZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShcInRydWVcIik7XG4gICAgICAgICAgICAgICAgaXNVSVJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFNlbGVjdGVkRnJhbWVOb2RlcygpIHtcbiAgICByZXR1cm4gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gXCJGUkFNRVwiKTtcbn1cbmZ1bmN0aW9uIHNldEFwaUtleShpc0Zyb21IZWF0bWFwKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2hvd1VJQXN5bmMoX19odG1sX18sIHsgdmlzaWJsZTogdHJ1ZSwgd2lkdGg6IDYwMCwgaGVpZ2h0OiA1MDAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gXCJzZXQtYXBpLWtleVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYXBpS2V5IH0gPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShcImFwaUtleVwiLCBhcGlLZXkpO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJoYXNPbkJvYXJkaW5nXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRnJvbUhlYXRtYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShNRVNTQUdFUy5hcGlLZXlTdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dPbkJvYXJkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihNRVNTQUdFUy5hcGlLZXlTdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJjYW5jZWwtYXBpLWtleVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLmFwaUtleUNhbmNlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0FwaUtleSA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YShcImFwaUtleVwiKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJzZXQtcHJldmlvdXMtYXBpLWtleVwiLCBwcmV2aW91c0FwaUtleSB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaW5kQU9JTGF5ZXJzKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25cbiAgICAgICAgLm1hcChub2RlID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0eXBlb2Ygbm9kZS5maW5kQWxsID09PSBcImZ1bmN0aW9uXCIgPyBub2RlLmZpbmRBbGwoKSA6IFtdO1xuICAgICAgICBjb25zdCBub2RlcyA9IFtub2RlLCAuLi5jaGlsZHJlbl0uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgfSlcbiAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYS5jb25jYXQoYiksIFtdKVxuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSBcIlJFQ1RBTkdMRVwiICYmIGl0ZW0ubmFtZS50cmltKCkgPT09IFwiQU9JXCIpXG4gICAgICAgIC5tYXAocmVjdCA9PiB7XG4gICAgICAgIGlmIChpc1JlY3RPdXRzaWRlRnJhbWUocmVjdCwgcmVjdC5wYXJlbnQpKSB7XG4gICAgICAgICAgICByZWN0Lm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgcmVjdC5uYW1lID0gXCLwn5qoIE91dHNpZGUgRnJhbWVcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1JlY3RTbWFsbChyZWN0KSkge1xuICAgICAgICAgICAgcmVjdC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHJlY3QubmFtZSA9IFwi8J+aqCBUb28gU21hbGwgKG1pbiA3MHgzMilcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlY3QuZmlsbHMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVjdDtcbiAgICB9KVxuICAgICAgICAubWFwKHJlY3QgPT4gKHtcbiAgICAgICAgcG9pbnRzOiBnZXRQb2ludHMocmVjdCksXG4gICAgICAgIGlkOiByZWN0LmlkXG4gICAgfSkpO1xuICAgIHJldHVybiByZWN0YW5nbGVzO1xufVxuZnVuY3Rpb24gZ2V0UG9pbnRzKHJlY3RhbmdsZSkge1xuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gcmVjdGFuZ2xlO1xuICAgIHJldHVybiBbXG4gICAgICAgIHsgeCwgeSwgaW5kZXg6IDAgfSxcbiAgICAgICAgeyB4OiB4ICsgd2lkdGgsIHksIGluZGV4OiAxIH0sXG4gICAgICAgIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0LCBpbmRleDogMiB9LFxuICAgICAgICB7IHgsIHk6IHkgKyBoZWlnaHQsIGluZGV4OiAzIH1cbiAgICBdO1xufVxuZnVuY3Rpb24gaXNSZWN0T3V0c2lkZUZyYW1lKHJlY3QsIGZyYW1lKSB7XG4gICAgcmV0dXJuIChyZWN0LnggPCAwIHx8XG4gICAgICAgIHJlY3QueCArIHJlY3Qud2lkdGggPiBmcmFtZS53aWR0aCB8fFxuICAgICAgICByZWN0LnkgPCAwIHx8XG4gICAgICAgIHJlY3QueSArIHJlY3QuaGVpZ2h0ID4gZnJhbWUuaGVpZ2h0KTtcbn1cbmZ1bmN0aW9uIGlzUmVjdFNtYWxsKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCA8IDcwIHx8IHJlY3QuaGVpZ2h0IDwgMzI7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUhlYXRtYXAoKSB7XG4gICAgY29uc3QgYXBpS2V5ID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKFwiYXBpS2V5XCIpO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShcImhhc09uQm9hcmRpbmdcIiwgXCJ0cnVlXCIpO1xuICAgICAgICBzZXRBcGlLZXkodHJ1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBoYXNPbkJvYXJkaW5nID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKFwiaGFzT25Cb2FyZGluZ1wiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgIGlmIChoYXNPbkJvYXJkaW5nKSB7XG4gICAgICAgICAgICBzaG93VUlBc3luYyhfX2h0bWxfXywgeyB2aXNpYmxlOiB0cnVlLCB3aWR0aDogNjAwLCBoZWlnaHQ6IDUwMCB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzaG93T25Cb2FyZGluZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFByb2Nlc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBzaG93T25Cb2FyZGluZygpIHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwib24tYm9hcmRpbmdcIlxuICAgIH0pO1xuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gXCJzZXQtb24tYm9hcmRpbmctY29va2llXCIpIHtcbiAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShcImhhc09uQm9hcmRpbmdcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLm9uQm9hcmRpbmdFbmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBzdGFydFByb2Nlc3MoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRGcmFtZXMgPSBnZXRTZWxlY3RlZEZyYW1lTm9kZXMoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkRnJhbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMubm9TZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGdldFJhbmRvbVRpcCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlY3RhbmdsZXMgPSBmaW5kQU9JTGF5ZXJzKCk7XG4gICAgICAgICAgICBjb25zdCBoYXNBT0kgPSByZWN0YW5nbGVzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNVc2VkQU9JID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKFwiaGFzVXNlZEFPSVwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICBpZiAoIWhhc1VzZWRBT0kgJiYgaGFzQU9JKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGNvb2wgZ3V5IGhhcyBqdXN0IHVzZWQgb3VyIEFPSSBmZWF0dXJlLiBMZXQncyBub3Qgc3BhbSBoaW0gYW55bW9yZSFcIik7XG4gICAgICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKFwiaGFzVXNlZEFPSVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhcGlLZXkgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoXCJhcGlLZXlcIik7XG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IHNlbGVjdGVkRnJhbWVzWzBdO1xuICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0geWllbGQgY29udmVydEZyYW1lVG9CYXNlNjQoZnJhbWUpO1xuICAgICAgICAgICAgcG9zdEltYWdlKGJhc2U2NCwgYXBpS2V5LCBmcmFtZSwgaGFzQU9JLCByZWN0YW5nbGVzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY29udmVydEZyYW1lVG9CYXNlNjQoZnJhbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBleHBvcnRTZXR0aW5ncyA9IHsgZm9ybWF0OiBcIkpQR1wiLCBjb250ZW50c09ubHk6IHRydWUgfTtcbiAgICAgICAgY29uc3QgYXJyYXlidWZmZXIgPSB5aWVsZCBmcmFtZS5leHBvcnRBc3luYyhleHBvcnRTZXR0aW5ncyk7XG4gICAgICAgIGNvbnN0IGltZ0Jhc2U2NCA9IFwiZGF0YTppbWFnZS9qcGc7YmFzZTY0LFwiICsgYXJyYXlidWZmZXJUb0Jhc2U2NChhcnJheWJ1ZmZlcik7XG4gICAgICAgIHJldHVybiBpbWdCYXNlNjQ7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwb3N0SW1hZ2UoaW1hZ2UsIGFwaUtleSwgZnJhbWUsIGhhc0FPSSwgYW9pKSB7XG4gICAgc2hvd1VJQXN5bmMoX19odG1sX18sIHsgdmlzaWJsZTogZmFsc2UgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdC1pbWFnZVwiLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBhcGlLZXksXG4gICAgICAgICAgICBoYXNBT0ksXG4gICAgICAgICAgICBhb2lcbiAgICAgICAgfSk7XG4gICAgICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gbXNnO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN2Zy1yZXN1bHRcIjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzdmcgfSA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZmlnbWEuY3JlYXRlTm9kZUZyb21Tdmcoc3ZnKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzVXNlZEFPSSA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YShcImhhc1VzZWRBT0lcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzVXNlZEFPSSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMuc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihNRVNTQUdFUy5zdWNjZXNzV2l0aEFPSVByb21wdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJlcXVlc3QtZXJyb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihlcnJvcik7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBzd2l0Y2ggKGZpZ21hLmNvbW1hbmQpIHtcbiAgICAgICAgY2FzZSBcImdlbmVyYXRlSGVhdG1hcFwiOlxuICAgICAgICAgICAgZ2VuZXJhdGVIZWF0bWFwKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNldEFwaUtleVwiOlxuICAgICAgICAgICAgc2V0QXBpS2V5KGZhbHNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oXCJVbmtub3duIGNvbW1hbmRcIik7XG4gICAgfVxufSkpKCk7XG4iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheWJ1ZmZlclRvQmFzZTY0KGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgICAgICBpLFxuICAgICAgICBsZW4gPSBieXRlcy5sZW5ndGgsXG4gICAgICAgIGJhc2U2NCA9ICcnO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSAzKSB7XG4gICAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpICsgMV0gJiAxNSkgPDwgMikgfCAoYnl0ZXNbaSArIDJdID4+IDYpXTtcbiAgICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAobGVuICUgMyA9PT0gMikge1xuICAgICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArICc9JztcbiAgICB9IGVsc2UgaWYgKGxlbiAlIDMgPT09IDEpIHtcbiAgICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyAnPT0nO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlNjQ7XG59XG4iLCJpbXBvcnQgZ2VuZXJhdGVJbnRlcmplY3Rpb24gZnJvbSBcImludGVyamVjdGlvbi1qc1wiO1xuXG5leHBvcnQgY29uc3QgTUlOX0FPSV9XSURUSCA9IDEwO1xuZXhwb3J0IGNvbnN0IE1JTl9BT0lfSEVJR0hUID0gMTA7XG5leHBvcnQgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly9hcGkudmlzdWFsZXllcy5kZXNpZ24vcHJlZGljdC9cIjtcblxuZnVuY3Rpb24gc2VsZWN0UmFuZG9tRnJvbUFycmF5KGFycikge1xuICByZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVRpcCgpIHtcbiAgcmV0dXJuIChcbiAgICBzZWxlY3RSYW5kb21Gcm9tQXJyYXkoVEhJTktfRU1PSklTKSArXG4gICAgXCIgVElQOiBcIiArXG4gICAgc2VsZWN0UmFuZG9tRnJvbUFycmF5KFVTRUZVTF9USVBTKVxuICApO1xufVxuXG5jb25zdCBTVUNDRVNTX0VNT0pJUyA9IFtcIvCfmYxcIiwgXCLwn5qAXCIsIFwi8J+OiVwiLCBcIvCfkYxcIiwgXCLwn6WwXCIsIFwi8J+ls1wiXTtcbmNvbnN0IFRISU5LX0VNT0pJUyA9IFtcIvCfp6BcIiwgXCLwn6SUXCIsIFwi8J+SoVwiXTtcblxuZnVuY3Rpb24gcmFuZG9tRW1vamkoKSB7XG4gIHJldHVybiBzZWxlY3RSYW5kb21Gcm9tQXJyYXkoU1VDQ0VTU19FTU9KSVMpO1xufVxuXG5leHBvcnQgY29uc3QgVVNFRlVMX1RJUFMgPSBbXG4gIFwiVGhlIEFPSSBSZWN0YW5nZSBzaG91bGQgYmUgcGxhY2VkIGF0IHRoZSB0b3AgRnJhbWUuLi5cIixcblxuICBcIkNyZWF0ZSBBcmVhcyBvZiBJbnRlcmVzdCBieSBkcmF3aW5nIGEgUmVjdGFuZ2xlIG5hbWVkIEFPSSBpbnNpZGUgeW91ciBGcmFtZS4uLlwiLFxuICBcIlRoZSBhdHRlbnRpb24gaXMgaGlnaGVyIG9uIHRoZSByZWQgYXJlYXMuLi5cIixcbiAgXCJDbGFyaXR5IHNjb3JpbmcgYmFzZWQgb24gY3VzdG9tIGRlbW9ncnBhaGljcyB3b3VsZCBiZSBhdmFpbGFibGUgc29vbi4uLlwiLFxuICBcIkEvQiB0ZXN0aW5nIHNtYWxsIFVJIHR3ZWFrcyBpcyBhIGNvbW1vbiB1c2UgY2FzZSBvZiBWaXN1YWxFeWVzLi4uXCJcbl07XG5cbmV4cG9ydCBjb25zdCBPTl9CT0FSRElORyA9IHtcbiAgdGl0bGU6IFwiV2VsY29tZSBvbiBib2FyZFwiLFxuICB0aXBzOiBbXG4gICAge1xuICAgICAgdGl0bGU6IFwi8J+UpSBIb3cgdG8gZ2VuZXJhdGUgeW91ciBBdHRlbnRpb24gSGVhdG1hcDpcIixcbiAgICAgIHN0ZXBzOiBbXCJTZWxlY3QgYSBGcmFtZSBcIiwgXCJSdW4gdGhlIHBsdWdpbiBjb21tYW5kXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCLwn5OmIEhvdyB0byBjcmVhdGUgQXJlYXMgb2YgSW50ZXJlc3Q6XCIsXG4gICAgICBzdGVwczogW1xuICAgICAgICBcIkNyZWF0ZSBhIFJlY3RhbmdsZSBuYW1lZCBBT0lcIixcbiAgICAgICAgXCJTZWxlY3QgdGhlIEZyYW1lXCIsXG4gICAgICAgIFwiUnVuIHRoZSBwbHVnaW4gY29tbWFuZFwiXG4gICAgICBdXG4gICAgfVxuICBdLFxuICBmb290ZXI6IHtcbiAgICB0ZXh0OiBcIvCflJcgTGVhcm4gbW9yZSBhYm91dCB0aGUgdXNhZ2Ugb2Ygb3VyIHBsdWdpbiBoZXJlOlwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cudmlzdWFsZXllcy5kZXNpZ24vbGVhcm5gLFwiXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBUElfRVJST1JTID0ge1xuICBTVEFUVVNfNDAwOiBcIvCfmLEgV2UgYXJlIGRlZXBseSBzb3JyeSwgYnV0IHNvbWV0aGluZyB3ZW50IHRlcnJpYmxlIHdyb25nIVwiLFxuICBTVEFUVVNfNDAxOiBcIvCfmYXigI0gWW91ciBBUEkga2V5IGlzIGludmFsaWRcIixcbiAgU1RBVFVTXzQwMjogXCLwn4yIIFlvdSBzaG91bGQgdXBncmFkZSB5b3VyIGFjY291bnQgdG8gYWNjZXNzIHRoaXMgZmVhdHVyZVwiLFxuICBTVEFUVVNfNDAzOiBcIvCfmqggWW91ciBoZWF0bWFwcyBsaW1pdCBoYXMgYmVlbiBleGNlZWRlZFwiLFxuICBTVEFUVVNfNTAzOlxuICAgIFwi8J+apyBPdXIgZWx2ZXMgYXJlIHdvcmtpbmcgaGFyZCB0byB1cGRhdGUgb3VyIHNlcnZpY2VzLiBWaXN1YWxFeWVzIHdpbGwgYmUgb25saW5lIHJlYWxseSBzb29uISFcIlxufTtcblxuZXhwb3J0IGNvbnN0IEFPSV9FUlJPUlMgPSB7XG4gIHNpemU6IHtcbiAgICBtZXNzYWdlOiBg8J+RjiBPbmUgb2YgeW91ciByZWN0YW5nbGVzIHdhcyBub3QgYmlnIGVub3VnaCAobWluaW11bSAke01JTl9BT0lfV0lEVEh9eCR7TUlOX0FPSV9IRUlHSFR9IHBpeGVscylgLFxuICAgIGxheWVyTmFtZTogYPCfmqggVG9vIHNtYWxsIChtaW5pbXVtICR7TUlOX0FPSV9XSURUSH14JHtNSU5fQU9JX0hFSUdIVH0pYFxuICB9LFxuICBwbGFjZW1lbnQ6IHtcbiAgICBtZXNzYWdlOiBg8J+YsSBPbmUgb2YgeW91ciByZWN0YW5nbGVzIGlzIG91dHNpZGUgdGhlIGN1cnJlbnQgRnJhbWUuYCxcbiAgICBsYXllck5hbWU6IGDwn5qoIE9mZiB0aGUgY3VycmVudCBGcmFtZWBcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IE1FU1NBR0VTID0ge1xuICBhcGlLZXlTdWNjZXNzOiByYW5kb21FbW9qaSgpICsgXCIgWW91ciBuZXcgQVBJIGtleSBoYXMgYmVlbiBzYXZlZC5cIixcbiAgYXBpS2V5Q2FuY2VsOiBcIvCfj4MgS2VlcCB1c2luZyB5b3VyIG9sZCBBUEkga2V5LlwiLFxuICBub1NlbGVjdGlvbjogXCLwn6W6IFlvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCBvbmUgZnJhbWUuXCIsXG4gIG5vQVBJS2V5OiBcIuKci1BsZWFzZSBlbnRlciB5b3VyIFZpc3VhbEV5ZXMgQVBJIGtleSBmaXJzdFwiLFxuICBzdWNjZXNzOiByYW5kb21FbW9qaSgpICsgYCAke2dlbmVyYXRlSW50ZXJqZWN0aW9uKCl9ISBZb3VyIGhlYXRtYXAgaXMgcmVhZHkhYCxcbiAgc3VjY2Vzc1dpdGhBT0lQcm9tcHQ6IGDwn6a44oCNIFlvdSBjYW4gaW1wcmVzcyBldmVuIG1vcmUgeW91ciBjbGllbnQgd2l0aCBBcmVhcyBvZiBJbnRlcmVzdC4uLmAsXG4gIG9uQm9hcmRpbmdFbmQ6IFwi8J+aoiBSZS1ydW4gdGhlIHBsdWdpbiB0byBzZWUgdGhlIG1hZ2ljIVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==