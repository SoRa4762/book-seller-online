import Link from "next/link";
import { Button } from "../ui/button";
import SearchBar from "../searchBar/page";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <main
      className="flex h-full"
      style={{
        background: `url("/header-bg-5.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col w-full" style={{ height: "80vh" }}>
        {/* navbar section */}
        <div className="flex flex-row justify-between items-center pt-2 pb-2 bg-slate-50 pl-12 pr-12 lg:pl-20 lg:pr-20">
          <div className="flex flex-row">
            <Link href="/signin">Sign In</Link>
            <p className="pl-4 pr-4"> | </p>
            <Link href="/signup">Sign Up</Link>
          </div>

          <div className="flex gap-1">
            <Button className="p-2 h-7">📔 Publish</Button>
            <Button className="p-2 h-7">📖 Reader</Button>
          </div>
        </div>

        {/* header body section */}
        <div className="flex flex-col justify-between items-center w-full h-full">
          {/* search section */}
          <div className="flex flex-row justify-between items-center w-full pl-12 pr-12 pt-8 lg:pt-14 lg:pl-20 lg:pr-20">
            <h1 className="font-bold text-3xl text-slate-50">📘BOOKS</h1>
            <div className="flex items-center gap-2">
              <SearchBar />
              <Button className="h-8 rounded-xl">
                My Basket <span className="pl-5">🛒</span>
              </Button>
            </div>
          </div>

          {/* book description */}
          <div className="flex flex-row justify-between items-end text-slate-50 pb-8 pl-12 pr-12 lg:pt-14 lg:pl-20 lg:pr-20">
            {/* book desc section */}
            <div className="flex flex-col">
              <h1 className="font-extrabold text-2xl md:text-4xl">
                In Search of Lost Time
              </h1>
              <h2 className="italic">by Marcel Proust</h2>
              <p className="pt-2 text-sm">
                Swann's Way, the first part of A la recherche de temps perdu,
                Marcel Proust's seven-part cycle, was published in 1913. In it,
                Proust introduces the themes that run through the entire work.
                The narrator recalls his childhood, aided by the famous
                madeleine; and describes M. Swann's passion for Odette. The work
                is incomparable. Edmund Wilson said "[Proust] has supplied for
                the first time in literature an equivalent in the full scale for
                the new theory of modern physics."
              </p>
            </div>

            {/* book to click */}
            <Image
              className="ml-2"
              width={120}
              height={120}
              src="/SWMP.jfif"
              alt="book image"
            />
            <Image
              className="ml-2"
              width={120}
              height={120}
              src="/SWMP.jfif"
              alt="book image"
            />
            <Image
              className="ml-2"
              width={120}
              height={120}
              src="/SWMP.jfif"
              alt="book image"
            />
            <Image
              className="ml-2"
              width={120}
              height={120}
              src="/SWMP.jfif"
              alt="book image"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
