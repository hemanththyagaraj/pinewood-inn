import { PropsWithChildren, ReactNode, useContext } from 'react';
import styled from 'styled-components';
import { MenusContext } from './menus';

type MenuOpenProps = {
  render?: () => ReactNode;
  id?: string;
} & PropsWithChildren;

const StyledMenuOpenButton = styled.button`
  background: none;
  border: none;
`;

const MenuOpen = (props: MenuOpenProps) => {
  const { id } = props;
  const { setMenuId, activeMenuId, setPosition, close } =
    useContext(MenusContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (id === activeMenuId) {
      close();
      return;
    }

    const btnPosition = e.currentTarget.getBoundingClientRect();
    setMenuId(id ?? '');
    setPosition(btnPosition);
  };

  return (
    <StyledMenuOpenButton onClick={handleClick}>
      {props.render?.() ?? props.children}
    </StyledMenuOpenButton>
  );
};

export default MenuOpen;
