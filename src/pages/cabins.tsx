import CreateCabin from 'features/cabins/create-cabin';
import CabinsTable from 'features/cabins/cabins-table';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Cabins = () => {
  return (
    <Container>
      <CreateCabin />
      <CabinsTable />
    </Container>
  );
};

export default Cabins;
