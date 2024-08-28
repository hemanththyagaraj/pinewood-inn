import { PropsWithChildren } from 'react';
import MenuOpen from './menu-open';
import MenuList from './menu-list';
import MenuItem from './menu-item';

const Menu = (props: PropsWithChildren) => {
  return <>{props.children}</>;
};

Menu.Open = MenuOpen;
Menu.List = MenuList;
Menu.Item = MenuItem;

export default Menu;
