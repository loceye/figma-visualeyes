import generateInterjection from "interjection-js";

export const MIN_AOI_WIDTH = 70;
export const MIN_AOI_HEIGHT = 32;
export const ATTENTION_MAP_URL = "https://api.visualeyes.design/predict/";
export const CLARITY_URL = "https://api.visualeyes.design/clarity/";
export const CREDITS_URL = "https://api.visualeyes.design/credits";
// export const API_URL = 'http://192.168.1.4:8000/predict/';

export function getRandomTip() {
  return (
    "🧠 TIP: " + USEFUL_TIPS[Math.floor(Math.random() * USEFUL_TIPS.length)]
  );
}

export const USEFUL_TIPS = [
  "The AOI Rectange should be placed at the top Frame...",
  "Create Areas of Interest by drawing a Rectangle named AOI inside your Frame...",
  "The attention is higher on the red areas...",
  "Clarity scoring based on custom demogrpahics would be available soon...",
  "A/B testing small UI tweaks is a common use case of VisualEyes..."
];

export const ON_BOARDING = {
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

export const API_ERRORS = {
  STATUS_400: "😱 We are deeply sorry, but something went terrible wrong!",
  STATUS_401: "🙅‍ Your API key is invalid",
  STATUS_402: "🌈 You should upgrade your account to access this feature",
  STATUS_403: "🚨 Your heatmaps limit has been exceeded",
  STATUS_503:
    "🚧 Our elves are working hard to update our services. VisualEyes will be online really soon!!"
};

export const AOI_ERRORS = {
  SIZE: {
    message: `👎 One of your rectangles was not big enough (minimum ${MIN_AOI_WIDTH}x${MIN_AOI_HEIGHT} pixels)`,
    layerName: `🚨 Too small (minimum ${MIN_AOI_WIDTH}x${MIN_AOI_HEIGHT})`
  },
  PLACEMENT: {
    message: `😱 One of your rectangles is outside the current Frame.`,
    layerName: `🚨 Off the current Frame`
  }
};

export const MESSAGES = {
  noSelection: "You did not select anything 😳",
  noAPIKey: "Please enter your VisualEyes API key first",
  success: `🎉 ${generateInterjection()}! Your result is ready!`,
  successWithAOIPrompt: `🦸‍♂️ ${generateInterjection()}! You can impress even more your client with Areas of Interest...`
};
