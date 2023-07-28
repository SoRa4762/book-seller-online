import SignInInputs from "@/elements/signInInputs/page";
import Image from "next/image";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <div
      className="h-screen m-0 p-0 flex flex-col justify-center items-center gap-8"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/authImg3.jpg)`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <h1 className="font-light text-4xl text-slate-50">Sign In</h1>
      <div
        className="h-[75vh] w-[60vh] flex flex-col justify-center items-center gap-4 px-10"
        style={{
          boxShadow: `rgba(17, 17, 26, 0.5) 0px 8px 32px, rgba(17, 17, 26, 0.5) 0px 16px 48px, rgba(17, 17, 26, 0.5) 0px 32px 112px`,
        }}
      >
        <Image
          src="/logo.jfif"
          alt="Logo"
          height={2000}
          width={2000}
          className="h-20 w-20 rounded-full"
        />
        <SignInInputs />
      </div>
      <p className="text-xl font-light text-slate-50">
        &copy; Sora Book Store. All rights reserved | Created using{" "}
        <span className="font-medium">Next.js</span>
      </p>
    </div>
  );
};

export default SignIn;
