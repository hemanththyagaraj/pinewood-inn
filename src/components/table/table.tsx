import styled from 'styled-components';
import { TableProps } from 'types/table';
import { EMPTY_TEXT } from 'utils/constants';

const StyledTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse !important;
  width: 100%;
  color: var(--secondary-text-color);
  border-radius: 1rem;
  overflow: hidden;
`;

const StyledHead = styled.thead`
  background-color: var(--primary-green);
`;

const StyledRow = styled.tr`
  /* border: 1px solid red; */
`;

const StyledHeaderCell = styled.th`
  padding: 2rem;
`;

const StyledBody = styled.tbody`
  & tr:nth-child(even) {
    background-color: var(--secondary-bg-color);
  }

  & tr:nth-child(odd) {
    background-color: var(--secondary-bg-color);
  }
`;

const StyledCell = styled.td`
  text-align: center;
  padding: 2rem;
`;

const Table = <T extends { id: string }>(props: TableProps<T>) => {
  const { data, columns } = props;
  return (
    <StyledTable>
      <StyledHead>
        <StyledRow>
          {columns?.map((header) => (
            <StyledHeaderCell>{header?.title ?? EMPTY_TEXT}</StyledHeaderCell>
          ))}
        </StyledRow>
      </StyledHead>
      <StyledBody>
        {data?.map((row, rowIndex) => (
          <StyledRow key={row?.id ?? rowIndex}>
            {columns.map((cell) => {
              const { key, render } = cell;
              const cellData = (row[key as keyof T] as string) ?? EMPTY_TEXT;
              return <StyledCell>{render?.(cellData) ?? cellData}</StyledCell>;
            })}
          </StyledRow>
        ))}
      </StyledBody>
    </StyledTable>
  );
};

export default Table;
