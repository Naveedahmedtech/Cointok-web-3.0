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
import { useAddVoteMutation } from "../../../app/features/api";
import { toast } from "react-toastify";

const NewCoinsRecords = ({ coins, refetch }) => {
  const totalRecord = coins?.length;
  const navigate = useNavigate();
  const [votingStatus, setVotingStatus] = useState({});
  const [addVoteMutation, { isLoading: isVoting }] = useAddVoteMutation();

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
          refetch();
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

  const dataRows = coins?.map((item, index) => {
    const rank = (index + 1).toString().padStart(2, "0");
    return [
      <tr
        key={index}
        onClick={() => navigate(`/play?id=${item.id}`)}
        className="cursor-pointer hover:opacity-70"
      >
        <td
          className={`text-text-light sticky-column second-sticky-column p-2 px-5`}
        >
          {rank}
        </td>
        <td
          className={`text-text-light sticky-column third-sticky-column p-2 px-5`}
        >
          <IconText
            icon={item?.coin_picture || defaultIcon1}
            text={item?.coin_name || "fgf"}
          />
        </td>
        <td className="text-text-info">{item?.category_name || "Category"}</td>
        <td className="text-text-light">
          <IconText
            icon={item?.chain_icon || "No"}
            text={item?.chain_name || "No"}
          />
        </td>
        <td className="text-text-light">
          <ColoredNumber number={item?.volume24H || "+00"} />
        </td>
        <td className="text-text-light">
          <FormatMarketCap value={item?.marketCap || "00"} />
        </td>
        <td className="text-text-light">
          <FormatMarketCap value={item?.price || "00"} />
        </td>
        <td className="text-text-light">{formatDate(item?.launch_date)}</td>
        <td
          className="text-text-light border-2 border-text-primary flex items-center justify-around rounded-md py-2"
          onClick={(e) => handleVote(e, item.id)}
        >
          <img src={heartFill} alt="" />
          <Text>{item.total_votes || "0"}</Text>
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
