import React from "react";
import { Link } from "react-router-dom";
import rightFillIcon from "../../../assets/icons/right-fill-arrow.png";
import simile from "../../../assets/icons/simile-icon.png";
import Badge from "../../../components/badge/Badge";
import Text from "../../../components/text/Text";

const NavLinks = () => {
  return (
    <div className="flex items-center gap-5">
      <Link to="new-coins" className="text-text-light">
        New Coins
      </Link>
      <Link to="play" className="text-text-light text-sm flex items-center">
        <img
          src={rightFillIcon}
          alt="Right Fill Icon"
          className="w-6 h-6 mr-1"
        />
        Play WOTF
      </Link>
      <Link to="add-coins" className="text-text-light text-sm">
        <Badge className="flex justify-center items-center">
          <img src={simile} alt="Simile Icon" className="w-4 h-4 mr-2" />
          Add Coin
        </Badge>
      </Link>
    </div>
  );
};

export default NavLinks;
