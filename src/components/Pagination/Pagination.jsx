import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Pagination({ currentPage, totalPages, onPageChange }) {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    if (pages.length > 10) {
        pages = pages.slice(0, 10);
    }


    return (
        <div className="flex justify-center items-center">
            {currentPage > 1 && (
                <button
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-800 mr-1"
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}
            {pages.map((page) => (
                <button
                    key={page}
                    className={`flex items-center justify-center h-10 w-10 rounded-full ${currentPage === page ? "bg-gray-800 text-white" : "bg-gray-200 hover:bg-gray-300"
                        } mr-1`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages && (
                <button
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 ml-1"
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
        </div>
    );
}

export default Pagination;
