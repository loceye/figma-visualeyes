import * as React from "react";
import Header from "./Header.tsx";
import Link from "./Link.tsx";
import "../styles/ui.css";

const SetApiKey = ({ apiKey, setApiKey, setIsSetApiKey }) => {
  const onSubmit = () => {
    setIsSetApiKey();
    parent.postMessage({ pluginMessage: { type: "set-api-key", apiKey } }, "*");
  };

  const onCancel = React.useCallback(() => {
    setIsSetApiKey();
    parent.postMessage({ pluginMessage: { type: "cancel-api-key" } }, "*");
  }, []);

  return (
    <div>
      <Header
        title="Set my API key"
        description="Request your unique API key on"
        other={
          <Link
            text="our website"
            to="https://visualeyes.loceye.io/subscribe.html?tool=figma"
          />
        }
      />

      <div className="row">
        <label>API key:</label>
        <input onChange={e => setApiKey(e.target.value)} value={apiKey} />
      </div>

      <div className="button-row">
        <button id="set" onClick={onSubmit} className="primary">
          Save Key
        </button>
        <button id="cancel" onClick={onCancel} className="secondary">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SetApiKey;
