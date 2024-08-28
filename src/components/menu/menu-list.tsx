import { PropsWithChildren, useContext } from 'react';
import styled from 'styled-components';
import useOutsideClick from 'hooks/use-outside-click';
import { createPortal } from 'react-dom';
import { MenusContext } from './menus';

type StyledListProps = {
  positions: DOMRect | null;
};

const StyledMenuList = styled.ul<StyledListProps>`
  border-radius: 1rem;
  background-color: var(--bg-color);
  position: absolute;
  top: ${(props) =>
    `${(props.positions?.top ?? 0) + (props.positions?.height ?? 0)}px`};
  right: ${(props) =>
    `${window.innerWidth - (props.positions as DOMRect).width - (props.positions as DOMRect).left}px`};
  width: max-content;
`;

type MenuListProps = {
  id?: string;
} & PropsWithChildren;

const MenuList = (props: MenuListProps) => {
  const { id } = props;

  const { activeMenuId, position, close } = useContext(MenusContext);

  const ref = useOutsideClick<HTMLUListElement>(close, false);

  if (activeMenuId !== id) return null;

  return createPortal(
    <StyledMenuList positions={position} ref={ref}>
      {props.children}
    </StyledMenuList>,
    document.body,
  );
};

export default MenuList;
