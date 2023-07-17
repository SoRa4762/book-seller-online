import Events from "@/components/events/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import SecondarySection from "@/components/secondarySection/page";
import Navbar from "@/elements/navBar/page";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Events />
      <SecondarySection />
      <Footer />
    </>
  );
}
