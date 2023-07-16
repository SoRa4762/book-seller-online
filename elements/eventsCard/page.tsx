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
      <div className="h-full w-full cursor-pointer">
        <div className="flex flex-col">
          <Image
            className="rounded-sm shadow-md shadow-slate-400"
            height={50}
            width={500}
            // fill
            alt={alt}
            src={img}
          />
          <div className="flex flex-row justify-between text-xs lg:text-sm font-bold mt-1">
            <p className="text-slate-600">{title}</p>
            <p className="text-green-500">{price}</p>
          </div>
        </div>
        <p className="text-xs lg:text-sm text-slate-500 line-clamp-6 my-2">
          {desc}
        </p>
      </div>
    </>
  );
};

export default Card;
