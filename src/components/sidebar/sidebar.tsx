import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  grid-row: 1/-1;
  padding: 4rem 2rem;
  background-color: var(--secondary-bg-color);
  box-shadow: 2px 0px 10px 2px rgb(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  width: 40%;
  margin: 0 auto;
  display: block;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--primary-text-color);
  text-decoration: none;
  padding: 2rem;
  display: block;
  font-size: 2rem;
  border-radius: 1rem;

  &.active {
    background-color: var(--primary-green);
  }

  &:hover {
    background-color: var(--primary-green);
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo src="/logo.png" />
      <Nav>
        <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        <StyledNavLink to="/bookings">Bookins</StyledNavLink>
        <StyledNavLink to="/cabins">Cabins</StyledNavLink>
        <StyledNavLink to="/users">Users</StyledNavLink>
        <StyledNavLink to="/settings">Settings</StyledNavLink>
      </Nav>
    </StyledSidebar>
  );
};

export default Sidebar;
