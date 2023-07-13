import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const NewArrival = (props: Props) => {
  return (
    <div className="px-12 lg:px-20">
      <h4 className="flex w-full items-center gap-1 lg:gap-2">
        <FontAwesomeIcon icon={faBookOpen} /> New arrivals
      </h4>
    </div>
  );
};

export default NewArrival;
