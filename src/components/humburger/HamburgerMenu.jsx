import React from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

const HamburgerMenu = ({ showMobileMenu, toggleMobileMenu }) => {
  return (
    <div className="flex items-center">
      {showMobileMenu ? (
        <FiX
          className="text-white text-xl cursor-pointer"
          onClick={toggleMobileMenu}
        />
      ) : (
        <FiMenu
          className="text-white text-xl cursor-pointer"
          onClick={toggleMobileMenu}
        />
      )}
    </div>
  );
};

export default HamburgerMenu;
