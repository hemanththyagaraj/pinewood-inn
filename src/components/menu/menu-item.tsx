import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

type MenuItemProps = {
  icon?: ReactNode;
  onClick?: () => void;
} & PropsWithChildren;

const StyledMenuItem = styled.li`
  &:first-child {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  &:last-child {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 1.5rem 1.2rem;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--grey);
  width: 100%;

  &:hover {
    background-color: var(--secondary-bg-color);
  }
`;

const MenuItem = (props: MenuItemProps) => {
  const handleClick = () => {
    props.onClick?.();
  };
  return (
    <StyledMenuItem>
      <StyledButton onClick={handleClick}>
        {props.icon ?? ''} {props.children}
      </StyledButton>
    </StyledMenuItem>
  );
};

export default MenuItem;
