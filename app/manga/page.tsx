// "use client";
//new arrival has been called in the page where client side rendering is already enabled, so no need to use client there, but here we need to.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Pagination from "@/elements/pagination/page";

type Props = {};
const Manga = async ({ searchParams }: any) => {
  let page: number = Number(searchParams.page) ?? 1;

  //fetch data
  const mangaData = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/manga?page=${page}`,
      { cache: "force-cache" }
    );
    if (!response.ok) {
      return notFound();
    }

    return response.json();
  };

  const mangaDetails = await mangaData();

  let currentPage = mangaDetails?.pagination?.current_page;
  let totalPage = mangaDetails?.pagination?.last_visible_page;

  return (
    <div className="px-12 lg:px-20 mb-8">
      <h4 className="flex w-full text-sm lg:text-base font-bold text-slate-600 items-center gap-1 lg:gap-2 mb-2">
        <FontAwesomeIcon icon={faBookOpen} className="h-4" /> All Mangas
      </h4>
      <div className="h-full w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 lg:gap-x-[3.25rem] justify-center content-center">
        {mangaDetails?.data.map((manga: any) => (
          <Link key={manga.mal_id} href={`/manga/${manga.mal_id}`}>
            <div className="h-4/5">
              <Image
                src={manga?.images?.jpg?.large_image_url}
                alt={manga.title}
                width={2000}
                height={2000}
                className="flex w-full h-full shadow-md shadow-slate-400 rounded-sm cursor-pointer"
                //!need to fix the image width & height issues - fixed
              />
              <div className="flex justify-between mt-2 text-xs font-bold lg:text-sm">
                <p className="text-slate-500">{manga.title}</p>
                <p className="text-green-500">{manga.status}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* pagination */}
      {/* <NextPagination totalPages={totalPage} currentPage={currentPage} /> */}
      <Pagination totalPages={totalPage} currentPage={currentPage} />
    </div>
  );
};

export default Manga;
