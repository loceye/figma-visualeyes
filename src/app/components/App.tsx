import * as React from "react";
import "../styles/ui.css";
import OnBoarding from "./OnBoarding";
import LimitReached from "./LimitReached";
import SetApiKey from "./SetApiKey";
import Loader from "./Loader";
import { postImage, getCredits } from "../utils/api";
import { API_ERRORS } from "../utils/constants";

const App = ({}) => {
  const [apiKey, setApiKey] = React.useState("");
  const [isOnBoarding, setIsOnBoarding] = React.useState(false);
  const [isSetApiKey, setIsSetApiKey] = React.useState(false);
  const [isLimit, setIsLimit] = React.useState(false);

  React.useEffect(() => {
    window.onmessage = event => {
      const { type } = event.data.pluginMessage;
      console.log(type);

      if (type === "set-previous-api-key") {
        const { previousApiKey } = event.data.pluginMessage;
        setApiKey(previousApiKey);
        setIsSetApiKey(true);
      } else if (type === "show-limit-alert") {
        setIsLimit(true);
      } else if (type === "on-boarding") {
        setIsOnBoarding(true);
      } else if (type === "ping") {
        const { message } = event.data.pluginMessage;
        parent.postMessage({ pluginMessage: { type: "pong", message } }, "*");
      } else if (type === "learn-credits") {
        const { apiKey } = event.data.pluginMessage;
        const token = "Token " + apiKey;

        getCredits(token)
          .then(async credits => {
            parent.postMessage(
              { pluginMessage: { type: "get-credits", credits } },
              "*"
            );
          })
          .catch(error => {
            parent.postMessage(
              { pluginMessage: { type: "request-error", error } },
              "*"
            );
          });
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
            if (error === API_ERRORS.STATUS_403) {
              setIsLimit(true);
              parent.postMessage(
                { pluginMessage: { type: "reached-limit" } },
                "*"
              );
            } else {
              parent.postMessage(
                { pluginMessage: { type: "request-error", error } },
                "*"
              );
            }
          });
      }
    };

    return () => {
      console.log("will unmount");
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
      {isLimit && (
        <LimitReached
          onFinish={() => {
            setIsLimit(false);
            parent.postMessage({ pluginMessage: { type: "limit-end" } }, "*");
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
      {!isOnBoarding && !isSetApiKey && !isLimit && <Loader />}
    </div>
  );
};

export default App;
