import Image from "next/image";
import { notFound } from "next/navigation";
import { paramsType } from "../../../helper/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import BackButton from "@/components/backButton/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faFlag,
  faArrowUpFromBracket,
  faStar,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import formatNumbers from "@/helper/formatNumbers";
import SeeMore from "@/elements/seeMore/page";

type Props = {};

const getMangaData = async (mangaId: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/manga/${mangaId}/full`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    return notFound();
  }

  return response.json(); // we dont need to return it inside a variable cuz we use async await below in the main function anwyay, it will fix it. Coldplay - Fix You in the BG
};

export const generateMetadata = async ({ params }: paramsType) => {
  const manga = await getMangaData(params.mangaId);
  return {
    title: manga.title,
    description: manga.synopsis,
  };
};

//get mangaka
const getMangakaDetails = async (mangakaId: number) => {
  const mangaka = await fetch(`https://api.jikan.moe/v4/people/${mangakaId}`, {
    cache: "force-cache",
  });

  if (!mangaka.ok) {
    notFound();
  }

  return await mangaka.json();
};

const MangaPage = async ({ params }: paramsType) => {
  const mangaData = await getMangaData(params.mangaId);
  const mangakaDetails = await getMangakaDetails(
    mangaData.data.authors[0].mal_id
  );

  return (
    <>
      <div
        className="h-[100vh] w-full fixed"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${mangaData?.data?.images?.webp?.large_image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      ></div>
      <div className="absolute top-0 h-16 w-full px-16 flex items-center">
        <Link href="/" className="text-4xl font-bold text-white">
          Sora
        </Link>
      </div>
      <div className="absolute h-full w-full top-16 flex flex-col items-center justify-center">
        {/* first div */}
        <div className="h-80 w-full px-12 bg-transparent">
          {/* image and titles */}
          <div className="flex h-full w-full gap-8">
            <Image
              className="absolute w-52 rounded-md cursor-pointer"
              src={mangaData?.data?.images?.jpg?.large_image_url}
              alt={mangaData?.data?.title}
              height={2000}
              width={2000}
            />
            <div className="flex flex-col items-start justify-between text-white py-3 pl-56">
              <div>
                <h1 className="font-extrabold text-7xl">
                  {mangaData?.data?.title_english}
                </h1>
                <h2 className="text-xl">{mangaData?.data?.title_japanese}</h2>
              </div>
              <div className="flex gap-2">
                {mangaData?.data?.authors.map((author: any) => (
                  <p key={author.mal_id} className="text-xl">
                    {author.name + ","}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* second div */}
        <div className=" h-full w-full px-12 bg-zinc-900 bg-opacity-[0.95]">
          {/* top infos */}
          <div className="flex flex-col pl-56 pt-4">
            {/* buttons */}
            <div className="h-full w-full flex items-center gap-2">
              <Button className="bg-orange-500 hover:bg-orange-700 px-16 py-6 text-lg rounded-sm">
                Add to Library
              </Button>
              <Button className="bg-zinc-600 hover:bg-zinc-700 px-4 py-6 text-lg rounded-sm">
                <FontAwesomeIcon icon={faBookOpen} className="h-6" />
              </Button>
              <Button className="bg-zinc-600 hover:bg-zinc-700 px-4 py-6 text-lg rounded-sm">
                <FontAwesomeIcon icon={faFlag} className="h-6" />
              </Button>
              <Button className="bg-zinc-600 hover:bg-zinc-700 px-4 py-6 text-lg rounded-sm">
                <FontAwesomeIcon icon={faArrowUpFromBracket} className="h-6" />
              </Button>
            </div>

            {/* genres and publication & status */}
            <div className="h-full w-full flex flex-col gap-2 pt-4">
              {/* genre */}
              <div className="h-full w-full flex flex-wrap gap-1">
                {mangaData?.data?.genres?.map((genre: any) => (
                  <Link
                    className="text-xs font-medium bg-zinc-700 h-4 px-[0.4rem] hover:bg-transparent rounded text-white"
                    key={genre?.mal_id}
                    href={genre?.url}
                  >
                    {genre.name}
                  </Link>
                ))}
              </div>

              {/* publication */}
              <div className="flex text-sm font-medium text-white gap-1 items-center">
                <p
                  className={`h-2 w-2 flex rounded-full ${
                    mangaData?.data?.status === "Publishing"
                      ? "bg-green-400"
                      : "bg-blue-400"
                  }`}
                ></p>
                <p className="uppercase">
                  {"Publication: " +
                    mangaData?.data?.published?.prop?.from?.year +
                    ","}
                </p>
                <p className="uppercase">{mangaData?.data?.status}</p>
              </div>
            </div>

            {/* ratings, favourites and members*/}
            <div className="h-full w-full flex pt-5 gap-2 items-center font-normal">
              <p className="text-orange-500 flex items-center h-full gap-1">
                <FontAwesomeIcon className="h-4" icon={faStar} />
                {mangaData?.data?.score}
              </p>
              <p className="text-red-400 flex items-center h-full gap-1">
                <FontAwesomeIcon className="h-4" icon={faHeart} />
                {formatNumbers(mangaData?.data?.favorites)}
              </p>
              <p className="text-blue-400 flex items-center h-full gap-1">
                <FontAwesomeIcon className="h-4" icon={faUser} />
                {formatNumbers(mangaData?.data?.members)}
              </p>
            </div>
          </div>
          {/* Synopsis */}
          <SeeMore content={mangaData?.data?.synopsis} />
        </div>
      </div>
    </>
  );
};

export default MangaPage;
