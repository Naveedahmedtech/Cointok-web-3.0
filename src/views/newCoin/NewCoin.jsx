import React from "react";
import NewCoinsRecords from "./components/NewCoinsRecords";
import Partners from "../home/components/Partners";
import NewsLetter from "../home/components/NewsLetter";
import Banner from "../home/components/Banner";

const NewCoin = () => {
  return (
    <>
      <div className="px-5">
        <Banner />
        <NewCoinsRecords />
        <Partners />
      </div>
      <NewsLetter />
    </>
  );
};

export default NewCoin;
