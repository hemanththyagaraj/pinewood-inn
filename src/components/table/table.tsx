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

// const StyledCell = styled.td`
//   text-align: center;
//   padding: 2rem;
// `;

const Table = (props: TableProps) => {
  const { data, columns } = props;
  console.log(data);
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
        {/* {data?.map((row) => (
          <StyledRow>
            {columns.map((cell) => (
              <StyledCell>{row[cell.key]}</StyledCell>
            ))}
          </StyledRow>
        ))} */}
      </StyledBody>
    </StyledTable>
  );
};

export default Table;
