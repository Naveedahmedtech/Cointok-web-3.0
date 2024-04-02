import React, { useState } from "react";
import logoIcon from "../../../assets/icons/default-icon2.png";
import heartFill from "../../../assets/icons/heart-fill.png";
import StatsBadge from "./StatsBadge";
import Tooltip from "../../../components/tooltip/Tooltip";

const BitCoinHeading = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const address = "0x4e1C1BD35397042319Fe252d2e324ad439B19f1e";
  const displayAddress = `${address.slice(0, 6)}...${address.slice(-4)}`; // Shorten for all views

  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-text-light">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <img src={logoIcon} alt="" className="w-16 h-16" />
        <div className="flex flex-col md:flex-row md:space-x-4">
          <p>Hello world</p>
          <Tooltip content={isCopied ? "Copied!" : address}>
            <p
              className="cursor-pointer"
              onClick={() => copyToClipboard(address)}
            >
              {displayAddress}
            </p>
          </Tooltip>
          <div className="flex space-x-1">
            <img src={logoIcon} alt="" className="w-6 h-6" />
            <img src={logoIcon} alt="" className="w-6 h-6" />
            <img src={logoIcon} alt="" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end">
        <StatsBadge icon={heartFill} count="42520" />
        <p className="text-xs mt-2">Today's Vote: 952</p>
      </div>
    </div>
  );
};

export default BitCoinHeading;
