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

  if (!id) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r text-white">
        {/* <img
          src={comingSoonImage}
          alt="Coming Soon"
          className="w-48 h-48 mb-8 animate-bounce"
        /> */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg md:text-2xl text-center max-w-lg text-white">
          We are working hard to bring you this feature. Stay tuned for updates!
        </p>
      </div>
    );
  }
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
