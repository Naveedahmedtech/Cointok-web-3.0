import React, { useEffect } from "react";
import TopSection from "./components/TopSection";
import DownSection from "./components/DownSection";
import BestRecords from "../home/components/Promoted";
import NewsLetter from "../home/components/NewsLetter";
import {
  useGetCoinDetailsQuery,
  useGetPromotedCoinsQuery,
} from "../../app/features/api";
import { useSearchParams } from "react-router-dom";
import Preloader from "../../components/loader/Preloader";

const Play = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { data: promotedCoins, refetch, status } = useGetPromotedCoinsQuery();
  const { data: coinsDetails, isFetching } = useGetCoinDetailsQuery({ id: id });

  useEffect(() => {
    console.log("Promoted coins updated", promotedCoins);
  }, [promotedCoins]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [id]);
  
  if (isFetching) return <Preloader />; 

  const coins = promotedCoins?.all_coins;
  return (
    <>
      <div className="px-5">
        <TopSection
          details={coinsDetails?.coin}
          refetch={refetch}
          status={status}
        />
        <DownSection />
        <BestRecords coins={coins} />
      </div>
      <NewsLetter />
    </>
  );
};

export default Play;
