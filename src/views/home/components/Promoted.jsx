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
import { columns } from "../../../utils/dummyData";
import glow from "../../../assets/glow/glow2.png";
import { useNavigate } from "react-router-dom";
import defaultIcon1 from "../../../assets/icons/default-icon1.png";
import { useAddVoteMutation } from "../../../app/features/api";
import { toast } from "react-toastify";
import fire from "../../../assets/icons/fire.png";

const BestRecords = ({ coins = [], refetch }) => {
  const [votingStatus, setVotingStatus] = useState({});
  const navigate = useNavigate();

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

  const dataRows = coins
    ? [...coins] // This creates a shallow copy of the array which can be safely sorted
        .sort((a, b) => b.promoted - a.promoted) // Correct sorting logic for booleans
        .map((item, index) => {
          const rank = (index + 1).toString().padStart(2, "0");
          return [
            <tr
              key={index}
              onClick={() => navigate(`/play?id=${item.id}`)}
              className="cursor-pointer hover:opacity-70 "
            >
              <td
                className={`text-text-light sticky-column second-sticky-column flex justify-center items-center`}
              >
                {item.promoted ? (
                  <img
                    src={fire}
                    alt="Promoted"
                    className="w-8 h-8 mr-2 rounded-full"
                  />
                ) : (
                  rank
                )}
              </td>
              <td
                className={`text-text-light sticky-column third-sticky-column p-2 px-5`}
              >
                <IconText
                  icon={item?.coin_picture || heartFill}
                  text={item?.category_name || "Name"}
                />
              </td>
              <td className="text-text-info">{item?.category || "Category"}</td>
              <td className="text-text-light">
                <IconText
                  icon={item?.chain_icon || heartFill}
                  text={item?.chain_name || "Name"}
                />
              </td>
              <td className="text-text-light">
                <ColoredNumber number={item?.priceUsd24hAgo || 0} />
              </td>
              <td className="text-text-light">
                <FormatMarketCap value={item?.marketCapUsd || 0} />
              </td>
              <td className="text-text-light">
                <FormatMarketCap value={item?.priceUsd || 0} />
              </td>
              <td className="text-text-light">
                {formatDate(item?.launch_date)}
              </td>
              <td
                className="text-text-light border-2 border-text-primary flex items-center justify-around gap-2 rounded-md px-3 py-2"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents navigating when clicking on the vote section
                  handleVote(e, item.id);
                }}
              >
                <img src={heartFill} alt="Vote" />
                {votingStatus[item.id] ? (
                  <Text>Voting..</Text>
                ) : (
                  <Text>{item.total_votes || 0}</Text>
                )}
              </td>
            </tr>,
            <tr key={`spacer-${index}`} className="h-4"></tr>,
          ];
        })
    : [];

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
