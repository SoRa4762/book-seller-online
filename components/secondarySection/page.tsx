import Image from "next/image";
import { KentaroMangas, darkManga } from "@/helper/data";

type Props = {};

const SecondarySection = (props: Props) => {
  return (
    <>
      {/* manga section */}
      <div
        className="h-[60vh] w-full text-white"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url("/darkMangaBG.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-[60vh] w-full flex flex-col justify-center lg:justify-end backdrop-blur-[2px] px-12 lg:px-20">
          <div className="flex flex-row">
            <div className="flex flex-1">
              {/* dark manga */}
              <p className="font-bold text-xl">
                Mangas of the
                <br />
                <span className="text-6xl">Dark</span>
                <br />
                <span className="font-normal text-xs lg:text-sm line-clamp-[8] mt-2">
                  The dark manga genre is characterized by its themes,
                  atmosphere, and storytelling elements that delve into the
                  realms of horror, psychological torment, and often feature
                  morally ambiguous or disturbing narratives. It explores the
                  depths of human nature, often emphasizing the darker aspects
                  of life and the human psyche. Dark manga typically presents
                  gritty and unsettling storylines, pushing the boundaries of
                  what is considered acceptable or normal.
                </span>
              </p>
            </div>
            {/* dark manga showcase */}
            <div className="flex flex-[1.5] justify-end gap-4 lg:gap-12">
              {darkManga.map((dmanga) => (
                <div
                  key={dmanga.id}
                  className="flex flex-col h-[31vh] w-[13vw] gap-1"
                >
                  <Image
                    className="h-full w-full object-cover object-top rounded-sm cursor-pointer"
                    height={1000}
                    width={2000}
                    src={dmanga.img}
                    alt={dmanga.alt}
                  />
                  <div className="flex justify-between w-full font-bold text-xs lg:text-sm">
                    <p className="">{dmanga.title}</p>
                    <p className="text-green-500"> {dmanga.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row">
            <p className="h-[6vh] lg:h-[9vh] mb-12 w-full flex justify-end items-end text-xs lg:text-sm font-medium cursor-pointer">
              More {">"}
            </p>
          </div>
        </div>
      </div>

      {/* author section */}
      <div
        className="h-[60vh] w-full text-white"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/authorBG.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-[60vh] w-full flex flex-col justify-end backdrop-blur-[2px] px-12 lg:px-20">
          {/* author's profile */}
          <div className="flex flex-row">
            <div className="flex flex-1 flex-col">
              <div className="flex items-center gap-2">
                <Image
                  src={"/KentaroMiura.png"}
                  alt="Kentaro Miura"
                  height={50}
                  width={100}
                  className="h-7 w-7 rounded-full"
                />
                <p className="font-bold text-2xl">Kentaro Miura</p>
              </div>

              <p className="text-[0.65rem] lg:text-xs mt-1 lg:mt-2 cursor-pointer">
                Author Profile {">"}
              </p>
              <p className="line-clamp-6 mt-2 lg:mt-4 text-xs lg:text-sm">
                Kentaro Miura (1966-2021) was a Japanese manga artist and writer
                best known for creating the highly acclaimed dark fantasy series
                "Berserk." Born on July 11, 1966, in Chiba, Japan, Miura
                developed a passion for drawing at a young age and pursued a
                career in manga. Miura debuted as a professional manga artist at
                the age of 10 when his work won a prize in a manga contest. He
                continued to hone his skills throughout his teenage years, and
                in 1988, he published the first chapter of "Berserk" in the
                magazine "Monthly Animal House." The series quickly gained
                popularity for its unique blend of dark themes, intricate
                storytelling, and detailed artwork. Miura's magnum opus,
                "Berserk," follows the story of Guts, a skilled swordsman with a
                tragic past who embarks on a quest for revenge against demonic
                entities known as Apostles. The series explores themes of fate,
                power, humanity, and the struggle between good and evil.
                "Berserk" became known for its complex characters, atmospheric
                world-building, and intense, often violent, storytelling.
                Miura's artistic talent was widely praised throughout his
                career. His detailed and meticulously crafted artwork showcased
                his ability to portray both the grandeur and the darkness of his
                fictional world. His attention to detail, especially in the
                depiction of battle scenes and grotesque creatures, set him
                apart as a masterful illustrator. Unfortunately, Kentaro Miura
                passed away on May 6, 2021, leaving "Berserk" unfinished. His
                sudden death deeply saddened fans around the world, and his
                contributions to the manga industry and the dark fantasy genre
                were widely acknowledged. Miura's impact on the medium can still
                be felt through the enduring legacy of "Berserk" and the
                profound influence it had on subsequent generations of manga
                artists and readers.
              </p>
            </div>
            {/* author's work */}
            <div className="flex flex-1 justify-end gap-4 lg:gap-12">
              {KentaroMangas.map((km) => (
                <div
                  key={km.id}
                  className="flex flex-col h-[31vh] w-[15vw] lg:w-[13vw] gap-1"
                >
                  <Image
                    className="h-full w-full object-cover object-top rounded-sm cursor-pointer"
                    height={1000}
                    width={2000}
                    src={km.img}
                    alt={km.alt}
                  />
                  <div className="flex justify-between w-full font-bold text-xs lg:text-sm">
                    <p className="">{km.title}</p>
                    <p className="text-green-500"> {km.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row">
            <p className="h-[6vh] lg:h-[9vh] mb-12 w-full flex justify-end items-center lg:items-end text-xs lg:text-sm font-medium cursor-pointer">
              More {">"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondarySection;
