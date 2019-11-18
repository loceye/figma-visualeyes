import * as React from "react";
import Header from "./Header.tsx";
import Link from "./Link.tsx";
import "../styles/ui.css";

const OnBoarding = ({ onFinish }) => {
  const onUpgrade = () => {
    window.open("https://www.visualeyes.design/pricing", "_system");
    onFinish();
  };

  return (
    <div>
      <Header
        title="😭 Bad news"
        description="You have run out of credits. However, You can become a PRO designer and enjoy 200 credits per month along with some other benefits."
      />

      <div className="button-row">
        <button onClick={onUpgrade} className="primary">
          Upgrade Now
        </button>
        <button onClick={onFinish} className="secondary">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OnBoarding;
