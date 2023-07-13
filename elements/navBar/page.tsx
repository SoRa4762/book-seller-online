"use client";

import BooksSection from "@/components/booksSection/page";
import { NavElements } from "@/helper/data";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [navId, setNavId] = useState(1);
  return (
    <>
      {/* navbar */}
      <div className="h-[6vh] w-full text-xs text-slate-500 font-medium lg:text-sm flex gap-2 lg:gap-6 justify-center items-center">
        {NavElements.slice(0, 2).map((nav) => (
          <div
            className={`cursor-pointer hover:border-b-2 hover:border-b-red-400 ${
              navId === nav.id && "border-b-2 border-b-red-400"
            }`}
            onClick={() => setNavId(nav.id)}
            key={nav.id}
          >
            {nav.title}
          </div>
        ))}

        <p className="text-slate-200">|</p>

        {NavElements.slice(2, 6).map((nav) => (
          <div
            className={`cursor-pointer hover:border-b-2 hover:border-b-red-400 ${
              navId === nav.id && "border-b-2 border-b-red-400"
            }`}
            onClick={() => setNavId(nav.id)}
            key={nav.id}
          >
            {nav.title}
          </div>
        ))}

        <p className="text-slate-200">|</p>

        {NavElements.slice(6).map((nav) => (
          <div
            className={`cursor-pointer hover:border-b-2 hover:border-b-red-400 ${
              navId === nav.id && "border-b-2 border-b-red-400"
            }`}
            onClick={() => setNavId(nav.id)}
            key={nav.id}
          >
            {nav.title}
          </div>
        ))}
      </div>

      {/* books section */}
      <div className="h-[55vh]">
        <BooksSection navId={navId} />
      </div>
    </>
  );
};

export default Navbar;
