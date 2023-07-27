import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page of the book seller online",
};

const SigninLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default SigninLayout;
