import React from "react";
import GetAllProducts from "@/components/getAllProducts";

async function ProductBox({
  name,
  currentPage,
}: {
  name: string;
  currentPage: number;
}) {
  const data = await GetAllProducts(name, currentPage);

  return (
    <div>
      <div className="flex flex-wrap">
        {Object.keys(data.msg).map((items, i) => (
          <div
            key={i}
            className="w-[12rem] h-[auto] border items-center py-[0.3rem] px-[0.5em] mx-[1rem] mb-[1rem]"
          >
            <div className="flex justify-center">
              <img
                key={i}
                className="w-[11rem] h-[11rem]"
                src={data.msg[items].image}
                alt={`${data.msg[items].name} image`}
              />
            </div>
            <h1 key={i} className="font-bold">
              {data.msg[items].name}
            </h1>
            <div className="flex">
              <div key={i} className="bg-[#dad7cd] border">
                <a
                  key={i}
                  className="ml-[0.5rem] duration-[0.25s] hover:underline"
                  href="#"
                >
                  0
                </a>
                <a className="mx-[0.5rem]" href="#">
                  Like
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --------------------------------- Left Right Button ---------------------------------- */}
    </div>
  );
}

export default ProductBox;
