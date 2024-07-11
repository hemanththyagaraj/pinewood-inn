import Button, { ButtonProps } from 'components/button/button';
import styled from 'styled-components';
import { PaginationI } from 'types/pagination';

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled(Button)<ButtonProps>`
  &:hover:enabled {
    background-color: var(--primary-green);
    color: var(--white);
  }
`;

const Pagination = (props: PaginationI) => {
  const { currentPage = 1, total = 12, pageSize = 10 } = props;

  // const pageNumberLimit = 5;
  const isPreviousDisabled = currentPage === 1;
  const totalPages = Math.ceil(total / pageSize);
  const isNextDisabled = currentPage === totalPages;

  const pages = [...Array(totalPages)];

  return (
    <nav role="navigation" aria-label="Pagination" tabIndex={0}>
      <StyledList role="list">
        <li role="listitem">
          <StyledButton
            disabled={isPreviousDisabled}
            aria-disabled={`${isPreviousDisabled}`}
            variant="text"
            aria-label="Previous Page"
          >
            Prev
          </StyledButton>
        </li>
        {pages.map((_, index) => {
          const page = index + 1;
          return (
            <li role="listitem" key={page}>
              <StyledButton
                variant={currentPage === page ? 'filled' : 'text'}
                aria-label={`Page ${page}`}
              >
                {page}
              </StyledButton>
            </li>
          );
        })}
        <li role="listitem">
          <StyledButton
            disabled={isNextDisabled}
            aria-disabled={`${isNextDisabled}`}
            variant="text"
            aria-label="Next Page"
          >
            Next
          </StyledButton>
        </li>
      </StyledList>
    </nav>
  );
};

export default Pagination;
