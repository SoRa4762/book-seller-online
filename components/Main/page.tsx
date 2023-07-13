import BooksSection from "@/components/booksSection/page";
import Navbar from "@/elements/navBar/page";
import React from "react";

type Props = {};

const MainSection = (props: Props) => {
  return (
    <main className="h-screen bg-slate-50">
      <div className="h-[61vh]">
        <Navbar />
      </div>
      <div className="h-[39vh]">Events</div>
    </main>
  );
};

export default MainSection;
