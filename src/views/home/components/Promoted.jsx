import React, { useState } from "react";
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

const BestRecords = () => {
  const navigate = useNavigate();

  const dataRows = dummyData.map((item, index) => {
    const rank = (index + 1).toString().padStart(2, "0");
    return [
      <tr
        key={index}
        onClick={() => navigate(`play`)}
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
    <div className="my-10 relative">
      <img
        src={glow}
        alt="Glow"
        className="w-auto absolute left-50 bottom-50 z-[-111] transform -translate-x-1/2 -translate-y-1/2"
      />
      <Table
        header={
          <div className="flex items-center flex-wrap m-5 ">
            <Text className="text-text-primary">Promoted</Text>
          </div>
        }
        columns={columns.map((column) => ({
          ...column,
          title: renderColumnTitle(column),
        }))}
        rowComponents={dataRows}
        pageSize={5}
        showPagination={false}
      />
    </div>
  );
};

export default BestRecords;
