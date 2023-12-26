import Image from "next/image";
import { notFound } from "next/navigation";
import { paramsType } from "../../helper/types";
import styles from "./page.module.css";
import Link from "next/link";

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
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{mangaData.title}</h1>
          <p className={styles.desc}>{mangaData.desc}</p>
          {/* authors */}
          <div className={styles.author}>
            <Link
              href={"/manga"}
              className=" flex justify-end items-end text-xs lg:text-sm text-slate-500 font-medium cursor-pointer"
            >
              {"<"} Back
            </Link>
            <Image
              src={mangakaDetails.data.images?.jpg?.["image_url"]}
              alt={mangakaDetails.data.name}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{mangakaDetails.data.name}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={mangaData.data.images?.jpg?.["large_image_url"]}
            alt={mangaData["data"]["title"]}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{mangaData.data.synopsis}</p>
      </div>
    </div>
  );
};

export default MangaPage;
