import React from "react";
import TopSection from "./components/TopSection";
import DownSection from "./components/DownSection";
import BestRecords from "../home/components/Promoted";
import NewsLetter from "../home/components/NewsLetter";
import {
  useGetCoinDetailsQuery,
  useGetPromotedCoinsQuery,
} from "../../app/features/api";
import { useSearchParams } from "react-router-dom";

const Play = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log(id);
  const { data: promotedCoins } = useGetPromotedCoinsQuery();
  const { data: coinsDetails } = useGetCoinDetailsQuery({ id: id });

  console.log("Coin", coinsDetails);

  const coins = promotedCoins?.all_coins;
  return (
    <>
      <div className="px-5">
        <TopSection details={coinsDetails?.coin} />
        <DownSection />
        <BestRecords coins={coins} />
      </div>
      <NewsLetter />
    </>
  );
};

export default Play;
