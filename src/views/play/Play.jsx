import React, { useEffect } from "react";
import TopSection from "./components/TopSection";
import DownSection from "./components/DownSection";
import BestRecords from "../home/components/Promoted";
import NewsLetter from "../home/components/NewsLetter";
import {
  useGetAddQuery,
  useGetCoinDetailsQuery,
  useGetPromotedCoinsQuery,
} from "../../app/features/api";
import { useSearchParams } from "react-router-dom";

const Play = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const { data: promotedCoins, refetch, status } = useGetPromotedCoinsQuery();
  const { data: addCoins } = useGetAddQuery();
  const { data: coinsDetails } = useGetCoinDetailsQuery({ id: id });

  useEffect(() => {
    console.log("Promoted coins updated", promotedCoins);
  }, [promotedCoins]);



  const coins = promotedCoins?.all_coins;
  return (
    <>
      <div className="px-5">
        <TopSection
          details={coinsDetails?.coin}
          adds={addCoins?.coins}
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
