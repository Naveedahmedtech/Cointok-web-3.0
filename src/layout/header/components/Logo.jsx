import React from "react";
import logo from "../../../assets/logo/logo2.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link>
      <img src={logo} alt="Company Logo" className="w-auto h-6" />
    </Link>
  );
};

export default Logo;
