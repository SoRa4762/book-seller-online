import Link from "next/link";
import { Button } from "../ui/button";
import HeaderBookSection from "@/elements/headerBookSection/page";

type Props = {};

const Header = (props: Props) => {
  return (
    <main
      className="flex h-full"
      style={{
        background: `url("/header-bg-2.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-full h-screen">
        {/* navbar section */}
        <div className="flex flex-row justify-between items-center py-2 bg-slate-50 px-12 lg:px-20">
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
          {/* header main section */}
          <HeaderBookSection />
        </div>
      </div>
    </main>
  );
};

export default Header;
