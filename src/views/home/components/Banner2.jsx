import React from 'react'
import banner2 from "../../../assets/banners/banner2.png";

const Banner2 = ({ image }) => {
  const displayImage = image ? image : banner2;
  return (
    <div className="my-10">
      <img
        src={displayImage}
        alt="Banner 2"
        className="w-full"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = banner2;
        }}
      />
    </div>
  );
};

export default Banner2
