import React from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Promoted from "./components/Promoted";
import PromoteCoinButton from "../../components/button/PromoteCoinButton";
import BestRecords from "./components/BestRecords";
import Partners from "./components/Partners";
import NewsLetter from "./components/NewsLetter";
import Banner2 from "./components/Banner2";
import {
  useGetAdvertiseDesktopQuery,
  useGetAdvertiseMobileQuery,
  useGetNewListingQuery,
  useGetPresaleListingQuery,
  useGetPromotedCoinsQuery,
  useGetTopTrendingQuery,
} from "../../app/features/api";
import ConfirmationModal from "../../components/modals/ConfirmationModal";

const Home = () => {
  const { data: promotedCoins, refetch: promotedRefetch } =
    useGetPromotedCoinsQuery();
  const { data: newListing } = useGetNewListingQuery();
  const { data: presaleListing } = useGetPresaleListingQuery();
  const { data: topTrending } = useGetTopTrendingQuery();
  const { data: desktop } = useGetAdvertiseDesktopQuery();
  const { data: mobile } = useGetAdvertiseMobileQuery();


  const coins = promotedCoins?.all_coins;

  const banner1 = desktop?.advertise?.image;
  const banner2 = mobile?.advertise?.image;
  return (
    <>
      <div className="px-5">
        <Banner image={banner1} />
        <Banner2 image={banner2} />
        <ConfirmationModal />
        <Cards
          newListing={newListing?.coins}
          topTrending={topTrending?.coins}
          presaleListing={presaleListing?.coins}
        />
        <Promoted coins={coins} refetch={promotedRefetch} />
        <PromoteCoinButton />
        <BestRecords />
        <Partners />
      </div>
      <NewsLetter />
    </>
  );
};

export default Home;
