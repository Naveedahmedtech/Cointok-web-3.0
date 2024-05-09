import React, { useState, useEffect } from "react";
import "../styles/Buttons.css";

const Buttons = ({ onButtonClick, error, value }) => {
  const [clickedButton, setClickedButton] = useState(value || "fair_launch");
  useEffect(() => {
    if (!value) {
      onButtonClick("fair_launch");
    }
  }, [value]);

  const handleButtonClick = (buttonName) => {
    if (buttonName !== clickedButton) {
      setClickedButton(buttonName);
      onButtonClick(buttonName);
    }
  };

  return (
    <div className="flex flex-col wrapper">
      <div className="flex justify-center items-center flex-wrap md:flex-nowrap gradient-border w-full">
        <p
          className={`gradient-button ${
            clickedButton === "fair_launch" ? "bg-gradient" : "border-gradient"
          } w-full text-center`}
          onClick={() => handleButtonClick("fair_launch")}
        >
          Fair Launch
        </p>
        <p
          className={`gradient-button ${
            clickedButton === "presale" ? "bg-gradient" : "border-gradient"
          } w-full text-center`}
          onClick={() => handleButtonClick("presale")}
        >
          Presale
        </p>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Buttons;
