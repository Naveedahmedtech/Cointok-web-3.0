import React, { useState } from "react";
import "../styles/Buttons.css";

const Buttons = ({ onButtonClick, error }) => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName === clickedButton ? null : buttonName);
    onButtonClick(buttonName);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center flex-wrap md:flex-nowrap w-full">
        <p
          className={`gradient-button ${
            clickedButton === "Fair Launch" ? "bg-gradient" : "border-gradient"
          } w-full text-center`}
          onClick={() => handleButtonClick("Fair Launch")}
        >
          Fair Launch
        </p>
        <p
          className={`gradient-button ${
            clickedButton === "Presale" ? "bg-gradient" : "border-gradient"
          } w-full text-center`}
          onClick={() => handleButtonClick("Presale")}
        >
          Presale
        </p>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Buttons;
