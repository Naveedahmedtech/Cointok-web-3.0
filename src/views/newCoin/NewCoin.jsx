import React from "react";
import NewCoinsRecords from "./components/NewCoinsRecords";
import Partners from "../home/components/Partners";
import NewsLetter from "../home/components/NewsLetter";
import Banner from "../home/components/Banner";
import { useGetNewListingQuery } from "../../app/features/api";

const NewCoin = () => {
  const { data: newListing, refetch } = useGetNewListingQuery();
  const coins = newListing?.coins;


  return (
    <>
      <div className="px-5">
        <Banner />
        <NewCoinsRecords coins={coins} refetch={refetch} />
        <Partners />
      </div>
      <NewsLetter />
    </>
  );
};

export default NewCoin;
