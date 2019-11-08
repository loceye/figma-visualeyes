var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { MESSAGES, AOI_ERRORS, getRandomTip, MIN_AOI_WIDTH, MIN_AOI_HEIGHT } = require("./utils/constants.js");
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
function learnCredits() {
    const apiKey = figma.root.getPluginData("apiKey");
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
                    figma.root.setPluginData("hasOnBoarding", "false");
                    figma.closePlugin(`🔦 You have ${msg.credits} credits left!`);
                }
                else {
                    figma.closePlugin("🚨 Something went wrong! Please, contact us at info@loceye.io");
                }
            };
        });
    }
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
                    });
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
