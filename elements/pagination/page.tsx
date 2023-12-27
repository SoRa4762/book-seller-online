import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { pagination } from "@/app/helper/types";

type Props = {};

export default function PaginationComponent({
  totalPages,
  currentPage,
}: pagination) {
  let pageNumbers: number[] = [];
  for (let i = currentPage - 3; i < currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/manga?page=${currentPage - 1}`}
            className={currentPage === 1 && "hidden"}
          />
        </PaginationItem>
        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`/manga?page=${page}`}
              isActive={currentPage === page && true}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={`/manga?page=${currentPage + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
