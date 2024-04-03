import React, { useEffect, useState } from "react";
import SwapImageItems from "./SwapImageItems"; // Ensure this import is correct
import logoIcon from "../../../assets/icons/default-icon2.png";
import stats from "../../../assets/stats.png";

const swapData = [
  {
    id: 1,
    platform: "Platform A",
    image: logoIcon,
    subtitle: "Swap",
    buttonText: "Buy",
  },
  {
    id: 2,
    platform: "Platform B",
    image: logoIcon,
    subtitle: "Exchange",
    buttonText: "Buy",
  },
];

const SwapItem = ({ buyTax = "0.00", saleTax = "0.00" }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // This is where you might fetch your data from an API instead
    setItems(swapData);
  }, []);

  return (
    <div className="bg-secondary p-5 mt-10 rounded-lg">
      {items.map(({ id, platform, image, subtitle, buttonText }) => (
        <SwapImageItems
          key={id}
          platform={platform}
          image={image}
          subtitle={subtitle}
          buttonText={buttonText}
        />
      ))}
      <div className="mt-5">
        <div className="flex justify-center items-center">
          <p className="text-text-light text-center text-xl">Stats</p>
          <img src={stats} alt="" className="w-auto h-6 ms-2" />
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col">
            <p className="text-text-secondary">Sale Tax </p>
            <p className="text-text-light">{saleTax} %</p>
          </div>
          <div className="flex flex-col">
            <p className="text-text-secondary">Buy Tax</p>
            <p className="text-text-light">{buyTax} %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapItem;
