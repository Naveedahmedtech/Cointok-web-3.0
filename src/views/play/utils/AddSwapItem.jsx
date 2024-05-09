import React from "react";
import "./styles/addSwap.css";
import Badge from "../../../components/badge/Badge";

const AddSwapItem = ({ image, platform, recommended, add, link, buttonText }) => {
  return (
    <div className="bg-secondary border-b border-[#323232] flex justify-between items-center rounded-lg my-3 py-4 px-5">
      <div className="flex items-center space-x-1">
        <img src={image} alt={platform} className="h-12 md:h-16 w-auto mr-2 md:mr-5" />
        <div className="flex flex-col justify-center items-start text-left">
          <p className="text-text-light font-bold  text-sm md:text-2xl mb-2">
            {platform}
          </p>
          <div className="flex gap-1 flex-wrap">
            {add && (
              <span
                className={` bg-[#b700ff48] text-text-primary rounded-lg py-1 px-2 text-sm`}
              >
                add
              </span>
            )}{" "}
            {recommended && (
              <span
                className={` bg-[#343434] text-text-light rounded-lg py-1 px-2 text-sm`}
              >
                recommended
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        <a
          href={link}
          target="_blank"
          className=" hover:opacity-75 text-text-light font-bold py-3 px-4 md:px-8 rounded-lg transition-opacity duration-150 text-xs md:text-sm button-gradient "
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default AddSwapItem;
