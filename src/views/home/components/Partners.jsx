import React from "react";
import Text from "../../../components/text/Text";
import google from "../../../assets/partners/google.png";
import instagram from "../../../assets/partners/instagram.png";
import linkedin from "../../../assets/partners/linkedin.png";
import epay from "../../../assets/partners/epay.png";
import amazon from "../../../assets/partners/amazon.png";
import microsoft from "../../../assets/partners/microsoft.png";
import glow from "../../../assets/glow/glow2.png";

const images = [google, instagram, linkedin, epay, amazon, microsoft];

const Partners = () => {
  return (
    <div className="my-10 mb-24 px-4 lg:px-10 relative">
      <img
        src={glow}
        alt="Decorative"
        className="absolute left-[-80px] top-[-80px] h-64 z-10"
      />
      <Text className="text-3xl lg:text-4xl font-bold text-text-light text-center my-5">
        Partners
      </Text>
      <div className="flex justify-center items-center flex-wrap gap-5 p-10 bg-secondary relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Partner logo"
            className="w-auto h-6 md:h-10 mx-auto opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          />
        ))}
      </div>
      <img
        src={glow}
        alt="Decorative"
        className="absolute right-[-20px] bottom-[-80px] h-64 z-10"
      />
    </div>
  );
};

export default Partners;
