import React from "react";
import NewCoinsRecords from "./components/NewCoinsRecords";
import Partners from "../home/components/Partners";
import NewsLetter from "../home/components/NewsLetter";
import Banner from "../home/components/Banner";
import { useGetAdvertiseDesktopQuery, useGetNewListingQuery } from "../../app/features/api";

const NewCoin = () => {
  const { data: newListing, refetch } = useGetNewListingQuery();
  const { data: desktop, isLoading } = useGetAdvertiseDesktopQuery();
  const coins = newListing?.coins;
  const banner1 = desktop?.advertise?.image;


  return (
    <>
      <div className="px-5">
        <Banner image={banner1} />
        <NewCoinsRecords coins={coins} refetch={refetch} />
        <Partners />
      </div>
      <NewsLetter />
    </>
  );
};

export default NewCoin;
