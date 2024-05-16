import React from "react";
import PriceDetails from "../utils/PriceDetails";
import SwapItem from "../utils/SwapItem";
import LogoSection from "../utils/LogoSection";
import BitCoinHeading from "../utils/BitCoinHeading";
import SocialIcons from "../utils/SocialIcons";
import Description from "../utils/Description";
import bgImage from "../../../assets/banners/descriptionbg.png";
import heartFill from "../../../assets/icons/heart-fill.png";
import { useAddVoteMutation } from "../../../app/features/api";
import { toast } from "react-toastify";

const TopSection = ({ details, refetch, status }) => {
  const [addVoteMutation, { isLoading: isVoting }] = useAddVoteMutation();

  const handleVote = () => {
    addVoteMutation({ id: details?.id })
      .unwrap()
      .then((data) => {
        console.log("Vote added successfully:", data);
        toast.success("Vote added successfully", {
          position: "top-center",
        });
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      })
      .catch((error) => {
        console.error("Failed to add vote:", error);
        toast.error(error?.data?.message || "Error voting", {
          position: "top-center",
        });
      });
  };

  const backgroundImage = details?.coin_picture
    ? details?.coin_picture
    : bgImage;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-10">
        <div className="lg:col-span-4 col-span-1">
          <LogoSection details={details} />
          <SwapItem details={details} />
        </div>
        <div className="flex-col justify-center items-center gap-2 md:items-end flex md:hidden">
          <div className="relative" onClick={handleVote}>
            {details?.total_vote > 250 && (
              <div className="absolute bg-gray-800 text-white py-1 px-2 rounded-md text-xs z-10 bottom-8 left-0 opacity-0 transition-opacity duration-200">
                {details?.total_vote}
              </div>
            )}
            <div
              className={`text-text-light border-2 border-text-primary flex items-center justify-center gap-1 flex-wrap rounded-md p-2 w-28 cursor-pointer ${
                isVoting ? "opacity-50" : ""
              }`}
            >
              {isVoting ? (
                <p>Voting...</p>
              ) : (
                <>
                  <img src={heartFill} alt="" className="me-2" />
                  <p>{details?.total_vote}</p>
                </>
              )}
            </div>
          </div>
          <p className="text-xs text-center self-center text-white">
            Today's Vote: {details?.today_votes ? details?.today_votes : 0}
          </p>
        </div>

        <div className="lg:col-span-8  bg-secondary py-5 rounded-lg border-b-2 border-[#323232] relative">
          {/* Background as watermark */}
          <div
            className="absolute left-[30%] bottom-1 lg:left-[25%] lg:bottom-[10px] w-[50%] h-[20%] lg:w-[50%] xl:lg:h-[30%]"
            style={{
              // position: "absolute",
              // left: "25%",
              // // left: "40%",
              // left: "30%",
              // // bottom: 10,
              // bottom: 0,
              // // large screens
              // width: "50%",
              // height: "30%",
              // // width: "20%",
              // // height: "30%",
              // width: "40%",
              // height: "30%",
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: 0.2,
              filter: "grayscale(100%)",
            }}
          ></div>
          <BitCoinHeading details={details} refetch={refetch} status={status} />
          <SocialIcons details={details} />
          <PriceDetails details={details} />
          <Description
            description={details?.coin_description}
            coinImage={details?.coin_picture}
          />
        </div>
      </div>
    </>
  );
};

export default TopSection;
