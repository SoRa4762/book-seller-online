"use client";

import { seeMore } from "@/helper/types";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { DoubleArrowDownIcon, DoubleArrowUpIcon } from "@radix-ui/react-icons";

const SeeMore = ({ content }: seeMore) => {
  const [expanded, setExpanded] = useState<Boolean>(true);

  return (
    <>
      {/* Contents */}
      <div className="relative">
        <p
          // style={{
          //   background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
          // }}
          className={`${
            expanded ? "line-clamp-6" : "line-clamp-none"
          } &&  text-white pt-8 pb-5 font-normal`}
        >
          {content}
        </p>
        <div
          className={`absolute h-16 w-full bottom-0 ${
            expanded
              ? "opacity-100 bg-gradient-to-t from-zinc-900"
              : "h-4 w-full opacity-0"
          }`}
        ></div>
      </div>

      <hr className="w-full h-[0.01rem] mx-auto bg-gray-600 border-0 rounded" />

      {/* see more or less button */}
      <div
        className={`h-[0.15rem] w-full flex justify-center items-start ${
          expanded ? "bg-orange-500" : "bg-transparent pt-8"
        }`}
      >
        <button
          className={`text-white lowercase font-normal h-4 w-[7.5rem] px-2 text-[0.8rem] flex justify-between items-center rounded-b-md ${
            expanded ? "bg-orange-500" : "bg-zinc-700"
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <DoubleArrowDownIcon className="h-[0.8rem]" />
          ) : (
            <DoubleArrowUpIcon className="h-[0.8rem]" />
          )}
          {expanded ? "See More" : "See Less"}
          <DoubleArrowDownIcon className="h-[0.8rem]" />
        </button>
      </div>
    </>
  );
};

export default SeeMore;
