// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return pageNumbers.map((number, index) => (
      <a
        key={index}
        href="#"
        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
          number === currentPage
            ? 'bg-indigo-600 text-white'
            : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
        } focus:z-20 focus:outline-offset-0`}
        onClick={() => onPageChange(number)}
      >
        {number}
      </a>
    ));
  };

  return (
    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
      <a
        href="#"
        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="sr-only">Previous</span>
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      </a>

      {renderPageNumbers()}

      <a
        href="#"
        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="sr-only">Next</span>
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10l-3.94-3.71a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </nav>
  );
};

export default Pagination;
