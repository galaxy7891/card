import React from "react";
import Image from "next/image";
import { PRODUCT } from "./components/data";

const Card = () => {
  return (
    <>
      <div className="bg-blue-900 sticky top-0 z-50">
        <div className="container mx-auto py-5 sm:flex justify-between">
          <h1 className="text-2xl font-bold text-center text-white">
            Card Book
          </h1>
        </div>
      </div>
      <div className="grid w-3/4 gap-6 my-10 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCT.map((product, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-800 to-black border border-gray-600 rounded-2xl gap-4 transition-transform transform hover:scale-105 hover:shadow-2xl z-10"
          >
            <Image
              src={product.src}
              alt={product.alt}
              width={400}
              height={200}
              className="mb-3 w-full h-auto transition-transform group-hover:scale-110 rounded-xl"
            />
            <h5 className="text-lg font-semibold text-white transition-colors group-hover:text-sky-400">
              {product.text}
            </h5>
            <p className="text-sm text-gray-400">{product.description}</p>
            <p className="text-xl font-bold text-white">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
