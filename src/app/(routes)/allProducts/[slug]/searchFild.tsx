"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function SearchFild() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("name", term);
    } else {
      params.delete("name");
    }
    replace(`${pathname}?${params.toString()} `);
  }, 300);

  return (
    <div className="mb-[2rem]">
      <h1 className="font-bold mb-[0.5rem] text-[1.2rem]">Search Product</h1>
      <input
        className="text-[21px] px-[1rem] py-[0.5rem] w-full rounded outline-none"
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("name")?.toString()}
      />
    </div>
  );
}

export default SearchFild;
