import "animate.css";

type Props = {};

const ComingSoon = (props: Props) => {
  return (
    <div className="h-[80vh] w-full flex justify-center items-center font-bold text-lg">
      <div className="animate__animated animate__fadeInLeft">
        Coming Soon...
      </div>
    </div>
  );
};

export default ComingSoon;
