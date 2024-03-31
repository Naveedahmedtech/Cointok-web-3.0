import React, { useState } from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NavLinks from "./components/NavLinks";
import HamburgerMenu from "../../components/humburger/HamburgerMenu";
import MobileNav from "./components/MobileNav";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import glow from "../../assets/glow/glow.png";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="relative">
        <img
          src={glow}
          alt="Glow"
          className="w-auto absolute left-1/2 top-1/2 z-[-111] transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex justify-between items-center py-4 px-6 z-10">
          <div className="flex items-center gap-20">
            <Logo />
            <div className="hidden lg:block">
              <Search className="bg-secondary" />
            </div>
          </div>
          <div className="hidden lg:flex">
            <NavLinks showMobileMenu={showMobileMenu} />
          </div>
          <div className="lg:hidden">
            <HamburgerMenu
              showMobileMenu={showMobileMenu}
              toggleMobileMenu={() => setShowMobileMenu(!showMobileMenu)}
            />
            <MobileNav isOpen={showMobileMenu} setIsOpen={setShowMobileMenu} />
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
