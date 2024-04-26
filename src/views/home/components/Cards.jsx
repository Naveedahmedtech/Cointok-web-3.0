import React from "react";
import Text from "../../../components/text/Text";
import rightIcon from "../../../assets/icons/right-arrow.png";
import defaultIcon1 from "../../../assets/icons/default-icon1.png";
import { Link } from "react-router-dom";
import { featuredData } from "../../../utils/dummyData";

const Cards = ({ newListing, topTrending, presaleListing }) => {
  return (
    <div className="flex  justify-between flex-wrap gap-10 my-10">
      <CardComponent title="New Listing" data={newListing} />
      <CardComponent title="Top Trending" data={topTrending} />
      <CardComponent title="Upcoming Presale" data={presaleListing} />
    </div>
  );
};

export default Cards;

const CardComponent = ({ title, data }) => {
  return (
    <div className="bg-secondary border-2 p-2 border-footer flex-grow">
      <Text className="text-text-primary text-xl  border-b-2 border-footer py-2">
        {title}
      </Text>
      {data?.length > 0 ? (
        data?.slice(0, 3)?.map((item) => (
          <Link
            to="play"
            key={item.coin_name}
            className="flex justify-between items-center border-b-2 border-footer p-2 py-5"
          >
            <div className="flex items-center gap-2">
              <img
                src={item?.coin_picture}
                alt=""
                className="w-12 h-12 mr-0 md:mr-5 rounded-full"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = defaultIcon1;
                }}
              />
              <div>
                <Text className="text-text-light">
                  {item?.coin_name || "N/A"}
                </Text>
                <Text className="text-text-secondary">
                  {item?.coin_symbol || "Sub"}
                </Text>
              </div>
            </div>
            <div className="flex">
              <Text className="text-text-secondary mr-0 md:mr-5">
                {item?.date || "4 hours ago"}
              </Text>
              <img src={rightIcon} alt="" className="w-auto h-6" />
            </div>
          </Link>
        ))
      ) : (
        <div className="text-center text-white">No Records Available</div>
      )}
    </div>
  );
};
