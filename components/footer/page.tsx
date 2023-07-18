import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className="h-screen w-full"
      style={{
        background: `url("/footerBG1.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-screen w-full backdrop-blur-[1px] flex justify-center items-center">
        <div className="flex flex-row gap-4 h-[50vh] md:h-[55vh] w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[42vw] rounded-sm bg-slate-50">
          <div className="flex flex-1 justify-center items-center h-full w-full">
            <div className="h-[85%] flex flex-col justify-between cursor-pointer">
              <Image
                src={"/jojoCover.jpg"}
                alt="JoJoCover"
                height={1000}
                width={2000}
                className="h-[90%] w-full rounded-sm shadow-md shadow-slate-400"
              />
              <div className="flex justify-between text-xs lg:text-sm font-bold">
                <p className="text-slate-500">JoJo's Bizzare Adventure</p>
                <p className="text-green-500">$109</p>
              </div>
            </div>
          </div>
          <div className="flex flex-[1.2] flex-col h-full w-full justify-center items-start text-slate-700">
            <div className="h-[85%] w-[90%] flex flex-col justify-between">
              <div>
                <p className="font-bold text-md cursor-pointer">
                  Jojo's Bizzare Adventure
                </p>
                <p className="text-slate-400 text-md italic mt-[0.35rem]">
                  by{" "}
                  <span className="underline cursor-pointer">
                    Hirohiko Araki
                  </span>
                </p>
                <p className="line-clamp-[9] mt-4">
                  "JoJo's Bizarre Adventure" is an exciting and colorful anime
                  and manga series that tells the story of several generations
                  of a heroic family called the Joestars. Each part of the
                  series focuses on a different JoJo, a member of the Joestar
                  family, and their epic battles against various enemies. At the
                  heart of "JoJo's Bizarre Adventure" are the Stands, which are
                  special powers that the characters possess. Stands are like
                  magical companions that fight alongside their users and have
                  unique abilities. They can be super strong, control elements
                  like fire or water, or have other amazing powers. Throughout
                  the series, the JoJos and their friends face all sorts of
                  strange and powerful villains. They engage in thrilling
                  battles using their Stands, unleashing incredible attacks and
                  strategies to defeat their enemies. These battles are often
                  intense and full of action. But "JoJo's Bizarre Adventure"
                  isn't just about fights and superpowers. It's also a story
                  about family, friendship, and the enduring spirit of good
                  triumphing over evil. The JoJos are brave and determined, and
                  they support and protect each other throughout their journeys.
                  The series is known for its unique art style, with characters
                  sporting fabulous and fashionable outfits, along with dramatic
                  poses that have become iconic. It also features a mix of
                  humor, suspense, and surprises that keep viewers and readers
                  entertained. So, in a nutshell, "JoJo's Bizarre Adventure" is
                  an action-packed series about a heroic family, their
                  incredible powers called Stands, and their thrilling battles
                  against villains. It's a story of courage, friendship, and the
                  fight between good and evil, all wrapped in a colorful and
                  exciting package.
                </p>
              </div>
              <div>
                <p className="flex justify-end cursor-pointer font-medium">
                  More {">"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
