import React from "react";
import banner1 from "../../../assets/banners/banner1.png";
import Text from "../../../components/text/Text";

const Banner = ({ image }) => {
  const displayImage = image ? image : banner1;

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center my-10">
        <Text className="text-text-light font-bold text-center md:text-left md:max-w-[400px] mb-6 lg:mb-0 md:mr-10 md:text-xl">
          #1 Platform to discover newest coins!
        </Text>
        <div className="max-w-full md:max-w-[900px]">
          <img
            src={displayImage}
            alt="Banner 1"
            className="w-full"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; 
              currentTarget.src = banner1;
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
