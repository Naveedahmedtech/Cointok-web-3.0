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
import { columns, dummyData } from "../../../utils/dummyData";
import glow from "../../../assets/glow/glow2.png";
import { useNavigate } from "react-router-dom";
import {
  useGetAllTimeBestQuery,
  useGetTodayBestQuery,
} from "../../../app/features/api";

const BestRecords = () => {
  const navigate = useNavigate();
  const [currentData, setCurrentData] = useState([]);
  const [active, setActive] = useState("today"); // Track which button is active

  const {
    data: todayBest,
    error: todayBestError,
    isLoading: todayBestLoading,
  } = useGetTodayBestQuery();
  const {
    data: allTimeBest,
    error: allTimeBestError,
    isLoading: allTimeBestLoading,
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
    return `px-4 py-2 rounded-full text-text-light text-lg cursor-pointer ${
      active === button ? "bg-[#343434]" : ""
    }`;
  };

  const dataRows = currentData?.coins?.map((item, index) => {
    const rank = (index + 1).toString().padStart(2, "0");
    return [
      <tr
        key={index}
        onClick={() => navigate(`/play?id=${item.id}`)}
        className="cursor-pointer hover:opacity-70"
      >
        <td className={`text-text-light sticky-column second-sticky-column`}>
          {rank}
        </td>
        <td
          className={`text-text-light sticky-column third-sticky-column p-2 px-5`}
        >
          <IconText
            icon={item?.coin_picture || heartFill}
            text={item?.coin_name || "Name"}
          />
        </td>
        <td className="text-text-info">{item?.category || "Category"}</td>
        <td className="text-text-light">
          <IconText
            icon={item?.blockchain?.icon || heartFill}
            text={item?.coin_symbol || "Name"}
          />
        </td>
        <td className="text-text-light">
          <ColoredNumber number={item?.volume24H || 245} />
        </td>
        <td className="text-text-light">
          <FormatMarketCap value={item?.marketCap || 25} />
        </td>
        <td className="text-text-light">
          <FormatMarketCap value={item?.price || 56} />
        </td>
        <td className="text-text-light">{formatDate(item?.launch_date)}</td>
        <td className="text-text-light border-2 border-text-primary flex items-center justify-around gap-2 rounded-md px-3 py-2">
          <img src={heartFill} alt="" />
          <Text>{item?.total_votes || 1}</Text>
        </td>
      </tr>,
      <tr key={`spacer-${index}`} className="h-4"></tr>,
    ];
  });
  const renderColumnTitle = (column) => {
    return (
      <span>
        {column.title}
        {column.icon && <span className="text-text-primary"> ↓</span>}
      </span>
    );
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
          <div className="flex items-center flex-wrap m-5 gap-3">
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
        columns={columns.map((column) => ({
          ...column,
          title: renderColumnTitle(column),
        }))}
        rowComponents={dataRows}
        pageSize={10}
        showPagination={true}
      />
    </div>
  );
};

export default BestRecords;
