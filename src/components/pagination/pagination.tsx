import Button, { ButtonProps } from 'components/button/button';
import styled from 'styled-components';

export interface PaginationProps {
  currentPage?: number;
  total?: number;
  pageSize?: number;
  onChange?: (page: number) => void;
  disabled?: boolean;
}

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled(Button)<ButtonProps>`
  min-width: 3.5rem;
  transition: background-color 0s;

  &:hover:enabled {
    background-color: var(--primary-green);
    color: var(--white);
  }
`;

const StyledNav = styled.nav<PaginationProps>`
  filter: ${(props) => (props.disabled ? 'grayscale(60%)' : 'grayscale(0%)')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
`;

const Pagination = (props: PaginationProps) => {
  const {
    currentPage = 1,
    total = 1,
    pageSize = 10,
    onChange,
    disabled = false,
  } = props;

  const pageNumberLimit = 5;
  const isPreviousDisabled = currentPage === 1;
  const totalPages = Math.ceil(total / pageSize);
  const isNextDisabled = currentPage === totalPages;

  const pageNumberStartIndex =
    currentPage > pageNumberLimit ? currentPage - pageNumberLimit : 0;
  const pageNumberEndIndex =
    currentPage > pageNumberLimit ? currentPage : pageNumberLimit;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    pageNumberStartIndex,
    pageNumberEndIndex,
  );

  return (
    <StyledNav
      disabled={disabled}
      role="navigation"
      aria-label="Pagination"
      tabIndex={0}
    >
      <StyledList role="list">
        <li role="listitem">
          <StyledButton
            disabled={isPreviousDisabled}
            aria-disabled={`${isPreviousDisabled}`}
            variant="text"
            aria-label="Previous Page"
            onClick={() => onChange?.(currentPage - 1)}
          >
            Prev
          </StyledButton>
        </li>
        {pages.map((page) => {
          return (
            <li role="listitem" key={page}>
              <StyledButton
                variant={currentPage === page ? 'filled' : 'text'}
                aria-label={`Page ${page}`}
                onClick={() => onChange?.(page)}
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
            onClick={() => onChange?.(currentPage + 1)}
          >
            Next
          </StyledButton>
        </li>
      </StyledList>
    </StyledNav>
  );
};

export default Pagination;
