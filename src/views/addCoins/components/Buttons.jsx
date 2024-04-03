import React from "react";
import "../styles/Buttons.css";

const Buttons = () => {
  return (
    <div className="flex justify-center items-center flex-wrap w-full">
      <p className="gradient-button bg-gradient w-full text-center">
        Fair Launch
      </p>
      <p className="gradient-button border-gradient w-full text-center">
        Presale
      </p>
    </div>
  );
};

export default Buttons;
