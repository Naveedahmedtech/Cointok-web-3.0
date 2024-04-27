import React, { useEffect, useState } from "react";
import SwapImageItems from "./SwapImageItems";
import logoIcon from "../../../assets/icons/default-icon2.png";
import stats from "../../../assets/stats.png";
import AddSwapItem from "./AddSwapItem";

const swapData = [
  {
    id: 1,
    platform: "Platform A",
    image: logoIcon,
    subtitle: "Swap",
    buttonText: "Buy",
  },
];
const swapAddData = {
  id: 1,
  platform: "Platform A",
  image: logoIcon,
  subtitle: "Swap",
  buttonText: "Buy",
  recommended: true,
  add: true,
  link: "https://www.google.com"
};

const SwapItem = ({ details, adds, buyTax = "0.00", saleTax = "0.00" }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(swapData);
  }, []);

  const platform_name = details?.presale_platform_name
    ? details.presale_platform_name
    : details?.listingPlatform_name;

  const platform_image = details?.presale_picture
    ? details.presale_picture
    : details?.listing_picture;

  const platform_link = details?.presale_link
    ? details.presale_link
    : details?.listing_link;

  const path = `${platform_link}?contact=${details?.contract_address}`;

  return (
    <div className="bg-secondary border-b border-[#323232] mt-10 rounded-lg">
      {/* {items.map(({ id, platform, image, subtitle, buttonText }) => ( */}
      <SwapImageItems
        key={"id"}
        platform={platform_name}
        image={platform_image || logoIcon}
        subtitle={"subtitle"}
        buttonText={"Buy"}
        path={path}
      />
      {/* ))} */}
      <AddSwapItem
        key={adds?.id || swapAddData.id}
        platform={adds?.name || swapAddData.platform}
        image={adds?.picture || swapAddData.image}
        recommended={adds?.recommended || swapAddData.recommended}
        add={adds?.add || swapAddData.add}
        link={adds?.link || swapAddData.link}
        buttonText={"Buy"}
      />
      <div className="mt-10">
        <div className="flex justify-center items-center mb-1">
          <p className="text-text-light text-center text-xl font-bold">Stats</p>
          <img src={stats} alt="" className="w-auto h-6 ms-2" />
        </div>
        <div className="flex justify-between my-3 px-5">
          <div className="flex flex-col">
            <p className="text-text-secondary text-sm">Sale Tax </p>
            <p className="text-text-light text-2xl font-bold">{saleTax} %</p>
          </div>
          <div className="flex flex-col">
            <p className="text-text-secondary text-sm">Buy Tax</p>
            <p className="text-text-light text-2xl font-bold">{buyTax} %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapItem;
