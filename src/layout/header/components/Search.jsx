import React from "react";
import searchIcon from "../../../assets/icons/search-icon.png";

const Search = ({ className }) => {
  return (
    <div className="relative w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <input
        type="text"
        placeholder="Search"
              className={`pl-10 pr-4 py-2 w-full rounded-md text-text-light focus:outline-none ${ className}`}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Search;
