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

export const showUIAsync = (target, options) => {
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
