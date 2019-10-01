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
            const arraybuffer = yield convertFrameToArraybuffer(frame);
            postImage(arraybuffer, apiKey, frame, hasAOI, rectangles);
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
    showUIAsync(__html__, { visible: false }).then(() => {
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
                    })
                        .map(rect => { });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludGVyamVjdGlvbi1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW50ZXJqZWN0aW9uLWpzL2ludGVyamVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdXRpbHMvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsbUJBQU8sQ0FBQyx3RUFBaUI7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3UEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1EOztBQUU1QztBQUNBO0FBQ0E7O0FBRVA7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxzRUFBc0UsY0FBYyxHQUFHLGVBQWU7QUFDdEcsd0NBQXdDLGNBQWMsR0FBRyxlQUFlO0FBQ3hFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0RBQW9CLEdBQUc7QUFDdEQ7QUFDQTtBQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4vY29udHJvbGxlci50c1wiKTtcbiIsIi8qIVxuICogaW50ZXJqZWN0aW9uLmpzIHYwLjAuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxOSBESU1JVFJJUyBSQVBUSVNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbmNvbnN0IGludGVyamVjdGlvbnMgPSByZXF1aXJlKFwiLi9pbnRlcmplY3Rpb25zXCIpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGludGVyamVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW50ZXJqZWN0aW9ucy5sZW5ndGgpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbiIsInZhciBpbnRlcmplY3Rpb25zID0gW1xuICBcIkFoYVwiLFxuICBcIkJvby15YWhcIixcbiAgXCJIby1ob1wiLFxuICBcIkh1cnJhaCBcIixcbiAgXCJPbMOpXCIsXG4gIFwiUmFoXCIsXG4gIFwiVGEtZGFcIixcbiAgXCJCYXppbmdhIVwiLFxuICBcIkFoZW1cIixcbiAgXCJPb2gtbGEtbGFcIixcbiAgXCJXaG9hXCIsXG4gIFwiWWFob29cIixcbiAgXCJZZWFoXCIsXG4gIFwiWW9vLWhvb1wiLFxuICBcIlppbmdcIixcbiAgXCJDb25ncmF0c1wiLFxuICBcIllvd3phXCIsXG4gIFwiQWxvaGFcIixcbiAgXCJBbGxlbHVpYVwiLFxuICBcIkhvbHkgQ293XCIsXG4gIFwiWWVhXCIsXG4gIFwiWWVhaFwiLFxuICBcIllvXCIsXG4gIFwiUGhvYXJcIixcbiAgXCJWYS12YS12b29tXCIsXG4gIFwiWWF5XCIsXG4gIFwiV2hlZVwiLFxuICBcIldob29wZWVcIixcbiAgXCJXb29cIixcbiAgXCJZby1oby1ob1wiLFxuICBcIllpcHBlZVwiLFxuICBcIlllZS1oYXdcIixcbiAgXCJZYXlcIlxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcmplY3Rpb25zO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jb25zdCB7IE1FU1NBR0VTLCBBT0lfRVJST1JTLCBnZXRSYW5kb21UaXAsIE1JTl9BT0lfV0lEVEgsIE1JTl9BT0lfSEVJR0hUIH0gPSByZXF1aXJlKFwiLi91dGlscy9jb25zdGFudHMuanNcIik7XG52YXIgaXNVSVJlYWR5ID0gZmFsc2U7XG5jb25zdCBQSU5HX1BPTkdfSU5URVJWQUwgPSAyMDA7XG5mdW5jdGlvbiBwaW5nVUkoKSB7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInBpbmdcIlxuICAgIH0pO1xufVxuZnVuY3Rpb24gd2FpdFVJVGhyZWFkKCkge1xuICAgIGlmIChpc1VJUmVhZHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGluZ1VJKCk7XG4gICAgICAgIHNldFRpbWVvdXQod2FpdFVJVGhyZWFkLCBQSU5HX1BPTkdfSU5URVJWQUwpO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBzaG93VUlBc3luYyh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBmaWdtYS5zaG93VUkodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB3YWl0VUlUaHJlYWQoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSBcInBvbmdcIikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIGlzVUlSZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRTZWxlY3RlZEZyYW1lTm9kZXMoKSB7XG4gICAgcmV0dXJuIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09IFwiRlJBTUVcIik7XG59XG5mdW5jdGlvbiBzZXRBcGlLZXkoaXNGcm9tSGVhdG1hcCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNob3dVSUFzeW5jKF9faHRtbF9fLCB7IHZpc2libGU6IHRydWUsIHdpZHRoOiA2MDAsIGhlaWdodDogNTAwIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobXNnLnR5cGUgPT09IFwic2V0LWFwaS1rZXlcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGFwaUtleSB9ID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJhcGlLZXlcIiwgYXBpS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKFwiaGFzT25Cb2FyZGluZ1wiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Zyb21IZWF0bWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoTUVTU0FHRVMuYXBpS2V5U3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93T25Cb2FyZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMuYXBpS2V5U3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiY2FuY2VsLWFwaS1rZXlcIikge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihNRVNTQUdFUy5hcGlLZXlDYW5jZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNBcGlLZXkgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoXCJhcGlLZXlcIik7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwic2V0LXByZXZpb3VzLWFwaS1rZXlcIiwgcHJldmlvdXNBcGlLZXkgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmluZEFPSUxheWVycygpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uXG4gICAgICAgIC5tYXAobm9kZSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdHlwZW9mIG5vZGUuZmluZEFsbCA9PT0gXCJmdW5jdGlvblwiID8gbm9kZS5maW5kQWxsKCkgOiBbXTtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbbm9kZSwgLi4uY2hpbGRyZW5dLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH0pXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpLCBbXSlcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gXCJSRUNUQU5HTEVcIiAmJiBpdGVtLm5hbWUudHJpbSgpID09PSBcIkFPSVwiKVxuICAgICAgICAubWFwKHJlY3QgPT4ge1xuICAgICAgICBpZiAoaXNSZWN0T3V0c2lkZUZyYW1lKHJlY3QsIHJlY3QucGFyZW50KSkge1xuICAgICAgICAgICAgcmVjdC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHJlY3QubmFtZSA9IFwi8J+aqCBPdXRzaWRlIEZyYW1lXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNSZWN0U21hbGwocmVjdCkpIHtcbiAgICAgICAgICAgIHJlY3Qub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICByZWN0Lm5hbWUgPSBg8J+aqCBUb28gU21hbGwgKG1pbiAke01JTl9BT0lfV0lEVEh9eCR7TUlOX0FPSV9IRUlHSFR9KWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZWN0LmZpbGxzID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlY3Q7XG4gICAgfSlcbiAgICAgICAgLm1hcChyZWN0ID0+ICh7XG4gICAgICAgIHBvaW50czogZ2V0UG9pbnRzKHJlY3QpLFxuICAgICAgICBpZDogcmVjdC5pZFxuICAgIH0pKTtcbiAgICByZXR1cm4gcmVjdGFuZ2xlcztcbn1cbmZ1bmN0aW9uIGdldFBvaW50cyhyZWN0YW5nbGUpIHtcbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IHJlY3RhbmdsZTtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IHgsIHksIGluZGV4OiAwIH0sXG4gICAgICAgIHsgeDogeCArIHdpZHRoLCB5LCBpbmRleDogMSB9LFxuICAgICAgICB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCwgaW5kZXg6IDIgfSxcbiAgICAgICAgeyB4LCB5OiB5ICsgaGVpZ2h0LCBpbmRleDogMyB9XG4gICAgXTtcbn1cbmZ1bmN0aW9uIGlzUmVjdE91dHNpZGVGcmFtZShyZWN0LCBmcmFtZSkge1xuICAgIHJldHVybiAocmVjdC54IDwgMCB8fFxuICAgICAgICByZWN0LnggKyByZWN0LndpZHRoID4gZnJhbWUud2lkdGggfHxcbiAgICAgICAgcmVjdC55IDwgMCB8fFxuICAgICAgICByZWN0LnkgKyByZWN0LmhlaWdodCA+IGZyYW1lLmhlaWdodCk7XG59XG5mdW5jdGlvbiBpc1JlY3RTbWFsbChyZWN0KSB7XG4gICAgcmV0dXJuIHJlY3Qud2lkdGggPCBNSU5fQU9JX1dJRFRIIHx8IHJlY3QuaGVpZ2h0IDwgTUlOX0FPSV9IRUlHSFQ7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUhlYXRtYXAoKSB7XG4gICAgY29uc3QgYXBpS2V5ID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKFwiYXBpS2V5XCIpO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShcImhhc09uQm9hcmRpbmdcIiwgXCJ0cnVlXCIpO1xuICAgICAgICBzZXRBcGlLZXkodHJ1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBoYXNPbkJvYXJkaW5nID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKFwiaGFzT25Cb2FyZGluZ1wiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgIGlmIChoYXNPbkJvYXJkaW5nKSB7XG4gICAgICAgICAgICBzaG93VUlBc3luYyhfX2h0bWxfXywgeyB2aXNpYmxlOiB0cnVlLCB3aWR0aDogNjAwLCBoZWlnaHQ6IDUwMCB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzaG93T25Cb2FyZGluZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFByb2Nlc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiBzaG93T25Cb2FyZGluZygpIHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwib24tYm9hcmRpbmdcIlxuICAgIH0pO1xuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgICAgIGlmIChtc2cudHlwZSA9PT0gXCJzZXQtb24tYm9hcmRpbmctY29va2llXCIpIHtcbiAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShcImhhc09uQm9hcmRpbmdcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLm9uQm9hcmRpbmdFbmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBzdGFydFByb2Nlc3MoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRGcmFtZXMgPSBnZXRTZWxlY3RlZEZyYW1lTm9kZXMoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkRnJhbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMubm9TZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGdldFJhbmRvbVRpcCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlY3RhbmdsZXMgPSBmaW5kQU9JTGF5ZXJzKCk7XG4gICAgICAgICAgICBjb25zdCBoYXNBT0kgPSByZWN0YW5nbGVzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBjb25zdCBoYXNVc2VkQU9JID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKFwiaGFzVXNlZEFPSVwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICBpZiAoIWhhc1VzZWRBT0kgJiYgaGFzQU9JKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGNvb2wgZ3V5IGhhcyBqdXN0IHVzZWQgb3VyIEFPSSBmZWF0dXJlLiBMZXQncyBub3Qgc3BhbSBoaW0gYW55bW9yZSFcIik7XG4gICAgICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKFwiaGFzVXNlZEFPSVwiLCBcInRydWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhcGlLZXkgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoXCJhcGlLZXlcIik7XG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IHNlbGVjdGVkRnJhbWVzWzBdO1xuICAgICAgICAgICAgY29uc3QgYXJyYXlidWZmZXIgPSB5aWVsZCBjb252ZXJ0RnJhbWVUb0FycmF5YnVmZmVyKGZyYW1lKTtcbiAgICAgICAgICAgIHBvc3RJbWFnZShhcnJheWJ1ZmZlciwgYXBpS2V5LCBmcmFtZSwgaGFzQU9JLCByZWN0YW5nbGVzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY29udmVydEZyYW1lVG9BcnJheWJ1ZmZlcihmcmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGV4cG9ydFNldHRpbmdzID0geyBmb3JtYXQ6IFwiSlBHXCIsIGNvbnRlbnRzT25seTogdHJ1ZSB9O1xuICAgICAgICBjb25zdCBhcnJheWJ1ZmZlciA9IHlpZWxkIGZyYW1lLmV4cG9ydEFzeW5jKGV4cG9ydFNldHRpbmdzKTtcbiAgICAgICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcG9zdEltYWdlKGFycmF5YnVmZmVyLCBhcGlLZXksIGZyYW1lLCBoYXNBT0ksIGFvaSkge1xuICAgIHNob3dVSUFzeW5jKF9faHRtbF9fLCB7IHZpc2libGU6IGZhbHNlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcInBvc3QtaW1hZ2VcIixcbiAgICAgICAgICAgIGFycmF5YnVmZmVyLFxuICAgICAgICAgICAgYXBpS2V5LFxuICAgICAgICAgICAgaGFzQU9JLFxuICAgICAgICAgICAgYW9pXG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgfSA9IG1zZztcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdmctcmVzdWx0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3ZnIH0gPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpZ21hLmNyZWF0ZU5vZGVGcm9tU3ZnKHN2Zyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gXCJWaXN1YWxFeWVzXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdHlwZW9mIG5vZGUuZmluZEFsbCA9PT0gXCJmdW5jdGlvblwiID8gbm9kZS5maW5kQWxsKCkgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gW25vZGUsIC4uLmNoaWxkcmVuXS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChiKSwgW10pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwiR1JPVVBcIiAmJiBpdGVtLm5hbWUudHJpbSgpID09PSBcIkdyb3VwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBcIkFPSVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJSRUNUQU5HTEVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZS50cmltKCkgPT09IFwiUmVjdGFuZ2xlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBcIkhlYXRtYXBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAocmVjdCA9PiB7IH0pO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNVc2VkQU9JID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKFwiaGFzVXNlZEFPSVwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNVc2VkQU9JKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihNRVNTQUdFUy5zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLnN1Y2Nlc3NXaXRoQU9JUHJvbXB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVxdWVzdC1lcnJvclwiOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKGVycm9yKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4oKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHN3aXRjaCAoZmlnbWEuY29tbWFuZCkge1xuICAgICAgICBjYXNlIFwiZ2VuZXJhdGVIZWF0bWFwXCI6XG4gICAgICAgICAgICBnZW5lcmF0ZUhlYXRtYXAoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2V0QXBpS2V5XCI6XG4gICAgICAgICAgICBzZXRBcGlLZXkoZmFsc2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihcIlVua25vd24gY29tbWFuZFwiKTtcbiAgICB9XG59KSkoKTtcbiIsImltcG9ydCBnZW5lcmF0ZUludGVyamVjdGlvbiBmcm9tIFwiaW50ZXJqZWN0aW9uLWpzXCI7XG5cbmV4cG9ydCBjb25zdCBNSU5fQU9JX1dJRFRIID0gMTA7XG5leHBvcnQgY29uc3QgTUlOX0FPSV9IRUlHSFQgPSAxMDtcbmV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwczovL2FwaS52aXN1YWxleWVzLmRlc2lnbi9wcmVkaWN0L1wiO1xuXG5mdW5jdGlvbiBzZWxlY3RSYW5kb21Gcm9tQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tVGlwKCkge1xuICByZXR1cm4gKFxuICAgIHNlbGVjdFJhbmRvbUZyb21BcnJheShUSElOS19FTU9KSVMpICtcbiAgICBcIiBUSVA6IFwiICtcbiAgICBzZWxlY3RSYW5kb21Gcm9tQXJyYXkoVVNFRlVMX1RJUFMpXG4gICk7XG59XG5cbmNvbnN0IFNVQ0NFU1NfRU1PSklTID0gW1wi8J+ZjFwiLCBcIvCfmoBcIiwgXCLwn46JXCIsIFwi8J+RjFwiLCBcIvCfpbBcIiwgXCLwn6WzXCJdO1xuY29uc3QgVEhJTktfRU1PSklTID0gW1wi8J+noFwiLCBcIvCfpJRcIiwgXCLwn5KhXCJdO1xuXG5mdW5jdGlvbiByYW5kb21FbW9qaSgpIHtcbiAgcmV0dXJuIHNlbGVjdFJhbmRvbUZyb21BcnJheShTVUNDRVNTX0VNT0pJUyk7XG59XG5cbmV4cG9ydCBjb25zdCBVU0VGVUxfVElQUyA9IFtcbiAgXCJUaGUgQU9JIFJlY3RhbmdlIHNob3VsZCBiZSBwbGFjZWQgYXQgdGhlIHRvcCBGcmFtZS4uLlwiLFxuXG4gIFwiQ3JlYXRlIEFyZWFzIG9mIEludGVyZXN0IGJ5IGRyYXdpbmcgYSBSZWN0YW5nbGUgbmFtZWQgQU9JIGluc2lkZSB5b3VyIEZyYW1lLi4uXCIsXG4gIFwiVGhlIGF0dGVudGlvbiBpcyBoaWdoZXIgb24gdGhlIHJlZCBhcmVhcy4uLlwiLFxuICBcIkNsYXJpdHkgc2NvcmluZyBiYXNlZCBvbiBjdXN0b20gZGVtb2dycGFoaWNzIHdvdWxkIGJlIGF2YWlsYWJsZSBzb29uLi4uXCIsXG4gIFwiQS9CIHRlc3Rpbmcgc21hbGwgVUkgdHdlYWtzIGlzIGEgY29tbW9uIHVzZSBjYXNlIG9mIFZpc3VhbEV5ZXMuLi5cIlxuXTtcblxuZXhwb3J0IGNvbnN0IE9OX0JPQVJESU5HID0ge1xuICB0aXRsZTogXCJXZWxjb21lIG9uIGJvYXJkXCIsXG4gIHRpcHM6IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCLwn5SlIEhvdyB0byBnZW5lcmF0ZSB5b3VyIEF0dGVudGlvbiBIZWF0bWFwOlwiLFxuICAgICAgc3RlcHM6IFtcIlNlbGVjdCBhIEZyYW1lIFwiLCBcIlJ1biB0aGUgcGx1Z2luIGNvbW1hbmRcIl1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIvCfk6YgSG93IHRvIGNyZWF0ZSBBcmVhcyBvZiBJbnRlcmVzdDpcIixcbiAgICAgIHN0ZXBzOiBbXG4gICAgICAgIFwiQ3JlYXRlIGEgUmVjdGFuZ2xlIG5hbWVkIEFPSVwiLFxuICAgICAgICBcIlNlbGVjdCB0aGUgRnJhbWVcIixcbiAgICAgICAgXCJSdW4gdGhlIHBsdWdpbiBjb21tYW5kXCJcbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIGZvb3Rlcjoge1xuICAgIHRleHQ6IFwi8J+UlyBMZWFybiBtb3JlIGFib3V0IHRoZSB1c2FnZSBvZiBvdXIgcGx1Z2luIGhlcmU6XCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy52aXN1YWxleWVzLmRlc2lnbi9sZWFybmAsXCJcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEFQSV9FUlJPUlMgPSB7XG4gIFNUQVRVU180MDA6IFwi8J+YsSBXZSBhcmUgZGVlcGx5IHNvcnJ5LCBidXQgc29tZXRoaW5nIHdlbnQgdGVycmlibGUgd3JvbmchXCIsXG4gIFNUQVRVU180MDE6IFwi8J+ZheKAjSBZb3VyIEFQSSBrZXkgaXMgaW52YWxpZFwiLFxuICBTVEFUVVNfNDAyOiBcIvCfjIggWW91IHNob3VsZCB1cGdyYWRlIHlvdXIgYWNjb3VudCB0byBhY2Nlc3MgdGhpcyBmZWF0dXJlXCIsXG4gIFNUQVRVU180MDM6IFwi8J+aqCBZb3VyIGhlYXRtYXBzIGxpbWl0IGhhcyBiZWVuIGV4Y2VlZGVkXCIsXG4gIFNUQVRVU181MDM6XG4gICAgXCLwn5qnIE91ciBlbHZlcyBhcmUgd29ya2luZyBoYXJkIHRvIHVwZGF0ZSBvdXIgc2VydmljZXMuIFZpc3VhbEV5ZXMgd2lsbCBiZSBvbmxpbmUgcmVhbGx5IHNvb24hIVwiXG59O1xuXG5leHBvcnQgY29uc3QgQU9JX0VSUk9SUyA9IHtcbiAgc2l6ZToge1xuICAgIG1lc3NhZ2U6IGDwn5GOIE9uZSBvZiB5b3VyIHJlY3RhbmdsZXMgd2FzIG5vdCBiaWcgZW5vdWdoIChtaW5pbXVtICR7TUlOX0FPSV9XSURUSH14JHtNSU5fQU9JX0hFSUdIVH0gcGl4ZWxzKWAsXG4gICAgbGF5ZXJOYW1lOiBg8J+aqCBUb28gc21hbGwgKG1pbmltdW0gJHtNSU5fQU9JX1dJRFRIfXgke01JTl9BT0lfSEVJR0hUfSlgXG4gIH0sXG4gIHBsYWNlbWVudDoge1xuICAgIG1lc3NhZ2U6IGDwn5ixIE9uZSBvZiB5b3VyIHJlY3RhbmdsZXMgaXMgb3V0c2lkZSB0aGUgY3VycmVudCBGcmFtZS5gLFxuICAgIGxheWVyTmFtZTogYPCfmqggT2ZmIHRoZSBjdXJyZW50IEZyYW1lYFxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgTUVTU0FHRVMgPSB7XG4gIGFwaUtleVN1Y2Nlc3M6IHJhbmRvbUVtb2ppKCkgKyBcIiBZb3VyIG5ldyBBUEkga2V5IGhhcyBiZWVuIHNhdmVkLlwiLFxuICBhcGlLZXlDYW5jZWw6IFwi8J+PgyBLZWVwIHVzaW5nIHlvdXIgb2xkIEFQSSBrZXkuXCIsXG4gIG5vU2VsZWN0aW9uOiBcIvCfpbogWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IG9uZSBmcmFtZS5cIixcbiAgbm9BUElLZXk6IFwi4pyLUGxlYXNlIGVudGVyIHlvdXIgVmlzdWFsRXllcyBBUEkga2V5IGZpcnN0XCIsXG4gIHN1Y2Nlc3M6IHJhbmRvbUVtb2ppKCkgKyBgICR7Z2VuZXJhdGVJbnRlcmplY3Rpb24oKX0hIFlvdXIgaGVhdG1hcCBpcyByZWFkeSFgLFxuICBzdWNjZXNzV2l0aEFPSVByb21wdDogYPCfprjigI0gWW91IGNhbiBpbXByZXNzIGV2ZW4gbW9yZSB5b3VyIGNsaWVudCB3aXRoIEFyZWFzIG9mIEludGVyZXN0Li4uYCxcbiAgb25Cb2FyZGluZ0VuZDogXCLwn5qiIFJlLXJ1biB0aGUgcGx1Z2luIHRvIHNlZSB0aGUgbWFnaWMhXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9