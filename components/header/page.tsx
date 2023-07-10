// import "./styles.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <main
      className="flex h-full"
      style={{
        backgroundImage: `url("/header-bg-fuji.jpg")`,
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // height: "50vh",
      }}
    >
      <div className="" style={{ height: "80vh" }}>
        this is the header
      </div>
    </main>
  );
};

export default Header;
