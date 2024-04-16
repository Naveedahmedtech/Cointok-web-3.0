import React from "react";
import Text from "../../../components/text/Text";
import bgImage from "../../../assets/banners/descriptionbg.png";
import { defaultDescription } from "../../../utils/dummyData";

const Description = ({ description }) => {

  console.log(description);
  return (
    <div
      className="description-container px-5 py-2"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        <Text className="text-2xl text-text-light font-bold mb-2">
          Description
        </Text>
        <Text className="text-text-secondary text-sm leading-loose">
          {description || defaultDescription}
          {/*  */}
        </Text>
      </div>
    </div>
  );
};

export default Description;
