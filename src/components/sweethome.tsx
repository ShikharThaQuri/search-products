import Link from "next/link";
import React from "react";

function Sweethome() {
  return (
    <div className="fixed bottom-[2rem] right-[3rem] z-50">
      <Link className="bg-[#fb5607] px-[1.5rem] py-[0.6rem] rounded" href="/">
        Home
      </Link>
    </div>
  );
}

export default Sweethome;
