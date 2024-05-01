import React from "react";
import Text from "../../../components/text/Text";
import bgImage from "../../../assets/banners/descriptionbg.png";
import { defaultDescription } from "../../../utils/dummyData";

const Description = ({ description, coinImage }) => {
  const backgroundImage = coinImage ? coinImage : bgImage;
  return (
    <div
      className="description-container px-5 py-2 mt-2"
      style={{
        position: "relative", // Ensures the positioning context for the pseudo-element
        padding: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px"
      }}
    >
      {/* Background as watermark */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.2, // Adjust the opacity for watermark effect
          // zIndex: -1, // Ensures the background is behind the content
        }}
      ></div>

      {/* Content */}
      <div className="content px-5">
        <Text className="text-2xl text-text-light font-bold mb-2">
          Description
        </Text>
        <Text className="text-text-secondary text-sm leading-loose">
          {description || defaultDescription}
        </Text>
      </div>
    </div>
  );
};

export default Description;
