import React, { useEffect, useState } from "react";
import SwapImageItems from "./SwapImageItems"; // Ensure this import is correct
import logoIcon from "../../../assets/icons/default-icon2.png";

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
    buttonText: "Trade",
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
        <p className="text-text-light text-center">Stats</p>
        <div className="flex justify-around">
          <p className="text-text-light">Sale Tax: {saleTax} %</p>
          <p className="text-text-light">Buy Tax: {buyTax} %</p>
        </div>
      </div>
    </div>
  );
};

export default SwapItem;
