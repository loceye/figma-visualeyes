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
const { MESSAGES, AOI_ERRORS } = __webpack_require__(/*! ./utils/constants.js */ "./src/plugin/utils/constants.js");
var isUIReady = false;
const PING_PONG_INTERVAL = 200;
function pingUI() {
    figma.ui.postMessage({
        type: 'ping',
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
            if (msg.type === 'pong') {
                resolve('true');
                isUIReady = true;
            }
        };
    });
}
function getSelectedFrameNodes() {
    return figma.currentPage.selection.filter(item => item.type === 'FRAME');
}
function setApiKey(isFromHeatmap) {
    return __awaiter(this, void 0, void 0, function* () {
        showUIAsync(__html__, { visible: true, width: 500, height: 400 }).then(() => {
            figma.ui.onmessage = msg => {
                if (msg.type === 'set-api-key') {
                    const { apiKey } = msg;
                    figma.root.setPluginData('apiKey', apiKey);
                    figma.root.setPluginData('hasOnBoarding', 'true');
                    if (isFromHeatmap) {
                        figma.closePlugin(MESSAGES.apiKeySuccessFromHeatmap);
                    }
                    else {
                        figma.closePlugin(MESSAGES.apiKeySuccess);
                    }
                }
                else if (msg.type === 'cancel-api-key') {
                    figma.closePlugin(MESSAGES.apiKeyCancel);
                }
                else {
                    figma.closePlugin();
                }
            };
            const previousApiKey = figma.root.getPluginData('apiKey');
            figma.ui.postMessage({ type: 'set-previous-api-key', previousApiKey });
        });
    });
}
function findAOILayers() {
    const rectangles = figma.currentPage.selection
        .map(node => {
        const children = typeof node.findAll === 'function' ? node.findAll() : [];
        const nodes = [node, ...children].filter(Boolean);
        return nodes;
    })
        .reduce((a, b) => a.concat(b), [])
        .filter(item => item.type === 'RECTANGLE' && item.name.trim() === 'AOI')
        .map(rect => {
        if (isRectOutsideFrame(rect, rect.parent)) {
            rect.opacity = 0;
            rect.name = '🚨 Outside Frame';
        }
        else if (isRectSmall(rect)) {
            rect.opacity = 0;
            rect.name = '🚨 Too Small (min 70x32)';
        }
        else {
            rect.fills = [
                {
                    blendMode: 'NORMAL',
                    color: { r: 0, g: 0, b: 0 },
                    opacity: 0,
                    type: 'SOLID',
                    visible: true,
                },
            ];
        }
        return rect;
    })
        .map(rect => ({
        points: getPoints(rect),
        id: rect.id,
    }));
    return rectangles;
}
function getPoints(rectangle) {
    const { x, y, width, height } = rectangle;
    return [
        { x, y, index: 0 },
        { x: x + width, y, index: 1 },
        { x: x + width, y: y + height, index: 2 },
        { x, y: y + height, index: 3 },
    ];
}
function isRectOutsideFrame(rect, frame) {
    return rect.x < 0 || rect.x + rect.width > frame.width || rect.y < 0 || rect.y + rect.height > frame.height;
}
function isRectSmall(rect) {
    return rect.width < 70 || rect.height < 32;
}
function generateHeatmap() {
    const apiKey = figma.root.getPluginData('apiKey');
    if (!apiKey) {
        figma.root.setPluginData('hasOnBoarding', 'true');
        setApiKey(true);
    }
    else {
        checkOnBoarding();
    }
    return;
}
function checkOnBoarding() {
    const hasOnBoarding = figma.root.getPluginData('hasOnBoarding') === 'true';
    if (hasOnBoarding) {
        showUIAsync(__html__, { visible: true, width: 600, height: 500 }).then(() => {
            figma.ui.postMessage({
                type: 'on-boarding',
            });
            figma.ui.onmessage = msg => {
                if (msg.type === 'set-on-boarding-cookie') {
                    figma.root.setPluginData('hasOnBoarding', 'false');
                    figma.closePlugin(MESSAGES.onBoardingEnd);
                }
                else {
                    figma.closePlugin();
                }
            };
            return;
        });
    }
    else {
        startProcess();
    }
}
function startProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const selectedFrames = getSelectedFrameNodes();
        if (selectedFrames.length === 0) {
            figma.closePlugin(MESSAGES.noSelection);
        }
        else {
            const rectangles = findAOILayers();
            const hasAOI = rectangles.length > 0;
            const hasUsedAOI = figma.root.getPluginData('hasUsedAOI') === 'true';
            if (!hasUsedAOI && hasAOI) {
                console.log("This cool guy has just used our AOI feature. Let's not spam him anymore!");
                figma.root.setPluginData('hasUsedAOI', 'true');
            }
            const apiKey = figma.root.getPluginData('apiKey');
            const frame = selectedFrames[0];
            const base64 = yield convertFrameToBase64(frame);
            postImage(base64, apiKey, frame, hasAOI, rectangles);
        }
    });
}
function convertFrameToBase64(frame) {
    return __awaiter(this, void 0, void 0, function* () {
        const exportSettings = { format: 'JPG', contentsOnly: true };
        const arraybuffer = yield frame.exportAsync(exportSettings);
        const imgBase64 = 'data:image/jpg;base64,' + arraybufferToBase64(arraybuffer);
        return imgBase64;
    });
}
function postImage(image, apiKey, frame, hasAOI, aoi) {
    showUIAsync(__html__, { visible: false }).then(() => {
        figma.ui.postMessage({
            type: 'post-image',
            image,
            apiKey,
            hasAOI,
            aoi,
        });
        figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
            const { type } = msg;
            switch (type) {
                case 'svg-result':
                    const { svg } = msg;
                    const result = figma.createNodeFromSvg(svg);
                    frame.appendChild(result);
                    const hasUsedAOI = figma.root.getPluginData('hasUsedAOI') === 'true';
                    if (hasUsedAOI) {
                        figma.closePlugin(MESSAGES.success);
                    }
                    else {
                        figma.closePlugin(MESSAGES.successWithAOIPrompt);
                    }
                    break;
                case 'request-error':
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
        case 'generateHeatmap':
            generateHeatmap();
            break;
        case 'setApiKey':
            setApiKey(false);
            break;
        default:
            figma.closePlugin('Unknown command');
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


const MIN_AOI_WIDTH = 70;
const MIN_AOI_HEIGHT = 32;
const API_URL = 'https://api.visualeyes.design/predict/';

function getRandomTip() {
    return '🧠 TIP: ' + USEFUL_TIPS[Math.floor(Math.random() * USEFUL_TIPS.length)];
}

const USEFUL_TIPS = [
    'Create Areas of Interest by drawing a Rectangle named AOI inside your Artboard...',
    'The attention is higher on the red areas...',
    'Clarity scoring based on custom demogrpahics would be available soon...',
    'A/B testing small UI tweaks is a common use case of VisualEyes...',
];

const ON_BOARDING = {
    title: 'Welcome on board',
    tips: [
        {
            title: '🔥 How to generate your Attention Heatmap:',
            steps: ['Select an Artboard ', 'Run the plugin command'],
        },
        {
            title: '📦 How to create Areas of Interest:',
            steps: ['Create a Rectangle named AOI', 'Select the Artboard', 'Run the plugin command'],
        },
    ],
    footer: {
        text: '🔗 Learn more about the usage of our plugin here:',
        link: 'https://www.visualeyes.design/learn`,',
    },
};

const API_ERRORS = {
    STATUS_400: '😱 We are deeply sorry, but something went terrible wrong!',
    STATUS_401: '🙅‍ Your API key is invalid',
    STATUS_402: '🌈 You should upgrade your account to access this feature',
    STATUS_403: '🚨 Your heatmaps limit has been exceeded',
    STATUS_503: '🚧 Our elves are working hard to update our services. VisualEyes will be online really soon!!',
};

const AOI_ERRORS = {
    size: {
        message: `👎 One of your rectangles was not big enough (minimum ${MIN_AOI_WIDTH}x${MIN_AOI_HEIGHT} pixels)`,
        layerName: `🚨 Too small (minimum ${MIN_AOI_WIDTH}x${MIN_AOI_HEIGHT})`,
    },
    placement: {
        message: `😱 One of your rectangles is outside the current Artboard.`,
        layerName: `🚨 Off the current Artboard`,
    },
};

const MESSAGES = {
    apiKeySuccess: '👏 Your new API key has been saved.',
    apiKeySuccessFromHeatmap: '🚀 Your API key has been saved. Re-run the plugin to see the magic.',
    apiKeyCancel: '🏃 Keep using your old API key.',
    noSelection: '🥺 You must select at least one frame.',
    noAPIKey: '✋Please enter your VisualEyes API key first',
    success: `🎉 ${interjection_js__WEBPACK_IMPORTED_MODULE_0___default()()}! Your heatmap is ready!`,
    successWithAOIPrompt: `🦸‍ You can impress even more your client with Areas of Interest...`,
    onBoardingEnd: '🚢 Re-run the plugin to see the magic!',
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludGVyamVjdGlvbi1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW50ZXJqZWN0aW9uLWpzL2ludGVyamVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wbHVnaW4vdXRpbHMvYXJyYXlidWZmZXJUb0Jhc2U2NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luL3V0aWxzL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLG1CQUFPLENBQUMsd0VBQWlCOztBQUUvQztBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyT0Q7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLDBFQUEwRSxjQUFjLEdBQUcsZUFBZTtBQUMxRyw0Q0FBNEMsY0FBYyxHQUFHLGVBQWU7QUFDNUUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQW9CLEdBQUc7QUFDMUM7QUFDQTtBQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wbHVnaW4vY29udHJvbGxlci50c1wiKTtcbiIsIi8qIVxuICogaW50ZXJqZWN0aW9uLmpzIHYwLjAuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxOSBESU1JVFJJUyBSQVBUSVNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbmNvbnN0IGludGVyamVjdGlvbnMgPSByZXF1aXJlKFwiLi9pbnRlcmplY3Rpb25zXCIpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgcmV0dXJuIGludGVyamVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW50ZXJqZWN0aW9ucy5sZW5ndGgpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTtcbiIsInZhciBpbnRlcmplY3Rpb25zID0gW1xuICBcIkFoYVwiLFxuICBcIkJvby15YWhcIixcbiAgXCJIby1ob1wiLFxuICBcIkh1cnJhaCBcIixcbiAgXCJPbMOpXCIsXG4gIFwiUmFoXCIsXG4gIFwiVGEtZGFcIixcbiAgXCJCYXppbmdhIVwiLFxuICBcIkFoZW1cIixcbiAgXCJPb2gtbGEtbGFcIixcbiAgXCJXaG9hXCIsXG4gIFwiWWFob29cIixcbiAgXCJZZWFoXCIsXG4gIFwiWW9vLWhvb1wiLFxuICBcIlppbmdcIixcbiAgXCJDb25ncmF0c1wiLFxuICBcIllvd3phXCIsXG4gIFwiQWxvaGFcIixcbiAgXCJBbGxlbHVpYVwiLFxuICBcIkhvbHkgQ293XCIsXG4gIFwiWWVhXCIsXG4gIFwiWWVhaFwiLFxuICBcIllvXCIsXG4gIFwiUGhvYXJcIixcbiAgXCJWYS12YS12b29tXCIsXG4gIFwiWWF5XCIsXG4gIFwiV2hlZVwiLFxuICBcIldob29wZWVcIixcbiAgXCJXb29cIixcbiAgXCJZby1oby1ob1wiLFxuICBcIllpcHBlZVwiLFxuICBcIlllZS1oYXdcIixcbiAgXCJZYXlcIlxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcmplY3Rpb25zO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jb25zdCB7IGFycmF5YnVmZmVyVG9CYXNlNjQgfSA9IHJlcXVpcmUoJy4vdXRpbHMvYXJyYXlidWZmZXJUb0Jhc2U2NC5qcycpO1xuY29uc3QgeyBNRVNTQUdFUywgQU9JX0VSUk9SUyB9ID0gcmVxdWlyZSgnLi91dGlscy9jb25zdGFudHMuanMnKTtcbnZhciBpc1VJUmVhZHkgPSBmYWxzZTtcbmNvbnN0IFBJTkdfUE9OR19JTlRFUlZBTCA9IDIwMDtcbmZ1bmN0aW9uIHBpbmdVSSgpIHtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdwaW5nJyxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHdhaXRVSVRocmVhZCgpIHtcbiAgICBpZiAoaXNVSVJlYWR5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBpbmdVSSgpO1xuICAgICAgICBzZXRUaW1lb3V0KHdhaXRVSVRocmVhZCwgUElOR19QT05HX0lOVEVSVkFMKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gc2hvd1VJQXN5bmModGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgZmlnbWEuc2hvd1VJKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgd2FpdFVJVGhyZWFkKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3BvbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgndHJ1ZScpO1xuICAgICAgICAgICAgICAgIGlzVUlSZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRTZWxlY3RlZEZyYW1lTm9kZXMoKSB7XG4gICAgcmV0dXJuIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09ICdGUkFNRScpO1xufVxuZnVuY3Rpb24gc2V0QXBpS2V5KGlzRnJvbUhlYXRtYXApIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzaG93VUlBc3luYyhfX2h0bWxfXywgeyB2aXNpYmxlOiB0cnVlLCB3aWR0aDogNTAwLCBoZWlnaHQ6IDQwMCB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnc2V0LWFwaS1rZXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYXBpS2V5IH0gPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YSgnYXBpS2V5JywgYXBpS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKCdoYXNPbkJvYXJkaW5nJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRnJvbUhlYXRtYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLmFwaUtleVN1Y2Nlc3NGcm9tSGVhdG1hcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihNRVNTQUdFUy5hcGlLZXlTdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2NhbmNlbC1hcGkta2V5Jykge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihNRVNTQUdFUy5hcGlLZXlDYW5jZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNBcGlLZXkgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoJ2FwaUtleScpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiAnc2V0LXByZXZpb3VzLWFwaS1rZXknLCBwcmV2aW91c0FwaUtleSB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaW5kQU9JTGF5ZXJzKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25cbiAgICAgICAgLm1hcChub2RlID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0eXBlb2Ygbm9kZS5maW5kQWxsID09PSAnZnVuY3Rpb24nID8gbm9kZS5maW5kQWxsKCkgOiBbXTtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBbbm9kZSwgLi4uY2hpbGRyZW5dLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH0pXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpLCBbXSlcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ1JFQ1RBTkdMRScgJiYgaXRlbS5uYW1lLnRyaW0oKSA9PT0gJ0FPSScpXG4gICAgICAgIC5tYXAocmVjdCA9PiB7XG4gICAgICAgIGlmIChpc1JlY3RPdXRzaWRlRnJhbWUocmVjdCwgcmVjdC5wYXJlbnQpKSB7XG4gICAgICAgICAgICByZWN0Lm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgcmVjdC5uYW1lID0gJ/CfmqggT3V0c2lkZSBGcmFtZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNSZWN0U21hbGwocmVjdCkpIHtcbiAgICAgICAgICAgIHJlY3Qub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICByZWN0Lm5hbWUgPSAn8J+aqCBUb28gU21hbGwgKG1pbiA3MHgzMiknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVjdC5maWxscyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJsZW5kTW9kZTogJ05PUk1BTCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NPTElEJyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVjdDtcbiAgICB9KVxuICAgICAgICAubWFwKHJlY3QgPT4gKHtcbiAgICAgICAgcG9pbnRzOiBnZXRQb2ludHMocmVjdCksXG4gICAgICAgIGlkOiByZWN0LmlkLFxuICAgIH0pKTtcbiAgICByZXR1cm4gcmVjdGFuZ2xlcztcbn1cbmZ1bmN0aW9uIGdldFBvaW50cyhyZWN0YW5nbGUpIHtcbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IHJlY3RhbmdsZTtcbiAgICByZXR1cm4gW1xuICAgICAgICB7IHgsIHksIGluZGV4OiAwIH0sXG4gICAgICAgIHsgeDogeCArIHdpZHRoLCB5LCBpbmRleDogMSB9LFxuICAgICAgICB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCwgaW5kZXg6IDIgfSxcbiAgICAgICAgeyB4LCB5OiB5ICsgaGVpZ2h0LCBpbmRleDogMyB9LFxuICAgIF07XG59XG5mdW5jdGlvbiBpc1JlY3RPdXRzaWRlRnJhbWUocmVjdCwgZnJhbWUpIHtcbiAgICByZXR1cm4gcmVjdC54IDwgMCB8fCByZWN0LnggKyByZWN0LndpZHRoID4gZnJhbWUud2lkdGggfHwgcmVjdC55IDwgMCB8fCByZWN0LnkgKyByZWN0LmhlaWdodCA+IGZyYW1lLmhlaWdodDtcbn1cbmZ1bmN0aW9uIGlzUmVjdFNtYWxsKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC53aWR0aCA8IDcwIHx8IHJlY3QuaGVpZ2h0IDwgMzI7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUhlYXRtYXAoKSB7XG4gICAgY29uc3QgYXBpS2V5ID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKCdhcGlLZXknKTtcbiAgICBpZiAoIWFwaUtleSkge1xuICAgICAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoJ2hhc09uQm9hcmRpbmcnLCAndHJ1ZScpO1xuICAgICAgICBzZXRBcGlLZXkodHJ1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjaGVja09uQm9hcmRpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZnVuY3Rpb24gY2hlY2tPbkJvYXJkaW5nKCkge1xuICAgIGNvbnN0IGhhc09uQm9hcmRpbmcgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoJ2hhc09uQm9hcmRpbmcnKSA9PT0gJ3RydWUnO1xuICAgIGlmIChoYXNPbkJvYXJkaW5nKSB7XG4gICAgICAgIHNob3dVSUFzeW5jKF9faHRtbF9fLCB7IHZpc2libGU6IHRydWUsIHdpZHRoOiA2MDAsIGhlaWdodDogNTAwIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdvbi1ib2FyZGluZycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSAnc2V0LW9uLWJvYXJkaW5nLWNvb2tpZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKCdoYXNPbkJvYXJkaW5nJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLm9uQm9hcmRpbmdFbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0YXJ0UHJvY2VzcygpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0YXJ0UHJvY2VzcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEZyYW1lcyA9IGdldFNlbGVjdGVkRnJhbWVOb2RlcygpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRGcmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbihNRVNTQUdFUy5ub1NlbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZWN0YW5nbGVzID0gZmluZEFPSUxheWVycygpO1xuICAgICAgICAgICAgY29uc3QgaGFzQU9JID0gcmVjdGFuZ2xlcy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgY29uc3QgaGFzVXNlZEFPSSA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YSgnaGFzVXNlZEFPSScpID09PSAndHJ1ZSc7XG4gICAgICAgICAgICBpZiAoIWhhc1VzZWRBT0kgJiYgaGFzQU9JKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGNvb2wgZ3V5IGhhcyBqdXN0IHVzZWQgb3VyIEFPSSBmZWF0dXJlLiBMZXQncyBub3Qgc3BhbSBoaW0gYW55bW9yZSFcIik7XG4gICAgICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKCdoYXNVc2VkQU9JJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFwaUtleSA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YSgnYXBpS2V5Jyk7XG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IHNlbGVjdGVkRnJhbWVzWzBdO1xuICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0geWllbGQgY29udmVydEZyYW1lVG9CYXNlNjQoZnJhbWUpO1xuICAgICAgICAgICAgcG9zdEltYWdlKGJhc2U2NCwgYXBpS2V5LCBmcmFtZSwgaGFzQU9JLCByZWN0YW5nbGVzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY29udmVydEZyYW1lVG9CYXNlNjQoZnJhbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBleHBvcnRTZXR0aW5ncyA9IHsgZm9ybWF0OiAnSlBHJywgY29udGVudHNPbmx5OiB0cnVlIH07XG4gICAgICAgIGNvbnN0IGFycmF5YnVmZmVyID0geWllbGQgZnJhbWUuZXhwb3J0QXN5bmMoZXhwb3J0U2V0dGluZ3MpO1xuICAgICAgICBjb25zdCBpbWdCYXNlNjQgPSAnZGF0YTppbWFnZS9qcGc7YmFzZTY0LCcgKyBhcnJheWJ1ZmZlclRvQmFzZTY0KGFycmF5YnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIGltZ0Jhc2U2NDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHBvc3RJbWFnZShpbWFnZSwgYXBpS2V5LCBmcmFtZSwgaGFzQU9JLCBhb2kpIHtcbiAgICBzaG93VUlBc3luYyhfX2h0bWxfXywgeyB2aXNpYmxlOiBmYWxzZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ3Bvc3QtaW1hZ2UnLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBhcGlLZXksXG4gICAgICAgICAgICBoYXNBT0ksXG4gICAgICAgICAgICBhb2ksXG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgfSA9IG1zZztcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N2Zy1yZXN1bHQnOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN2ZyB9ID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmaWdtYS5jcmVhdGVOb2RlRnJvbVN2ZyhzdmcpO1xuICAgICAgICAgICAgICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNVc2VkQU9JID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKCdoYXNVc2VkQU9JJykgPT09ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1VzZWRBT0kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKE1FU1NBR0VTLnN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oTUVTU0FHRVMuc3VjY2Vzc1dpdGhBT0lQcm9tcHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlcXVlc3QtZXJyb3InOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKGVycm9yKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4oKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHN3aXRjaCAoZmlnbWEuY29tbWFuZCkge1xuICAgICAgICBjYXNlICdnZW5lcmF0ZUhlYXRtYXAnOlxuICAgICAgICAgICAgZ2VuZXJhdGVIZWF0bWFwKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2V0QXBpS2V5JzpcbiAgICAgICAgICAgIHNldEFwaUtleShmYWxzZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCdVbmtub3duIGNvbW1hbmQnKTtcbiAgICB9XG59KSkoKTtcbiIsIi8qXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5YnVmZmVyVG9CYXNlNjQoYXJyYXlidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksXG4gICAgICAgIGksXG4gICAgICAgIGxlbiA9IGJ5dGVzLmxlbmd0aCxcbiAgICAgICAgYmFzZTY0ID0gJyc7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDMpIHtcbiAgICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgICBiYXNlNjQgKz0gY2hhcnNbKChieXRlc1tpXSAmIDMpIDw8IDQpIHwgKGJ5dGVzW2kgKyAxXSA+PiA0KV07XG4gICAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmIChsZW4gJSAzID09PSAyKSB7XG4gICAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgJz0nO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArICc9PSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbn1cbiIsImltcG9ydCBnZW5lcmF0ZUludGVyamVjdGlvbiBmcm9tICdpbnRlcmplY3Rpb24tanMnO1xuXG5leHBvcnQgY29uc3QgTUlOX0FPSV9XSURUSCA9IDcwO1xuZXhwb3J0IGNvbnN0IE1JTl9BT0lfSEVJR0hUID0gMzI7XG5leHBvcnQgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2FwaS52aXN1YWxleWVzLmRlc2lnbi9wcmVkaWN0Lyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21UaXAoKSB7XG4gICAgcmV0dXJuICfwn6egIFRJUDogJyArIFVTRUZVTF9USVBTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFVTRUZVTF9USVBTLmxlbmd0aCldO1xufVxuXG5leHBvcnQgY29uc3QgVVNFRlVMX1RJUFMgPSBbXG4gICAgJ0NyZWF0ZSBBcmVhcyBvZiBJbnRlcmVzdCBieSBkcmF3aW5nIGEgUmVjdGFuZ2xlIG5hbWVkIEFPSSBpbnNpZGUgeW91ciBBcnRib2FyZC4uLicsXG4gICAgJ1RoZSBhdHRlbnRpb24gaXMgaGlnaGVyIG9uIHRoZSByZWQgYXJlYXMuLi4nLFxuICAgICdDbGFyaXR5IHNjb3JpbmcgYmFzZWQgb24gY3VzdG9tIGRlbW9ncnBhaGljcyB3b3VsZCBiZSBhdmFpbGFibGUgc29vbi4uLicsXG4gICAgJ0EvQiB0ZXN0aW5nIHNtYWxsIFVJIHR3ZWFrcyBpcyBhIGNvbW1vbiB1c2UgY2FzZSBvZiBWaXN1YWxFeWVzLi4uJyxcbl07XG5cbmV4cG9ydCBjb25zdCBPTl9CT0FSRElORyA9IHtcbiAgICB0aXRsZTogJ1dlbGNvbWUgb24gYm9hcmQnLFxuICAgIHRpcHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfwn5SlIEhvdyB0byBnZW5lcmF0ZSB5b3VyIEF0dGVudGlvbiBIZWF0bWFwOicsXG4gICAgICAgICAgICBzdGVwczogWydTZWxlY3QgYW4gQXJ0Ym9hcmQgJywgJ1J1biB0aGUgcGx1Z2luIGNvbW1hbmQnXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfwn5OmIEhvdyB0byBjcmVhdGUgQXJlYXMgb2YgSW50ZXJlc3Q6JyxcbiAgICAgICAgICAgIHN0ZXBzOiBbJ0NyZWF0ZSBhIFJlY3RhbmdsZSBuYW1lZCBBT0knLCAnU2VsZWN0IHRoZSBBcnRib2FyZCcsICdSdW4gdGhlIHBsdWdpbiBjb21tYW5kJ10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBmb290ZXI6IHtcbiAgICAgICAgdGV4dDogJ/CflJcgTGVhcm4gbW9yZSBhYm91dCB0aGUgdXNhZ2Ugb2Ygb3VyIHBsdWdpbiBoZXJlOicsXG4gICAgICAgIGxpbms6ICdodHRwczovL3d3dy52aXN1YWxleWVzLmRlc2lnbi9sZWFybmAsJyxcbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEFQSV9FUlJPUlMgPSB7XG4gICAgU1RBVFVTXzQwMDogJ/CfmLEgV2UgYXJlIGRlZXBseSBzb3JyeSwgYnV0IHNvbWV0aGluZyB3ZW50IHRlcnJpYmxlIHdyb25nIScsXG4gICAgU1RBVFVTXzQwMTogJ/CfmYXigI0gWW91ciBBUEkga2V5IGlzIGludmFsaWQnLFxuICAgIFNUQVRVU180MDI6ICfwn4yIIFlvdSBzaG91bGQgdXBncmFkZSB5b3VyIGFjY291bnQgdG8gYWNjZXNzIHRoaXMgZmVhdHVyZScsXG4gICAgU1RBVFVTXzQwMzogJ/CfmqggWW91ciBoZWF0bWFwcyBsaW1pdCBoYXMgYmVlbiBleGNlZWRlZCcsXG4gICAgU1RBVFVTXzUwMzogJ/CfmqcgT3VyIGVsdmVzIGFyZSB3b3JraW5nIGhhcmQgdG8gdXBkYXRlIG91ciBzZXJ2aWNlcy4gVmlzdWFsRXllcyB3aWxsIGJlIG9ubGluZSByZWFsbHkgc29vbiEhJyxcbn07XG5cbmV4cG9ydCBjb25zdCBBT0lfRVJST1JTID0ge1xuICAgIHNpemU6IHtcbiAgICAgICAgbWVzc2FnZTogYPCfkY4gT25lIG9mIHlvdXIgcmVjdGFuZ2xlcyB3YXMgbm90IGJpZyBlbm91Z2ggKG1pbmltdW0gJHtNSU5fQU9JX1dJRFRIfXgke01JTl9BT0lfSEVJR0hUfSBwaXhlbHMpYCxcbiAgICAgICAgbGF5ZXJOYW1lOiBg8J+aqCBUb28gc21hbGwgKG1pbmltdW0gJHtNSU5fQU9JX1dJRFRIfXgke01JTl9BT0lfSEVJR0hUfSlgLFxuICAgIH0sXG4gICAgcGxhY2VtZW50OiB7XG4gICAgICAgIG1lc3NhZ2U6IGDwn5ixIE9uZSBvZiB5b3VyIHJlY3RhbmdsZXMgaXMgb3V0c2lkZSB0aGUgY3VycmVudCBBcnRib2FyZC5gLFxuICAgICAgICBsYXllck5hbWU6IGDwn5qoIE9mZiB0aGUgY3VycmVudCBBcnRib2FyZGAsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBNRVNTQUdFUyA9IHtcbiAgICBhcGlLZXlTdWNjZXNzOiAn8J+RjyBZb3VyIG5ldyBBUEkga2V5IGhhcyBiZWVuIHNhdmVkLicsXG4gICAgYXBpS2V5U3VjY2Vzc0Zyb21IZWF0bWFwOiAn8J+agCBZb3VyIEFQSSBrZXkgaGFzIGJlZW4gc2F2ZWQuIFJlLXJ1biB0aGUgcGx1Z2luIHRvIHNlZSB0aGUgbWFnaWMuJyxcbiAgICBhcGlLZXlDYW5jZWw6ICfwn4+DIEtlZXAgdXNpbmcgeW91ciBvbGQgQVBJIGtleS4nLFxuICAgIG5vU2VsZWN0aW9uOiAn8J+luiBZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3Qgb25lIGZyYW1lLicsXG4gICAgbm9BUElLZXk6ICfinItQbGVhc2UgZW50ZXIgeW91ciBWaXN1YWxFeWVzIEFQSSBrZXkgZmlyc3QnLFxuICAgIHN1Y2Nlc3M6IGDwn46JICR7Z2VuZXJhdGVJbnRlcmplY3Rpb24oKX0hIFlvdXIgaGVhdG1hcCBpcyByZWFkeSFgLFxuICAgIHN1Y2Nlc3NXaXRoQU9JUHJvbXB0OiBg8J+muOKAjSBZb3UgY2FuIGltcHJlc3MgZXZlbiBtb3JlIHlvdXIgY2xpZW50IHdpdGggQXJlYXMgb2YgSW50ZXJlc3QuLi5gLFxuICAgIG9uQm9hcmRpbmdFbmQ6ICfwn5qiIFJlLXJ1biB0aGUgcGx1Z2luIHRvIHNlZSB0aGUgbWFnaWMhJyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9