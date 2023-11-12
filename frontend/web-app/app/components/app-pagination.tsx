"use client";

import { Pagination } from "flowbite-react";
import React from "react";

interface Props {
    currentPage: number;
    pageCount: number;
    onPageChange: (value: number) => void;
}

const AppPagination: React.FC<Props> = ({ currentPage, pageCount, onPageChange }) => {
    return (
        <Pagination
            currentPage={currentPage}
            onPageChange={e => onPageChange(e)}
            totalPages={pageCount}
            layout="pagination"
            showIcons
            className="text-blue-500 mb-5"
        />
    );
};

export default AppPagination;