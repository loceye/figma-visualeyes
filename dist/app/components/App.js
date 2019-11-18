var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import "../styles/ui.css";
import OnBoarding from "./OnBoarding";
import SetApiKey from "./SetApiKey";
import Loader from "./Loader";
import { postImage, getCredits } from "../utils/api";
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
            }
            else if (type === "on-boarding") {
                setIsOnBoarding(true);
            }
            else if (type === "ping") {
                const { message } = event.data.pluginMessage;
                parent.postMessage({ pluginMessage: { type: "pong", message } }, "*");
            }
            else if (type === "learn-credits") {
                const { apiKey } = event.data.pluginMessage;
                const token = "Token " + apiKey;
                getCredits(token)
                    .then((credits) => __awaiter(this, void 0, void 0, function* () {
                    parent.postMessage({ pluginMessage: { type: "get-credits", credits } }, "*");
                }))
                    .catch(error => {
                    parent.postMessage({ pluginMessage: { type: "request-error", error } }, "*");
                });
            }
            else if (type === "post-image") {
                const { apiKey, arraybuffer, hasAOI, aoi } = event.data.pluginMessage;
                const imgBase64 = "data:image/jpg;base64," +
                    btoa(new Uint8Array(arraybuffer).reduce((data, byte) => {
                        return data + String.fromCharCode(byte);
                    }, ""));
                var formData = new FormData();
                formData.append("image", imgBase64 + "");
                formData.append("svg", "true");
                formData.append("platform", "figma");
                if (hasAOI) {
                    formData.append("aoi", JSON.stringify(aoi));
                }
                const token = "Token " + apiKey;
                postImage(formData, token)
                    .then((svg) => __awaiter(this, void 0, void 0, function* () {
                    parent.postMessage({ pluginMessage: { type: "svg-result", svg } }, "*");
                }))
                    .catch(error => {
                    console.log("godamn");
                    parent.postMessage({ pluginMessage: { type: "request-error", error } }, "*");
                });
            }
        };
    }, []);
    return (React.createElement("div", null,
        isOnBoarding && (React.createElement(OnBoarding, { onFinish: () => {
                setIsOnBoarding(false);
                setIsSetApiKey(true);
            } })),
        isSetApiKey && (React.createElement(SetApiKey, { apiKey: apiKey, setApiKey: setApiKey, setIsSetApiKey: setIsSetApiKey })),
        !isOnBoarding && !isSetApiKey && React.createElement(Loader, null)));
};
export default App;
