import Pagination from 'components/pagination/pagination';
import Skeleton from 'components/skeleton/skeleton';
import styled from 'styled-components';
import { TableProps } from 'types/table';
import { EMPTY_TEXT } from 'utils/constants';

const StyledTable = styled.table`
  table-layout: auto;
  border-collapse: collapse !important;
  width: 100%;
  color: var(--secondary-text-color);
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledHead = styled.thead`
  background-color: var(--primary-green);
  border-radius: 2px;
`;

const StyledRow = styled.tr``;

const StyledHeaderCell = styled.th`
  padding: 2rem;
  color: var(--white);
`;

const StyledBody = styled.tbody`
  background: var(--secondary-bg-color);

  & tr:not(:last-child) {
    border-bottom: 2px solid var(--bg-color);
  }
`;

const StyledCell = styled.td`
  text-align: center;
  padding: 2rem;
  font-size: 1.8rem;
`;

const StyledTbodyCell = styled.td`
  padding: 0;
`;

const StyledFooter = styled.tfoot``;

const Table = <T extends { id: string }>(props: TableProps<T>) => {
  const { data, columns, isLoading } = props;
  const columnCount = columns.length;

  const DEFAULT_LOADING_ROWS_COUNT = 5;

  const rows: T[] = isLoading
    ? Array.from({ length: DEFAULT_LOADING_ROWS_COUNT })
    : data;

  return (
    <StyledTable>
      <StyledHead>
        <StyledRow>
          {columns?.map((header) => (
            <StyledHeaderCell key={header.key}>
              {header?.title ?? EMPTY_TEXT}
            </StyledHeaderCell>
          ))}
        </StyledRow>
      </StyledHead>
      <StyledBody>
        {rows?.map((row, rowIndex) => {
          if (isLoading) {
            return (
              <StyledRow key={rowIndex}>
                {columns.map(() => (
                  <StyledCell>
                    <Skeleton />
                  </StyledCell>
                ))}
              </StyledRow>
            );
          }
          return (
            <StyledRow key={row?.id ?? rowIndex}>
              {columns.map((cell) => {
                const { key, render } = cell;
                const cellData = (row[key as keyof T] as string) ?? EMPTY_TEXT;
                return (
                  <StyledCell key={key}>
                    {render?.(cellData) ?? cellData}
                  </StyledCell>
                );
              })}
            </StyledRow>
          );
        })}
      </StyledBody>
      <StyledFooter>
        <StyledRow>
          <StyledTbodyCell colSpan={columnCount}>
            <Pagination position="right" />
          </StyledTbodyCell>
        </StyledRow>
      </StyledFooter>
    </StyledTable>
  );
};

export default Table;
