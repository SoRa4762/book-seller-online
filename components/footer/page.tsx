type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className="h-screen w-full"
      style={{
        background: `url("/footerbg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-screen w-full backdrop-blur-[1px] flex justify-center items-center">
        <div className="flex flex-row h-[60vh] w-[70vw] md:w-[60vw] lg:w-[50vw] rounded-sm bg-slate-50">
          <div className="flex flex-1 border border-red-900 h-full w-full"></div>
          <div className="flex flex-[1.2] border h-full w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
