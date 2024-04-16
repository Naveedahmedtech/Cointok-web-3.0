import React from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Promoted from "./components/Promoted";
import PromoteCoinButton from "../../components/button/PromoteCoinButton";
import BestRecords from "./components/BestRecords";
import Partners from "./components/Partners";
import NewsLetter from "./components/NewsLetter";
import Banner2 from "./components/Banner2";
import { useGetAdvertiseQuery, useGetNewListingQuery, useGetPresaleListingQuery, useGetPromotedCoinsQuery } from "../../app/features/api";

const Home = () => {
  const { data, isLoading, isError } = useGetAdvertiseQuery();
  const { data: newListing } = useGetNewListingQuery();
  const { data: presaleListing } = useGetPresaleListingQuery();
  const { data: promotedCoins } = useGetPromotedCoinsQuery();

  const coins = promotedCoins?.all_coins;

  const banner1 = data?.advertise?.[0]?.image;
  const banner2 = data?.advertise?.[1]?.image;
  return (
    <>
      <div className="px-5">
        <Banner image={banner1} />
        <Banner2 image={banner2} />
        <Cards newListing={newListing?.coins} presaleListing={presaleListing?.coins} />
        <Promoted coins={coins} />
        <PromoteCoinButton />
        <BestRecords />
        <Partners />
      </div>
      <NewsLetter />
    </>
  );
};

export default Home;
