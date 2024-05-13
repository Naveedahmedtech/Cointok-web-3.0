import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Pagination from "./Pagination";

const Table = ({
  header,
  columns,
  rowComponents = [],
  pageSize,
  showPagination,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });

  const sortedRows = useMemo(() => {
    let sortableItems = [...rowComponents];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        const index = columns.findIndex((col) => col.key === sortConfig.key);
        const aVal = a.props.children[index]?.props.children;
        const bVal = b.props.children[index]?.props.children;
        if (aVal < bVal) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aVal > bVal) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [rowComponents, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setCurrentPage(1); // Reset to the first page whenever the sort changes
  };

  const totalPages = Math.ceil(sortedRows.length / pageSize);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="bg-secondary rounded-3xl overflow-auto pr-2">
        {header}
        <div className="table-wrapper">
          <table className="w-full">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={column.key}
                    onClick={() => requestSort(column.key)}
                    className={`text-center px-4 text-text-secondary ${
                      index === 0 ? "sticky-column first-sticky" : ""
                    }`}
                  >
                    {column.title}
                    {sortConfig.key === column.key
                      ? sortConfig.direction === "ascending"
                        ? " ↓"
                        : " ↑"
                      : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              {sortedRows
                .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                .map((row, index) => React.cloneElement(row, { key: index }))}
            </tbody>
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

export default Table;
