import React, { useState } from "react";
import Table from "../../../components/table/Table";
import Text from "../../../components/text/Text";
import glow from "../../../assets/glow/glow2.png";
import { useAddVoteMutation } from "../../../app/features/api";
import { toast } from "react-toastify";

const Promoted = ({ coins = [], refetch }) => {
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
        coins={coins}
        pageSize={5}
        showPagination={false}
        handleVote={handleVote}
        votingStatus={votingStatus}
      />
    </div>
  );
};

export default Promoted;
