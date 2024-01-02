"use client";

import { seeMore } from "@/helper/types";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const SeeMore = ({ content }: seeMore) => {
  const [expanded, setExpanded] = useState<Boolean>(true);
  const anglesUp = <FontAwesomeIcon icon={faAnglesUp} />;

  return (
    <>
      <p
        // style={{
        //   background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
        // }}
        className={`${
          expanded
            ? "line-clamp-4 bg-gradient-to-t text-gradient from-zinc-900"
            : "line-clamp-none"
        } &&  text-white pt-8 pb-5 font-normal`}
      >
        {content}
      </p>
      <hr className="w-full h-[0.01rem] mx-auto bg-gray-600 border-0 rounded" />

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
            <FontAwesomeIcon className="h-3" icon={faAnglesDown} />
          ) : (
            <FontAwesomeIcon className="h-3" icon={faAnglesUp} />
          )}

          {expanded ? "See More" : "See Less"}
          <FontAwesomeIcon className="h-3" icon={faAnglesDown} />
        </button>
      </div>
    </>
  );
};

export default SeeMore;
