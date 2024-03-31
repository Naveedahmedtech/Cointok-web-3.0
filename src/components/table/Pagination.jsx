import React from "react";
import PropTypes from "prop-types";
import rightArrow from "../../assets/icons/right-arrow2.png";
import leftArrow from "../../assets/icons/left-arrow.png";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const delta = 2; // Determines the range of pages around the current page

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    pageNumbers.push(i);
  }

  if (currentPage - delta > 2) {
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
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`p-2 disabled:opacity-50 ${
          currentPage === 1 ? "bg-text-primary" : "bg-text-primary"
        } flex justify-center items-center rounded-md`}
      >
        <img src={leftArrow} alt="Previous" className="w-auto h-6" />
      </button>
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <span
            key={number + index}
            className="p-2 text-text-light border-2 border-text-primary rounded-md"
          >
            {number}
          </span>
        ) : (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`p-2 ${
              currentPage === number
                ? "bg-text-primary text-text-light border-2 border-text-primary"
                : "text-text-light border-2 border-text-primary"
            } rounded`}
          >
            {number}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`p-2 disabled:opacity-50 ${
          currentPage === totalPages ? "bg-text-primary" : "bg-text-primary"
        } flex justify-center items-center  rounded-md`}
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
