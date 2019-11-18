# VisualEyes Figma plugin

<div align="center">
  <img width="150px" src="./assets/logo.png"/>
</div>
<br/>
<div align="center">
  Generate attention heatmaps without ever leaving your favorite design environment.
</div>
<br/>
<img src="./assets/demo.gif"/>

## Description

Validate your design decisions inside your favourite design tool. We combine leading neuroscience research with AI to accurately predict how people will react to your digital designs.

## How to develop

- Run `yarn` to install dependencies.
- Run `yarn build:watch` to start webpack in watch mode.
- Open `Figma` -> `Plugins` -> `Development` -> `New Plugin...` and choose `manifest.json` file from this repo.

⭐ To change the UI of your plugin (the react code), start editing [App.tsx](./src/app/components/App.tsx).  
⭐ To interact with the Figma API edit [controller.ts](./src/plugin/controller.ts).  
⭐ Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).

## Where can I find my API key?

We just published our Beta version and expanding our testing audience. If you're interested in using VisualEyes plugin, please visit our website and subscribe in our list. Immediately you'll recieve an email with your unique API key.

Request your API key [here](https://visualeyes.loceye.io/subscribe)

🍻 Enjoy
