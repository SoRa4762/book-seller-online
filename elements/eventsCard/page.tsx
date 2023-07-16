import Image from "next/image";
import React from "react";

type Props = {
  id?: number;
  title: string;
  desc: string;
  price: string;
  img: string;
  alt: string;
};

const Card = ({ id, title, desc, price, img, alt }: Props) => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="flex flex-col h-48">
          <Image
            className="rounded-sm shadow-md h-full w-full object-cover shadow-slate-400"
            height={1000}
            width={2000}
            // fill
            alt={alt}
            src={img}
          />
          <div className="flex flex-row justify-between text-xs lg:text-sm font-bold mt-1">
            <p className="text-slate-600">{title}</p>
            <p className="text-green-500">{price}</p>
          </div>
        </div>
        <p className="text-xs lg:text-sm text-slate-500 line-clamp-6 mt-8 mb-4">
          {desc}
        </p>
      </div>
    </>
  );
};

export default Card;
