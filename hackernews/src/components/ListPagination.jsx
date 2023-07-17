import React from "react";
import { Link } from "react-router-dom";

export default function ListPagination(prop) {
  const page = prop.page;
  const maxPage = prop.maxPage;
  let prevBlock = "";
  const prevUrl = "/news/" + (Number(page) - 1);
  if (Number(page) == 1) {
    prevBlock = (
      <span className="inline-flex h-8 w-20 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="">Prev</span>
      </span>
    );
  } else {
    prevBlock = (
      <a
        href={prevUrl}
        className="inline-flex h-8 w-20 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="">Prev</span>
      </a>
    );
  }
  let nextBlock = "";
  let nextUrl = "/news/" + (Number(page) + 1);
  if (Number(page) == maxPage) {
    nextBlock = (
      <span className="inline-flex h-8 w-20 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
        <span className="">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  } else {
    nextBlock = (
      <a
        href={nextUrl}
        className="inline-flex h-8 w-20 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <span className="">Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    );
  }

  return (
    <>
      <div className="max-w-4xl mx-auto flex justify-center  gap-3 text-sm">
        {prevBlock}

        <p className="flex-initial w-48 flex justify-center text-base text-gray-800 items-center">
          {page}
          <span className="mx-0.25"> / </span>
          {maxPage}
        </p>
        {nextBlock}
      </div>
    </>
  );
}
