import React from "react";
import Text from "../../../components/text/Text";
import Badge from "../../../components/badge/Badge";
import logoIcon from "../../../assets/icons/default-icon2.png";

const TopSection = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <div>
          <div className="flex justify-between items-center bg-secondary gap-5 p-5">
            <img src={logoIcon} alt="" className="w-auto h-32" />
            <div>
              <div className="flex my-2">
                <Text className="text-text-primary me-2">SHIBA PLAY</Text>
                <Text className="text-text-light">SHIB</Text>
              </div>
              <Badge className="text-text-light ">Swap</Badge>
            </div>
          </div>
          <div className="bg-secondary p-5 my-10">
            <div className="flex justify-between items-center gap-5">
              <img src={logoIcon} alt="" className="w-auto h-32" />
              <div>
                <Text className="text-text-light">PancakeSwap</Text>
                <Text className="text-text-light">Swap</Text>
              </div>
              <button className="bg-text-primary hover:opacity-50 text-text-light font-bold py-2 px-6 rounded-lg transition-colors duration-150">
                Buy
              </button>
            </div>
            <div>
              <Text className="text-text-light text-center">Stats</Text>
              <div className="flex justify-between items-center">
                <div className="flex">
                  <Text className="text-text-light">Sale Tax</Text>
                  <Text className="text-text-light">0.00 %</Text>
                </div>
                <div className="flex">
                  <Text className="text-text-light">Buy Tax</Text>
                  <Text className="text-text-light">0.00 %</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default TopSection;
