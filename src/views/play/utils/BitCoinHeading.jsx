import React, { useState } from "react";
import logoIcon from "../../../assets/icons/default-icon2.png";
import heartFill from "../../../assets/icons/heart-fill.png";
import binance from "../../../assets/common/binance.png";
import copy from "../../../assets/common/copy.png";
import coin1 from "../../../assets/socials/coin-1.png";
import coin2 from "../../../assets/socials/coin-2.png";
import StatsBadge from "./StatsBadge";
import Tooltip from "../../../components/tooltip/Tooltip";
import { useAddVoteMutation } from "../../../app/features/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const BitCoinHeading = ({ details, refetch, status }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [addVoteMutation, { isLoading: isVoting }] = useAddVoteMutation();
  const navigate = useNavigate();
  const id = details?.id;

  const handleVote = () => {
    addVoteMutation({ id })
      .unwrap()
      .then((data) => {
        console.log("Vote added successfully:", data);
        toast.success("Vote added successfully", {
          position: "top-center",
        });
        setTimeout(() => {
          window.location.reload();
        }, 5000)
      })
      .catch((error) => {
        console.error("Failed to add vote:", error);
        toast.error(error?.data?.message || "Error voting", {
          position: "top-center",
        });
      });
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const address =
    details?.contract_address || "0x4e1C1BD35397042319Fe252d2e324ad439B19f1e";
  const displayAddress = `${address.substring(0, 11)}........`;

  const voteCount = details?.total_vote ? details?.total_vote : 0;
  const voteTooltip = details?.total_vote > 250 ? details?.total_vote : "";
  const IsCoinAvailable = () => {
    if (details?.coin_market_cap_link) {
      return <img src={coin2} alt="" className="w-6 h-6" />;
    }
    if (details?.coin_gecko_link) {
      return <img src={coin1} alt="" className="w-6 h-6" />;
    }
  };

  return (
    <div className="flex flex-row justify-center lg:justify-between items-center gap-3 flex-wrap text-text-light border-b border-[#323232] py-2 px-0 md:px-5 ">
      <div className="flex items-center space-x-2 mb-4">
        <img
          src={details?.chain_icon || binance}
          alt=""
          className="w-8 h-8 md:w-16 md:h-16 rounded-full mr-3"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = binance;
          }}
        />
        <div className="flex flex-col">
          <div>
            <p>{details?.chain_name}</p>
          </div>
          <div className="flex gap-2">
            <Tooltip content={isCopied ? "Copied!" : address}>
              <div
                className={`cursor-pointer block md:hidden ${
                  isCopied ? "block" : "block"
                }`}
                onClick={() => copyToClipboard(address)}
              >
                {displayAddress}
              </div>
              <div
                className={`cursor-pointer hidden md:block `}
                onClick={() => copyToClipboard(address)}
              >
                {address}
              </div>
            </Tooltip>
            <div className="flex space-x-1 mt-2">
              <Tooltip content={isCopied ? "Copied!" : address}>
                <img
                  src={copy}
                  alt=""
                  className={`w-5 h-5 cursor-pointer mr-2`}
                  onClick={() => copyToClipboard(address)}
                />
              </Tooltip>
              <IsCoinAvailable />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-2 md:items-end hidden md:flex">
        <div className="relative" onClick={handleVote}>
          {details?.total_vote > 9999999 && (
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
                <p>{voteCount}</p>
              </>
            )}
          </div>
        </div>
        <p className="text-xs text-center self-center">
          Today's Vote: {details?.today_votes ? details?.today_votes : 0}
        </p>
      </div>
    </div>
  );
};

export default BitCoinHeading;
