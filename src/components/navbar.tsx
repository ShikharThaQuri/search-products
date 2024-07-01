import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between bg-[#80b918] py-[1rem]">
      <div>
        <Link
          className="bg-[white] px-[0.3rem] py-[0.6rem] ml-[1rem]"
          href="/allProducts"
        >
          All Products
        </Link>
        <Link
          className="bg-[white] px-[0.3rem] py-[0.6rem] ml-[1rem]"
          href="/dashboard"
        >
          Dashboard
        </Link>
      </div>
      <div>right side</div>
    </div>
  );
}

export default Navbar;
