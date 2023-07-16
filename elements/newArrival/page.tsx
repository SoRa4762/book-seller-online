import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { NewArrivals } from "@/helper/data";
import Image from "next/image";

type Props = {};

const NewArrival = (props: Props) => {
  return (
    <div className="px-12 lg:px-20 mb-8">
      <h4 className="flex w-full text-sm lg:text-base font-bold text-slate-600 items-center gap-1 lg:gap-2 mb-2">
        <FontAwesomeIcon icon={faBookOpen} /> New arrivals
      </h4>
      <div className="h-full w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-[3.25rem] justify-center content-center">
        {NewArrivals.map((newBook) => (
          <div key={newBook.id}>
            <Image
              src={newBook.img}
              alt={newBook.title}
              width={500}
              height={500}
              className="flex w-full h-full shadow-md shadow-slate-400 rounded-sm cursor-pointer"
              //!need to fix the image width & height issues - fixed
            />
            <div className="flex justify-between mt-2 text-xs lg:text-sm">
              <p className="text-slate-500">{newBook.title}</p>
              <p className="text-green-500">{newBook.price}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="h-[10.5vh] flex justify-end items-end text-xs lg:text-sm text-slate-500 font-medium cursor-pointer">More ></p>
    </div>
  );
};

export default NewArrival;
