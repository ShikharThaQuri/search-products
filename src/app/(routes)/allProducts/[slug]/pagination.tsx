"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const leftRightBox =
  "mx-[1rem] border border-[0.15rem] px-[0.9rem] py-[0.5rem] font-bold  cursor-pointer";

function Pagination({ data }: { data: any }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  let totalItems = data.nbHits;
  let totalPage = Math.ceil(totalItems / 3);

  const { replace } = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const leftClickFunction = (e: any) => {
    let currnPage = currentPage;

    if (currentPage > 1) {
      currnPage = currentPage - 1;
    }

    const path = createPageURL(currnPage);

    replace(path);
  };

  const rightClickFunction = (e: any) => {
    let currnPage = currentPage;

    if (currentPage < totalPage) {
      currnPage = currentPage + 1;
    }

    const path = createPageURL(currnPage);

    replace(path);
  };

  return (
    <div className="flex justify-center mt-[1.5rem]">
      {currentPage <= 1 ? (
        <p className={`${leftRightBox} border-[#d6ccc2] text-[#d6ccc2]`}>
          Left
        </p>
      ) : (
        <p
          className={`${leftRightBox} border-[#2f3e46]`}
          onClick={leftClickFunction}
        >
          Left
        </p>
      )}

      {currentPage >= totalPage ? (
        <p className={`${leftRightBox} border-[#d6ccc2] text-[#d6ccc2]`}>
          Right
        </p>
      ) : (
        <p
          className={`${leftRightBox} border-[#2f3e46]`}
          onClick={rightClickFunction}
        >
          Right
        </p>
      )}
    </div>
  );
}

export default Pagination;
