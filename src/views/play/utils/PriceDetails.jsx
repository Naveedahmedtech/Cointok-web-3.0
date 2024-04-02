import React from "react";
import Text from "../../../components/text/Text"; // Assuming Text is a custom component

const PriceDetails = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-10 p-5 bg-secondary rounded-lg shadow">
      <div className="flex-1 flex flex-col items-center px-4 py-3 border-b md:border-r border-[#6C6C6C] mb-4 md:mb-0">
        <div className="text-lg font-semibold">
          <span className="text-text-light">$0.009075</span>
          <span className="text-sm text-green-500 ml-2">+1235%</span>
        </div>
        <Text className="text-sm text-[#6C6C6C] mt-2">Price</Text>
      </div>
      <div className="flex-1 px-4 py-3 border-b md:border-r border-[#6C6C6C] mb-4 md:mb-0">
        <div className="text-lg font-semibold text-text-light text-center">
          $0.009075
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
