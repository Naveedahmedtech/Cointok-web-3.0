import React, { useEffect, useState } from "react";
import Table from "../../../components/table/Table";
import {
  ColoredNumber,
  FormatMarketCap,
  IconText,
  formatDate,
} from "./utils/promoted";
import heartFill from "../../../assets/icons/heart-fill.png";
import Text from "../../../components/text/Text";
import Badge from "../../../components/badge/Badge";
import { columns, dummyData, smColumns } from "../../../utils/dummyData";
import glow from "../../../assets/glow/glow2.png";
import fire from "../../../assets/icons/fire.png";
import { useNavigate } from "react-router-dom";
import {
  useAddVoteMutation,
  useGetAllTimeBestQuery,
  useGetTodayBestQuery,
} from "../../../app/features/api";
import { toast } from "react-toastify";

const BestRecords = () => {
  const [currentData, setCurrentData] = useState([]);
  const [votingStatus, setVotingStatus] = useState({});
  const [active, setActive] = useState("today"); // Track which button is active
  const [addVoteMutation, { isLoading: isVoting }] = useAddVoteMutation();

  const {
    data: todayBest,
    error: todayBestError,
    isLoading: todayBestLoading,
    refetch: todayBestRefetch,
    isFetching: todayBestFetching,
  } = useGetTodayBestQuery();
  const {
    data: allTimeBest,
    error: allTimeBestError,
    isLoading: allTimeBestLoading,
    refetch: allTimeBestRefetch,
    isFetching: allTimeBestFetching,
  } = useGetAllTimeBestQuery();

  useEffect(() => {
    if (todayBest && !todayBestError) {
      setCurrentData(todayBest);
    }
  }, [todayBest, todayBestError]); // Fetch Today's Best on mount

  const handleFetchTodayBest = () => {
    if (todayBest && !todayBestError) {
      setCurrentData(todayBest);
      setActive("today"); // Set active state
    } else if (todayBestError) {
      console.error("Error fetching Today Best:", todayBestError);
    }
  };

  const handleFetchAllTimeBest = () => {
    if (allTimeBest && !allTimeBestError) {
      setCurrentData(allTimeBest);
      setActive("allTime"); // Set active state
    } else if (allTimeBestError) {
      console.error("Error fetching All Time Best:", allTimeBestError);
    }
  };

  const buttonClass = (button) => {
    return `px-2 md:px-4 py-2 rounded-full text-text-light text-sm md:text-lg cursor-pointer ${
      active === button ? "bg-[#343434]" : ""
    }`;
  };

  const handleVote = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (!votingStatus[id]) {
      setVotingStatus((prev) => ({ ...prev, [id]: true }));

      addVoteMutation({ id })
        .unwrap()
        .then((data) => {
          toast.success("Vote added successfully", {
            position: "top-center",
          });
          todayBestRefetch();
          allTimeBestRefetch();
        })
        .catch((error) => {
          console.error("Failed to add vote:", error);
          toast.error(error?.data?.message || "Error voting", {
            position: "top-center",
          });
        })
        .finally(() => {
          setVotingStatus((prev) => ({ ...prev, [id]: false }));
        });
    }
  };



  return (
    <div className="my-10  relative">
      <img
        src={glow}
        alt="Glow"
        className="w-auto absolute left-50 bottom-50 z-[-111] transform -translate-x-1/2 -translate-y-1/2"
      />
      <Table
        header={
          <div className="flex items-center flex-wrap m-5 md:gap-3">
            <span
              className={buttonClass("today")}
              onClick={handleFetchTodayBest}
            >
              Today's Best
            </span>
            <span
              className={buttonClass("allTime")}
              onClick={handleFetchAllTimeBest}
            >
              All Time Best
            </span>
          </div>
        }
        coins={currentData?.coins}
        pageSize={10}
        showPagination={true}
        handleVote={handleVote}
        votingStatus={votingStatus}
        promoted={true}
      />
    </div>
  );
};

export default BestRecords;
