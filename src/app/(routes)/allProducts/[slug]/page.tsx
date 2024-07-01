import React, { Suspense } from "react";
import ProductBox from "./productBox";
import LeftSide from "./leftSideBar";
import RightSideBar from "./rightSideBar";
import SearchFild from "./searchFild";
import Pagination from "./pagination";
import GetAllProducts from "@/components/getAllProducts";

async function SearchProducts({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    page?: string;
  };
}) {
  const name = searchParams?.name || "";
  const currentPage = Number(searchParams?.page) || 1;

  const data = await GetAllProducts(name, currentPage);

  return (
    <div className="relative">
      <LeftSide />
      <RightSideBar />

      {/* ---------------------------------------- Middle Part --------------------------------------- */}
      <div className="ml-[18.1rem] mr-[12.1rem] p-[1rem] bg-[#e9ecef]">
        <SearchFild />
        <div className="mb-[1rem] text-[1.5rem] font-bold">All Products</div>
        <Suspense key={name + currentPage} fallback={"loading..."}>
          <ProductBox name={name} currentPage={currentPage} />
        </Suspense>
        <Pagination data={data} />
      </div>
    </div>
  );
}

export default SearchProducts;
