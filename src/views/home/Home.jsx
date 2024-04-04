import React from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Promoted from "./components/Promoted";
import PromoteCoinButton from "../../components/button/PromoteCoinButton";
import BestRecords from "./components/BestRecords";
import Partners from "./components/Partners";
import NewsLetter from "./components/NewsLetter";
import Banner2 from "./components/Banner2";

const Home = () => {
  return (
    <>
      <div className="px-5">
        <Banner />
        <Banner2 />
        <Cards />
        <Promoted />
        <PromoteCoinButton />
        <BestRecords />
        <Partners />
      </div>
      <NewsLetter />
    </>
  );
};

export default Home;
