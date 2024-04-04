import React, { useState } from "react";
import Table from "../../../components/table/Table";
import heartFill from "../../../assets/icons/heart-fill.png";
import Text from "../../../components/text/Text";
import Badge from "../../../components/badge/Badge";
import glow from "../../../assets/glow/glow2.png";
import { columns, dummyData } from "../../../utils/dummyData";
import {
  ColoredNumber,
  FormatMarketCap,
  IconText,
  formatDate,
} from "../../home/components/utils/promoted";
import { useNavigate } from "react-router-dom";

const NewCoinsRecords = () => {
  const totalRecord = dummyData.length;
  const navigate = useNavigate();

  const dataRows = dummyData.map((item, index) => {
    const rank = (index + 1).toString().padStart(2, "0");
    return [
      <tr
        key={index}
        onClick={() => navigate(`/play`)}
        className="cursor-pointer hover:opacity-70"
      >
        <td
          className={`text-text-secondary sticky-column second-sticky-column p-2 px-5`}
        >
          {rank}
        </td>
        <td
          className={`text-text-secondary sticky-column third-sticky-column p-2 px-5`}
        >
          <IconText icon={item.coins.icon} text={item.coins.name} />
        </td>
        <td className="text-text-info">{item.category}</td>
        <td className="text-text-light">
          <IconText icon={item.blockchain.icon} text={item.blockchain.name} />
        </td>
        <td className="text-text-light">
          <ColoredNumber number={item.volume24H} />
        </td>
        <td className="text-text-light">
          <FormatMarketCap value={item.marketCap} />
        </td>
        <td className="text-text-light">
          <FormatMarketCap value={item.price} />
        </td>
        <td className="text-text-light">{formatDate(item.launchDate)}</td>
        <td className="text-text-light border-2 border-text-primary flex items-center justify-around rounded-md mr-3">
          <img src={heartFill} alt="" />
          <Text>{item.votes}</Text>
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
      {/* <img
        src={glow}
        alt="Glow"
        className="w-auto absolute left-1/2 h-72 top-full transform -translate-x-1/2 -translate-y-1/2"
      /> */}
      <Table
        header={
          <div className="m-5">
            <Text className="text-text-primary text-3xl font-bold">
              New Coins
            </Text>
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

export default NewCoinsRecords;
