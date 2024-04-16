import React from "react";
import Text from "../../../components/text/Text";
import rightIcon from "../../../assets/icons/right-arrow.png";
import defaultIcon1 from "../../../assets/icons/default-icon1.png";
import { Link } from "react-router-dom";

const Cards = ({ newListing, presaleListing }) => {
  const newListingData = [
    {
      id: 1,
      title: "Some title",
      subtitle: "Some subtitle",
      duration: "4 hour ago",
      icon: defaultIcon1,
    },
    {
      id: 1,
      title: "Some title",
      subtitle: "Some subtitle",
      duration: "4 hour ago",
      icon: defaultIcon1,
    },
  ];

  const popularData = [
    {
      id: 1,
      title: "Popular title",
      subtitle: "Popular subtitle",
      duration: "1 day ago",
      icon: defaultIcon1,
    },
    {
      id: 1,
      title: "Some title",
      subtitle: "Some subtitle",
      duration: "4 hour ago",
      icon: defaultIcon1,
    },
  ];

  const featuredData = [
    {
      id: 1,
      title: "Featured title",
      subtitle: "Featured subtitle",
      duration: "2 days ago",
      icon: defaultIcon1,
    },
    {
      id: 1,
      title: "Top Trending",
      subtitle: "Some subtitle",
      duration: "4 hour ago",
      icon: defaultIcon1,
    },
  ];

  return (
    <div className="flex  justify-between flex-wrap gap-10 my-10">
      <CardComponent title="New Listing" data={newListing} />
      <CardComponent title="Top Trending" data={presaleListing} />
      <CardComponent title="Upcoming Presale" data={featuredData} />
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
      {data?.slice(0, 3)?.map((item) => (
        <Link
          to="play"
          key={item.id}
          className="flex justify-between items-center border-b-2 border-footer p-2 py-5"
        >
          <div className="flex items-center gap-2">
            <img
              src={item?.coin_picture}
              alt=""
              className="w-auto h-12 mr-0 md:mr-5"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = item.icon;
              }}
            />
            <div>
              <Text className="text-text-light">
                {item?.coin_name || "N/A"}
              </Text>
              <Text className="text-text-secondary">
                {item?.subtitle || "Sub"}
              </Text>
            </div>
          </div>
          <div className="flex">
            <Text className="text-text-secondary mr-0 md:mr-5">
              {item?.duration || "4 hours ago"}
            </Text>
            <img src={rightIcon} alt="" className="w-auto h-6" />
          </div>
        </Link>
      ))}
    </div>
  );
};
