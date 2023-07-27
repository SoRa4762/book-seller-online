"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = {};

const SignUpInputs = (props: Props) => {
  const [signUpInputs, setSignUpInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpInputs({
      ...signUpInputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Input
        className="flex items-center h-14 rounded-sm"
        placeholder="✉️ Email"
        name="email"
        onChange={(e) => {
          onChange(e);
        }}
      />
      <Input
        className="flex items-center h-14 rounded-sm"
        placeholder="🔒 Password"
        type="password"
        name="password"
        onChange={(e) => {
          onChange(e);
        }}
      />
      <Input
        className="flex items-center h-14 rounded-sm"
        placeholder="🔒 Confirm Password"
        name="confirmPassword"
        type="password"
        onChange={(e) => {
          onChange(e);
        }}
      />
      <Button className="h-14 flex w-full text-lg font-normal bg-green-500 hover:bg-green-600">
        SIGN UP
      </Button>
    </>
  );
};

export default SignUpInputs;
