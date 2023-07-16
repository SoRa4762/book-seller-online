import React from "react";

type Props = {};

const SecondarySection = (props: Props) => {
  return (
    <>
      {/* manga section */}
      <div
        className="h-[50vh] w-full grid grid-rows-2 text-white"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url("/darkMangaBG.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-[50vh] w-full flex justify-center items-center backdrop-blur-[2px]  px-12 lg:px-20">
          manga section
        </div>
      </div>

      {/* author section */}
      <div
        className="h-[50vh] w-full grid grid-rows-2 text-white"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/authorBG.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-[50vh] w-full flex justify-center items-center backdrop-blur-[2px] px-12 lg:px-20">
          author section
        </div>
      </div>
    </>
  );
};

export default SecondarySection;
