import ComingSoon from "@/elements/comingSoon/page";
import NewArrival from "@/elements/newArrival/page";

type Props = { navId: number };

const BooksSection = ({ navId }: Props) => {
  const commingSoon: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {/* {navId === 2 &&
        "Hello Prajwal, this is me Sonam A.K.A Suneo Uncle, IDK how or why you set my name as such, but yeah, GGs for you!!!"} */}
      {navId === 1 && <NewArrival />}
      {navId === 4 && <NewArrival />}
      {navId === 7 && <NewArrival />}
      {commingSoon.includes(navId) && <ComingSoon />}
    </>
  );
};

export default BooksSection;
