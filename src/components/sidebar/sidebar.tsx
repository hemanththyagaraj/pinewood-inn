import styled from 'styled-components';

const StyledSidebar = styled.aside`
  background-color: aqua;
  grid-row: 1/-1;
`;

const Sidebar = () => {
  return <StyledSidebar>Sidebar</StyledSidebar>;
};

export default Sidebar;
