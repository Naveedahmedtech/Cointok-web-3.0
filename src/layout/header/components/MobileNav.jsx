import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import searchIcon from "../../../assets/icons/search-icon.png";
import rightFillIcon from "../../../assets/icons/right-fill-arrow.png";
import simile from "../../../assets/icons/simile-icon.png";
import Badge from "../../../components/badge/Badge";
import Search from "./Search";
import useOutsideClick from "../../../hooks/useOutsideClick";

const MobileNav = ({ isOpen, setIsOpen }) => {
  const navRef = useRef();
  const handleClose = () => setIsOpen(false);

  useOutsideClick(navRef, () => {
    if (isOpen) handleClose();
  });

  return (
    <div
      ref={navRef}
      className={`fixed top-0 right-0 h-full px-2 bg-secondary text-white z-50 w-3/4 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-xl`}
    >
      <button onClick={handleClose} className="p-4">
        <FiX className="text-white text-2xl" />
      </button>
      <div className="flex flex-col items-center mt-10">
        <Search className="bg-primary" />
        <div className="flex flex-col items-center gap-6 mt-5">
          <Link
            to="new-coins"
            onClick={handleClose} // Close the navbar on click
            className="hover:text-gray-300 transition-colors duration-200"
          >
            New Coins
          </Link>
          <Link
            to="play"
            onClick={handleClose} // Close the navbar on click
            className="text-sm flex items-center gap-2 hover:text-gray-300 transition-colors duration-200"
          >
            <img
              src={rightFillIcon}
              alt="Right Fill Icon"
              className="w-5 h-5"
            />
            Play WOTF
          </Link>
          <Link
            to="add-coins"
            onClick={handleClose} // Close the navbar on click
            className="text-sm flex items-center gap-2 hover:text-gray-300 transition-colors duration-200"
          >
            <Badge className="flex items-center justify-center gap-2">
              <img src={simile} alt="Simile Icon" className="w-5 h-5" />
              Add Coin
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
