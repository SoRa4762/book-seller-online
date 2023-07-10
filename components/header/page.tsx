import Link from "next/link";
import { Button } from "../ui/button";
import SearchBar from "../searchBar/page";

type Props = {};

const Header = (props: Props) => {
  return (
    <main
      className="flex h-full"
      style={{
        backgroundImage: `url("/header-bg-1.jpg")`,
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
        <div className="flex flex-col justify-between items-center w-full">
          {/* search section */}
          <div className="flex flex-row justify-between items-center w-full pl-12 pr-12 pt-8 lg:pt-16 lg:pl-20 lg:pr-20">
            <h1 className="font-bold text-3xl text-slate-50">📘BOOKS</h1>
            <div className="flex items-center gap-2">
              <SearchBar />
              <Button className="h-8 rounded-xl">
                My Basket <span className="pl-5">🛒</span>
              </Button>
            </div>
          </div>

          {/* book description */}
        </div>
      </div>
    </main>
  );
};

export default Header;
