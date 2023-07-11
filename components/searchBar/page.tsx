"use client";

import { Input } from "../ui/input";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div>
      <Input
        // style={{
        //   "@media (max-width: 900px)": {
        //     width: "50vw",
        //   },
        //   // width: "50vw",
        // }}
        className=" h-8 lg:w-[50vw] rounded-xl"
        placeholder="🔍 Search..."
      />
    </div>
  );
};

export default SearchBar;
