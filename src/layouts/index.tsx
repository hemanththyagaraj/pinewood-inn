import Navbar from 'components/navbar/navbar';
import Sidebar from 'components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

const StyledMain = styled.main`
  background-color: royalblue;
`;

const MainLayout = () => {
  return (
    <StyledMainLayout>
      <Sidebar />
      <Navbar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledMainLayout>
  );
};

export default MainLayout;
