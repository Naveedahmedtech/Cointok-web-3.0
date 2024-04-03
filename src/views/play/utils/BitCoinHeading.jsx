import React, { useState } from "react";
import logoIcon from "../../../assets/icons/default-icon2.png";
import heartFill from "../../../assets/icons/heart-fill.png";
import binance from "../../../assets/common/binance.png";
import copy from "../../../assets/common/copy.png";
import coin1 from "../../../assets/socials/coin-1.png";
import coin2 from "../../../assets/socials/coin-2.png";
import StatsBadge from "./StatsBadge";
import Tooltip from "../../../components/tooltip/Tooltip";

const BitCoinHeading = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const address = "0x4e1C1BD35397042319Fe252d2e324ad439B19f1e";
  const displayAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-text-light">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <img src={binance} alt="" className="w-16 h-16" />
        <div className="flex flex-col md:space-x-4">
          <div>
            <p>Binance Smart Chain</p>
          </div>
          <div>
            <Tooltip content={isCopied ? "Copied!" : address}>
              <p
                className={`cursor-pointer ${isCopied ? "block" : "block"}`}
                onClick={() => copyToClipboard(address)}
              >
                {displayAddress}
              </p>
              <p
                className={`cursor-pointer hidden md:block ${
                  isCopied ? "block" : "block"
                }`}
                onClick={() => copyToClipboard(address)}
              >
                {address}
              </p>
            </Tooltip>
            <div className="flex space-x-1">
              {/* Conditionally rendering copy button based on screen size */}
              <Tooltip content={isCopied ? "Copied!" : address}>
                <img
                  src={copy}
                  alt=""
                  className={`w-6 h-6 cursor-pointer ${
                    isCopied ? "hidden" : "block"
                  }`}
                  onClick={() => copyToClipboard(address)}
                />
              </Tooltip>
              <img src={coin2} alt="" className="w-6 h-6" />
              <img src={coin1} alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 md:items-end">
        <StatsBadge icon={heartFill} count="42520" />
        <p className="text-xs mt-2">Today's Vote: 952</p>
      </div>
    </div>
  );
};

export default BitCoinHeading;
