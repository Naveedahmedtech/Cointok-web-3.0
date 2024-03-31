// Badge.js
import React from "react";

const Badge = ({ children, className }) => {
  return (
    <span className={` bg-[#343434] px-4 py-2 rounded-full ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
