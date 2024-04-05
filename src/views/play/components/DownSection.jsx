import React from "react";
import SafetyChecks from "../utils/SafetyChecks";
import PromoteCoinButton from "../../../components/button/PromoteCoinButton";
import banner from "../../../assets/bannerPlay.png";
import game from "../../../assets/game.png";

const DownSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5  mb-24">
      <div className="col-span-1 md:col-span-2 lg:col-span-4 z-10">
        <SafetyChecks />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-8 z-10">
        <div className="mb-16">
          <PromoteCoinButton />
        </div>
        <div className="flex justify-between items-center  h-full ">
          <div
            className="relative w-full h-28 md:h-32 rounded-4xl bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-row items-center justify-between p-2 md:p-3 text-center md:text-left">
              <div className="flex items-center justify-start space-x-2 md:space-x-3">
                <img
                  src={game}
                  alt="Game"
                  className="w-12 h-12 md:w-24 md:h-24"
                />
                <div>
                  <p className="text-white font-semibold text-xs md:text-lg break-words">
                    Wordzone
                  </p>
                  <button className="bg-text-primary hover:opacity-75 text-text-light font-bold py-1 px-2 md:px-3 rounded-lg transition-colors duration-150 mt-2 text-xs md:text-base">
                    Play
                  </button>
                </div>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-white font-bold text-xs md:text-lg">
                  5 days left
                </p>
                <p className="text-white font-semibold text-xs md:text-base break-words">
                  Play and win $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownSection;
