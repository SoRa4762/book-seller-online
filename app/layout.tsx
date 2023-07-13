import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const alatsi = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Book Seller Online",
  description: "A book seller app online website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={alatsi.className}>{children}</body>
    </html>
  );
}
