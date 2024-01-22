"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const DropDown = (contents: any) => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <>
      <Button
        className="bg-zinc-600 hover:bg-zinc-700 px-4 py-6 text-lg rounded-sm"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FontAwesomeIcon icon={faEllipsis} />
      </Button>
    </>
  );
};

export default DropDown;
