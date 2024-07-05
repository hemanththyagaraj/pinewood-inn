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
  border-radius: 2px;
`;

const StyledRow = styled.tr`
  &:hover {
    background: var(--secondary-bg-color);
  }
`;

const StyledHeaderCell = styled.th`
  padding: 2rem;
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
`;

const Table = <T extends { id: string }>(props: TableProps<T>) => {
  const { data, columns } = props;
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
        {data?.map((row, rowIndex) => (
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
        ))}
      </StyledBody>
    </StyledTable>
  );
};

export default Table;
