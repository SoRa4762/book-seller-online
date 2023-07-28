"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {};

const SignUpInputs = (props: Props) => {
  const [signUpInputs, setSignUpInputs] = useState<{}>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpInputs({
      ...signUpInputs,
      [e.target.name]: e.target.value,
    });
    // console.log([e.target.name, e.target.value]);
  };

  const handleSubmit = () => {
    console.log(signUpInputs);
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
      <Input
        className="flex items-center h-14 rounded-none"
        placeholder="🔒 Confirm Password"
        name="confirmPassword"
        type="password"
        onChange={(e) => {
          onChange(e);
        }}
      />
      <Button
        className="h-14 flex w-full rounded-none text-lg font-normal bg-green-500 hover:bg-green-600"
        onSubmit={handleSubmit}
      >
        SIGN UP
      </Button>
      <Link
        href={"/signin"}
        className="w-full flex justify-end text-sm text-slate-50 font-light cursor-pointer lg:mt-2"
      >
        Already Registered?
      </Link>
      <div className="w-full flex justify-center items-center gap-4 mt-4">
        <p className="text-slate-50 text-base font-normal">Or Sign Up Using:</p>
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

export default SignUpInputs;
