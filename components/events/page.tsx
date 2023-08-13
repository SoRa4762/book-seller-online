import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Card from "@/elements/eventsCard/page";
import { EventsData } from "@/helper/data";
type Props = {};

const Events = (props: Props) => {
  return (
    <div className="flex w-full h-full flex-col px-12 lg:px-20">
      <h4 className="flex w-full text-sm lg:text-base font-bold text-slate-600 items-center gap-1 lg:gap-2 mb-2">
        <FontAwesomeIcon icon={faGraduationCap} /> Events
      </h4>
      {/* card */}
      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {EventsData.map((event) => (
          <Card
            key={event.id}
            id={event.id}
            img={event.img}
            alt={event.alt}
            title={event.title}
            desc={event.desc}
            price={event.price}
          />
        ))}
      </div>
      <p className="h-[9vh] pb-8 flex justify-end items-center text-xs lg:text-sm text-slate-500 font-medium cursor-pointer">
        More {">"}
      </p>
    </div>
  );
};

export default Events;
