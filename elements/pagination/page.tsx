import { pagination } from "@/helper/types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export default function Pagination({ totalPages, currentPage }: pagination) {
  let pageNumbers: number[] = [];
  // let pageNumbersDesc: number[] = [];

  //for front page
  for (let i = currentPage - 3; i < currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pageNumbers.push(i);
  }

  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center gap-2">
        <div className="hover:bg-gray-200 rounded-sm px-4 py-[0.4rem] cursor-pointer">
          <Link
            href={`/manga?page=${currentPage - 1}`}
            className={`w-full flex items-center gap-2 ${
              currentPage === 1 && "hidden"
            }
            `}
          >
            <FontAwesomeIcon className="h-3" icon={faLessThan} /> Previous
          </Link>
        </div>
        {pageNumbers.map((page) => (
          <div
            className={`hover:bg-gray-200 rounded-sm px-[0.8rem] py-1 cursor-pointer ${
              currentPage === page && "border-gray-500 border rounded-sm"
            }`}
            key={page}
          >
            <Link href={`/manga?page=${page}`}>{page}</Link>
          </div>
        ))}

        {/* attempting to setup both paginations */}
        {/* <div className="px-4 py-2">
          <p className="w-full flex items-center gap-2 select-none">...</p>
        </div>

        {pageNumbersDesc.map((lastPages) => (
          <div
            className={`hover:bg-gray-200 rounded-sm px-[0.6rem] py-1 cursor-pointer
            ${
              currentPage === lastPages && "border-gray-500 border rounded-sm"
            }`}
            key={lastPages}
          >
            <Link href={`/manga?page=${lastPages}`}>{lastPages}</Link>
          </div>
        ))} */}

        <div className="hover:bg-gray-200 rounded-sm px-4 py-[0.4rem]">
          <Link
            className={`w-full flex items-center cursor-pointer gap-2 ${
              currentPage === totalPages && "hidden"
            }`}
            href={`/manga?page=${currentPage + 1}`}
          >
            Next <FontAwesomeIcon className="h-3" icon={faGreaterThan} />
          </Link>
        </div>
      </div>
    </div>
  );
}
