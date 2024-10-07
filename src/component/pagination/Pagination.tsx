import Button from "../icon/Button";
import Icon from "../icon/Icon";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  return (
    <div className="z-40 fixed bottom-7 left-2/4 rounded-lg bg-white shadow-md dark:bg-dark-blue-dark-DME mx-auto -translate-x-2/4">
      <div className="flex items-center p-2 rounded-md gap-[0.15rem] space-x-1">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          className={"flex items-center gap-2 border-r-[1px] border-gray-900/75 p-2 cursor-pointer"}
        >
          <Icon
            icon={faArrowLeft}
            className={"h-4 text-dark-blue-dark-LMT hidden md:block dark:text-white"}
          />
          <span className="text-sm font-medium block dark:text-white">Previous</span>
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`p-[0.30rem] sm:p-[0.55rem] lg:p-3 h-full block font-semibold text-sm cursor-pointer rounded-md transition-all ${
              currentPage === index + 1
                ? "text-blue-700 bg-gray-300"
                : "text-gray-500 dark:text-white"
            }`}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          className={"flex items-center gap-2 border-r-[1px] border-gray-900/75 p-2 cursor-pointer"}
        >
          <span className="text-sm font-medium block dark:text-white">Next</span>
          <Icon
            icon={faArrowRight}
            className={"h-4 text-dark-blue-dark-LMT hidden md:block dark:text-white"}
          />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
