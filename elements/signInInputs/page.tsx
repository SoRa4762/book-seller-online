"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {};

const SignInInputs = (props: Props) => {
  const [signInInputs, setSignInInputs] = useState<{}>({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInInputs({
      ...signInInputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Input
        className="flex items-center h-14 rounded-none mt-10"
        placeholder="✉️ Email"
        name="email"
        onChange={(e) => {
          onChange(e);
        }}
      />
      <Input
        className="flex items-center h-14 rounded-none"
        placeholder="🔒 Password"
        type="password"
        name="password"
        onChange={(e) => {
          onChange(e);
        }}
      />
      <Button
        className="h-14 flex w-full rounded-none text-lg font-normal bg-green-500 hover:bg-green-600"
        // onSubmit={handleSubmit}
      >
        SIGN IN
      </Button>
      <div className="flex w-full justify-between lg:mt-2">
        <p className="text-sm text-slate-50 font-light cursor-pointer">
          Forgot Password?
        </p>
        <Link
          href={"/signup"}
          className="text-sm text-slate-50 font-light cursor-pointer"
        >
          New User? Sign Up
        </Link>
      </div>
      <div className="w-full flex justify-center items-center gap-4 mt-4">
        <p className="text-slate-50 text-base font-normal">Or Sign In Using:</p>
        <div className="flex gap-4">
          <Image
            src="/fb.webp"
            alt="FB Logo"
            width={2000}
            height={2000}
            className="h-10 w-10 rounded-full cursor-pointer"
          />
          <Image
            src="/X.png"
            alt="X Logo"
            width={2000}
            height={2000}
            className="h-10 w-10 rounded-full cursor-pointer"
          />
          <Image
            src="/google.png"
            alt="Google Logo"
            width={2000}
            height={2000}
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default SignInInputs;
