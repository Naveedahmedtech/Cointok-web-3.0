import React from "react";
import Text from "../../../components/text/Text";

const PriceDetails = ({details}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-2 px-5 bg-secondary rounded-lg shadow border-b border-[#323232]">
      <div className="flex-1 flex flex-col items-center px-4 py-3 border-b border-0 sm:border-r sm:border-0 border-[#6C6C6C] mb-4 md:mb-0">
        <div className="text-lg font-semibold">
          <span className="text-text-light">${details?.priceUsd || 0}</span>
          {/* <span className="text-sm text-green-500 ml-2">+1235%</span> */}
        </div>
        <Text className="text-sm text-[#6C6C6C] mt-2">Price</Text>
      </div>
      <div className="flex-1 px-4 py-3 border-b border-0 sm:border-r sm:border-0 border-[#6C6C6C] mb-4 md:mb-0">
        <div className="text-lg font-semibold text-text-light text-center">
          ${details?.marketCapUsd || 0}
        </div>
        <Text className="text-sm text-[#6C6C6C] mt-2 text-center">
          Market Cap
        </Text>
      </div>
      <div className="flex-1 flex flex-col items-center px-4 py-3">
        <div className="text-lg font-semibold text-text-light">2 Month</div>
        <Text className="text-sm text-[#6C6C6C] mt-2">Launch Date</Text>
      </div>
    </div>
  );
};

export default PriceDetails;
