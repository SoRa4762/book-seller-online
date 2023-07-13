import ComingSoon from "@/elements/comingSoon/page";
import NewArrival from "@/elements/newArrival/page";

type Props = { navId: number };

const BooksSection = ({ navId }: Props) => {
  const commingSoon: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {navId === 1 && <NewArrival />}
      {commingSoon.includes(navId) && <ComingSoon />}
    </>
  );
};

export default BooksSection;
