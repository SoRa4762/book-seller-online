"use client";

import { useState } from "react";
import { Input } from "../../components/ui/input";

type Props = {};

const SearchBar = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  console.log(searchQuery);

  return (
    <div>
      <Input
        className=" h-8 lg:w-[50vw] rounded-xl"
        placeholder="🔍 Search..."
        value={searchQuery}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default SearchBar;
