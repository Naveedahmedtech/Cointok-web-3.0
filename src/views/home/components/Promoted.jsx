import React from "react";
import Table from "../../../components/table/Table";
import {
  ColoredNumber,
  FormatMarketCap,
  IconText,
  formatDate,
} from "./utils/promoted";
import heartFill from "../../../assets/icons/heart-fill.png";
import Text from "../../../components/text/Text";
import { columns } from "../../../utils/dummyData";
import glow from "../../../assets/glow/glow2.png";
import { useNavigate } from "react-router-dom";
import defaultIcon1 from "../../../assets/icons/default-icon1.png";
import { useAddVoteMutation } from "../../../app/features/api";
import { toast } from "react-toastify";

const BestRecords = ({ coins = [], refetch }) => {
  const navigate = useNavigate();

  const [addVoteMutation] = useAddVoteMutation();

  const handleVote = (e, id) => {
    e.preventDefault(); // Prevents any default action like submitting a form
    e.stopPropagation(); // Stops the event from propagating up the DOM tree
    addVoteMutation({ id })
      .unwrap()
      .then((data) => {
        console.log("Vote added successfully:", data);
        refetch();
      })
      .catch((error) => {
        console.error("Failed to add vote:", error);
        toast.error(error?.data?.message || "Error voting", {
          position: "top-center",
        });
      });
  };

  const dataRows =
    coins?.length > 0 &&
    coins?.map((item, index) => {
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
          <td className="text-text-info">
            {item?.category_name || "Category"}
          </td>
          <td className="text-text-light">
            <IconText
              icon={item?.blockchain?.icon || "No"}
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
            className="text-text-light border-2 border-text-primary flex items-center justify-around rounded-md py-2 "
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
    <th
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
        column.className || ""
      }`}
    >
      {column.title}
      {column.icon && <span className="text-text-primary"> ↓</span>}
    </th>
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
            <Text className="text-text-primary text-2xl font-bold">
              Promoted
            </Text>
          </div>
        }
        columns={columns.map((column) => ({
          ...column,
          title: renderColumnTitle(column),
        }))}
        rowComponents={dataRows || []}
        pageSize={5}
        showPagination={false}
      />
    </div>
  );
};

export default BestRecords;
