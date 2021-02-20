import { Col } from "react-grid";
import { Button } from "@/components/common";
import { StyledPagination } from "./styled-pagination";
const styles = {
  breakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
  containerMaxWidths: { sm: 540, md: 720, lg: 960, xl: 1140 },
  columns: 12,
  gutterWidth: 6,
};
const Pagination = ({ totalItem, pageSize, currentPage, handlePageChange }) => {
  const totalPage = Math.ceil(totalItem / pageSize);
  const handleNext = () => {
    if (handlePageChange) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (handlePageChange) {
      handlePageChange(currentPage - 1);
    }
  };
  return (
    <StyledPagination>
      <Col xs="auto" styles={styles}>
        <Button
          shape="round"
          disabled={currentPage === 1}
          onClick={handlePrevious}
        >
          Previous
        </Button>
      </Col>
      {new Array(totalPage).fill(0).map((_, i) => {
        let type = undefined;
        const page = i + 1;
        if (currentPage === page) {
          type = "primary";
        }

        return (
          <Col xs="auto" key={page} styles={styles}>
            <Button
              shape="circle"
              type={type}
              onClick={() => {
                if (page !== currentPage) {
                  handlePageChange(page);
                }
              }}
            >
              {page}
            </Button>
          </Col>
        );
      })}
      <Col xs="auto" styles={styles}>
        <Button
          shape="round"
          disabled={currentPage === totalPage}
          onClick={handleNext}
        >
          Next
        </Button>
      </Col>
    </StyledPagination>
  );
};

Pagination.defaultProps = {
  totalItem: 1,
  currentPage: 1,
  pageSize: 1,
};

export default Pagination;
