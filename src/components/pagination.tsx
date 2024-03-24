import { FC } from "react";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationUi,
} from "./ui/pagination";

type Props = {};
const Pagination: FC<Props> = ({}) => {
  return (
    <PaginationUi className="mt-10">
      <PaginationContent>
        <PaginationItem className="text-primary">
          <PaginationNext href="#" isActive />
        </PaginationItem>
      </PaginationContent>
    </PaginationUi>
  );
};
export default Pagination;
