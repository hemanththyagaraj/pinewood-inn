import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineUserCircle,
} from 'react-icons/hi2';

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
  gap: 1.2rem;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--grey);
  text-decoration: none;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.active {
    background-color: var(--primary-green);
    color: var(--white);
    & .icon {
      border-radius: 50%;
    }
  }

  &:hover {
    background-color: var(--primary-green);
    color: var(--white);
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar role="complementary">
      <Logo src="/logo.png" />
      <Nav role="navigation">
        <StyledNavLink role="link" to="/dashboard">
          <HiOutlineHome className="icon" />
          Home
        </StyledNavLink>
        <StyledNavLink role="link" to="/bookings">
          <HiOutlineCalendarDays className="icon" />
          Bookings
        </StyledNavLink>
        <StyledNavLink role="link" to="/cabins">
          <HiOutlineHomeModern className="icon" />
          Cabins
        </StyledNavLink>
        <StyledNavLink role="link" to="/users">
          <HiOutlineUserCircle className="icon" />
          Users
        </StyledNavLink>
        <StyledNavLink role="link" to="/settings">
          <HiOutlineCog6Tooth className="icon" />
          Settings
        </StyledNavLink>
      </Nav>
    </StyledSidebar>
  );
};

export default Sidebar;
