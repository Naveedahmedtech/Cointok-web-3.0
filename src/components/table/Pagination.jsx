import React from "react";
import PropTypes from "prop-types";
import rightArrow from "../../assets/icons/right-arrow2.png";
import leftArrow from "../../assets/icons/left-arrow.png";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const delta = 1;

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    pageNumbers.push(i);
  }

  if (currentPage - delta > 1) {
    pageNumbers.unshift("...");
  }

  if (currentPage + delta < totalPages - 1) {
    pageNumbers.push("...");
  }

  pageNumbers.unshift(1);
  if (totalPages !== 1) {
    pageNumbers.push(totalPages);
  }

  return (
    <div className="flex justify-center items-center space-x-1 mt-4">
      <button
        style={{ minWidth: "40px" }} // Fixed width for the arrow button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 disabled:opacity-50 bg-text-primary flex justify-center items-center rounded-md"
      >
        <img src={leftArrow} alt="Previous" className="w-auto h-6" />
      </button>
      <div className="flex gap-1 overflow-x-auto">
        {pageNumbers.map((number, index) =>
          number === "..." ? (
            <span
              key={number + index}
              className="p-2 px-4 text-text-light border-2 border-text-primary rounded-md"
            >
              {number}
            </span>
          ) : (
            <button
              key={number}
              onClick={() => onPageChange(number)}
              className={`p-2 px-4 ${
                currentPage === number
                  ? "bg-text-primary text-text-light border-2 border-text-primary"
                  : "text-text-light border-2 border-text-primary"
              } rounded-md`}
            >
              {number}
            </button>
          )
        )}
      </div>
      <button
        style={{ minWidth: "40px" }} // Fixed width for the arrow button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 disabled:opacity-50 bg-text-primary flex justify-center items-center rounded-md"
      >
        <img src={rightArrow} alt="Next" className="w-auto h-6" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
