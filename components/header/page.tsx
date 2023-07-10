import Link from "next/link";
import { Button } from "../ui/button";

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
        <div className="flex flex-row justify-between items-center pt-1 pb-1 bg-slate-50 pl-12 pr-12">
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
      </div>
    </main>
  );
};

export default Header;
