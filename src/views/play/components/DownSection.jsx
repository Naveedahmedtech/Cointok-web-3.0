import React from "react";
import SafetyChecks from "../utils/SafetyChecks";
import PromoteCoinButton from "../../../components/button/PromoteCoinButton";
import banner from "../../../assets/bannerPlay.png";
import game from "../../../assets/game.png";

const DownSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-10">
      <div className="lg:col-span-4 col-span-1">
        <SafetyChecks />
      </div>
      <div className="lg:col-span-8 col-span-1">
        <PromoteCoinButton />
        <div className="flex justify-between items-center h-full">
          <div className="relative mt-5">
            <img src={banner} alt="Banner" className="w-full" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between p-5">
              <div className="flex items-center">
                <img src={game} alt="Game" className="w-24 h-24 mr-4" />
                <div>
                  <p className="text-white font-semibold">Wordzone</p>
                  <button className="bg-text-primary hover:opacity-75 text-text-light font-bold py-2 px-6 rounded-lg transition-colors duration-150 mt-2">
                    Play
                  </button>
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-lg">5 days left</p>
                <p className="text-white font-semibold">Play and win $100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownSection;
