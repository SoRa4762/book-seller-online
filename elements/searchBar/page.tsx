"use client";

import { Input } from "../../components/ui/input";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div>
      <Input
        className=" h-8 lg:w-[50vw] rounded-xl"
        placeholder="🔍 Search..."
      />
    </div>
  );
};

export default SearchBar;
