import React from "react";
import Logo from "../header/components/Logo";
import { Link } from "react-router-dom";
import instagram from "../../assets/socials/instagram.png";
import twitter from "../../assets/socials/twitter.png";
import fb from "../../assets/socials/fb.png";
import linkiden from "../../assets/socials/linkiden.png";

const links = [
  { id: 1, name: "Categories", path: "/" },
  { id: 2, name: "Shopping", path: "/" },
  { id: 3, name: "Customer care", path: "/" },
  { id: 4, name: "Pages", path: "/" },
];

const images = [fb, linkiden, twitter, instagram];

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="bg-footer py-5">
      <div className="flex flex-col md:flex-row justify-around items-center px-6 mt-5">
        <Logo />
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 text-text-light text-sm mt-5 md:mt-0">
          {links?.map((link) => (
            <Link key={link.id} to={link.path} className="mb-2 md:mb-0">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-3 mt-5 md:mt-0">
          {images.map((image, index) => (
            <Link key={index} to="#">
              <img src={image} alt="Social Links" width={20} />
            </Link>
          ))}
        </div>
      </div>
      <hr className="border-t border-gray-500 mx-6 md:mx-10 mt-5" />{" "}
      {/* Divider */}
      <div className="text-text-light text-center px-6 pt-5">
        &copy; {currentYear} Lift Media. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
