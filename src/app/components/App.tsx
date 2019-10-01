import * as React from "react";
import Header from "./Header.tsx";
import Link from "./Link.tsx";
import "../styles/ui.css";
import OnBoarding from "./OnBoarding";
import SetApiKey from "./SetApiKey";
import Loader from "./Loader.tsx";
import { postImage } from "../utils/api";

const App = ({}) => {
  const [apiKey, setApiKey] = React.useState("");
  const [isOnBoarding, setIsOnBoarding] = React.useState(false);
  const [isSetApiKey, setIsSetApiKey] = React.useState(false);

  React.useEffect(() => {
    window.onmessage = event => {
      const { type } = event.data.pluginMessage;

      if (type === "set-previous-api-key") {
        const { previousApiKey } = event.data.pluginMessage;
        setApiKey(previousApiKey);
        setIsSetApiKey(true);
      } else if (type === "on-boarding") {
        setIsOnBoarding(true);
      } else if (type === "ping") {
        const { message } = event.data.pluginMessage;
        parent.postMessage({ pluginMessage: { type: "pong", message } }, "*");
      } else if (type === "post-image") {
        const { apiKey, arraybuffer, hasAOI, aoi } = event.data.pluginMessage;

        const imgBase64 =
          "data:image/jpg;base64," +
          btoa(
            new Uint8Array(arraybuffer).reduce((data, byte) => {
              return data + String.fromCharCode(byte);
            }, "")
          );

        var formData = new FormData();
        formData.append("image", imgBase64 + "");
        formData.append("svg", "true");
        formData.append("platform", "figma");
        if (hasAOI) {
          formData.append("aoi", JSON.stringify(aoi));
        }

        const token = "Token " + apiKey;

        postImage(formData, token)
          .then(async svg => {
            parent.postMessage(
              { pluginMessage: { type: "svg-result", svg } },
              "*"
            );
          })
          .catch(error => {
            parent.postMessage(
              { pluginMessage: { type: "request-error", error } },
              "*"
            );
          });
      }
    };
  }, []);

  return (
    <div>
      {isOnBoarding && (
        <OnBoarding
          onFinish={() => {
            setIsOnBoarding(false);
            setIsSetApiKey(true);
          }}
        />
      )}
      {isSetApiKey && (
        <SetApiKey
          apiKey={apiKey}
          setApiKey={setApiKey}
          setIsSetApiKey={setIsSetApiKey}
        />
      )}
      {!isOnBoarding && !isSetApiKey && <Loader />}
    </div>
  );
};

export default App;
