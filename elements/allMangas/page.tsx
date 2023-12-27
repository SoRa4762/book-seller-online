import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
// import { NewArrivals } from "@/helper/data";
import Image from "next/image";

import useSWR from "swr";
import ComingSoon from "../comingSoon/page";
import Link from "next/link";

type Props = {};

//fetch data
const fetcher = async () => {
  const response = await fetch("https://api.jikan.moe/v4/manga");
  const mangaData = await response.json();
  console.log(mangaData);
  return mangaData;
};

const AllMangas = (props: Props) => {
  const { data, error } = useSWR("mangaData", fetcher);

  if (error)
    return (
      <>
        <p className="text-red-600 font-bold">Error! Loading the Data</p>
      </>
    );
  if (!data) return <>{ComingSoon}</>;
  console.log(data);

  return (
    <div className="px-12 lg:px-20 mb-8">
      <h4 className="flex w-full text-sm lg:text-base font-bold text-slate-600 items-center gap-1 lg:gap-2 mb-2">
        <FontAwesomeIcon icon={faBookOpen} /> All Mangas
      </h4>
      <div className="h-full w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 lg:gap-x-[3.25rem] justify-center content-center">
        {data.data.map((manga: any) => (
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
      <Link
        href={"/manga?page=1"}
        className=" flex justify-end items-end text-xs lg:text-sm text-slate-500 font-medium cursor-pointer"
      >
        More {">"}
      </Link>
    </div>
  );
};

export default AllMangas;
