"use client";

import Router, { withRouter } from "next/router";
// import  {withRouter} from "next/navigation";

type Props = {};

const BackButton = (props: Props) => {
  return (
    <button
      onClick={() => Router.back()}
      className=" flex justify-end items-end text-xs lg:text-sm text-slate-500 font-medium cursor-pointer"
    >
      {"<"} Back
    </button>
  );
};

export default withRouter(BackButton);
