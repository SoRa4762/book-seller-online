import React from "react";
import { pagination } from "@/app/helper/types";
import ReactPaginate from "react-paginate";

function Pagination({ totalPages }: pagination) {
  return (
    <ReactPaginate
      previousLabel={"prev"}
      nextLabel={"next"}
      breakLabel={"..."}
      activeClassName={"active"}
      initialPage={1}
      pageCount={totalPages}
    />
  );
}

export default Pagination;
