"use client";

import { useRouter } from "next/navigation";

type Props = {};

const BackButton = (props: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className=" flex justify-end items-end text-xs lg:text-sm text-slate-500 font-medium cursor-pointer"
    >
      {"<"} Back
    </button>
  );
};

export default BackButton;
