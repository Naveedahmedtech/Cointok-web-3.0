import React, { useState } from "react";
import PropTypes from "prop-types";
import Pagination from "./Pagination";

const Table = ({
  header,
  columns,
  rowComponents,
  pageSize,
  showPagination,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rowComponents.length / pageSize);

  const startRow = (currentPage - 1) * pageSize;
  const endRow = startRow + pageSize;
  const visibleRows = rowComponents.slice(startRow, endRow);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="bg-secondary rounded-lg overflow-auto">
        {header}
        <div className="table-wrapper">
          <table className="w-full">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="text-center px-4 py-2 text-text-secondary"
                  >
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">{visibleRows}</tbody>
          </table>
        </div>
      </div>
      {showPagination && totalPages > 1 && (
        <div className="pagination-container flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  header: PropTypes.node.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.node.isRequired,
    })
  ).isRequired,
  rowComponents: PropTypes.arrayOf(PropTypes.node).isRequired,
  pageSize: PropTypes.number.isRequired,
  showPagination: PropTypes.bool,
};

Table.defaultProps = {
  showPagination: false,
};

export default Table;
