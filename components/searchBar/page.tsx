"use client";

import { Input } from "../ui/input";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div>
      <Input className="h-8 lg:w-96 rounded-xl" placeholder="🔍 Search..." />
    </div>
  );
};

export default SearchBar;
