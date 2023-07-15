import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const Events = (props: Props) => {
  return (
    <div className="flex w-full h-full px-12 lg:px-20">
      <h4 className="flex w-full items-center gap-1 lg:gap-2 mb-2 mt-4">
        <FontAwesomeIcon icon={faGraduationCap} /> Events
      </h4>
    </div>
  );
};

export default Events;
