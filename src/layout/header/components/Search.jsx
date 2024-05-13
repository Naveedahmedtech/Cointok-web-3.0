import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../../assets/icons/search-icon.png";
import { useNavigate } from "react-router-dom";
import { useSearchCoinQuery } from "../../../app/features/api";

const Search = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const {
    data: searchResults,
    isFetching,
    isSuccess,
  } = useSearchCoinQuery(searchQuery, { skip: searchQuery.length < 3 });
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (dropdownVisible && ref.current && !ref.current.contains(e.target)) {
        setDropdownVisible(false); // Close the dropdown slowly
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [dropdownVisible]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setDropdownVisible(true);
  };

  const navigateToDetails = (id) => {
    navigate(`/play?id=${id}`);
    setDropdownVisible(false); // Close the dropdown slowly
  };

  const showResults =
    searchQuery.length >= 3 && !isFetching && isSuccess && dropdownVisible;

  return (
    <div
      className="relative w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      ref={ref}
    >
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        className={`pl-10 pr-4 py-2 w-full rounded-md text-text-light focus:outline-none ${className}`}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
      </div>
      {showResults && (
        <ul
          className="absolute w-full bg-secondary border-r-2 border-l-2 border-b-2 rounded-md border-border-secondary shadow-lg max-h-60 overflow-auto transition-opacity duration-500 ease-out"
          style={{ opacity: dropdownVisible ? 1 : 0 }}
        >
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <li
                key={result.id}
                className={`p-2 hover:bg-[#302837] cursor-pointer text-white`}
                onClick={() => navigateToDetails(result.id)}
              >
                {result.coin_name}
              </li>
            ))
          ) : (
            <li className="p-2 text-center text-gray-500">No results found</li>
          )}
        </ul>
      )}
      {isFetching && (
        <ul className="absolute w-full bg-secondary shadow-lg max-h-60 overflow-auto text-white">
          <li className="p-2 text-center">Loading...</li>
        </ul>
      )}
    </div>
  );
};

export default Search;
