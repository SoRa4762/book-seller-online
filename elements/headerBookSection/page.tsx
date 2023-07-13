"use client";
import { FourBooks } from "@/helper/data";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "../searchBar/page";
import { Button } from "@/components/ui/button";
type Props = {};

const HeaderBookSection = (props: Props) => {
  const [bookId, setBookId] = useState<number>(1);

  return (
    <>
      <div className="flex flex-row justify-between items-center w-full px-12 pt-8 lg:pt-14 lg:px-20">
        <h1 className="font-bold text-3xl text-slate-50">📘BOOKS</h1>
        <div className="flex items-center gap-2">
          <SearchBar />
          <Button className="h-8 rounded-xl">
            My Basket <span className="pl-5">🛒</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-row justify-between items-end text-slate-50 pb-8 px-12 lg:pt-14 lg:px-20">
        {/* book desc section */}
        {FourBooks.filter((item) => item.id === bookId).map((book) => (
          <div key={book.id} className="flex flex-col">
            <h1 className="font-bold text-2xl md:text-4xl">{book.title}</h1>
            <h2 className="italic">by {book.writer}</h2>
            <p className="pt-2 text-sm mr-4 lg:mr-20 line-clamp-[8] lg:line-clamp-4">
              {book.desc}
            </p>
          </div>
        ))}

        {/* book to click */}
        {FourBooks.map((book) => (
          <Image
            key={book.id}
            className={`cursor-pointer ml-2 ${
              bookId === book.id && "border-2 border-slate-50 rounded-md"
            }`}
            width={100}
            height={150}
            src={book.img}
            alt={book.title}
            onClick={() => setBookId(book.id)}
          />
        ))}
      </div>
    </>
  );
};

export default HeaderBookSection;
