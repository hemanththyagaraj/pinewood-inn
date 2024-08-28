import { createContext, PropsWithChildren, useState } from 'react';

type MenuContext = {
  activeMenuId: string;
  setMenuId: React.Dispatch<React.SetStateAction<string>>;
  position: DOMRect | null;
  setPosition: React.Dispatch<React.SetStateAction<DOMRect | null>>;
  close: () => void;
};

export const MenusContext = createContext<MenuContext>({
  activeMenuId: '',
  setMenuId: () => {},
  position: null,
  setPosition: () => {},
  close: () => {},
});

const Menus = (props: PropsWithChildren) => {
  const [activeMenuId, setActiveMenuId] = useState('');
  const [menuOpenButtonPosition, setMenuOpenButtonPosition] =
    useState<DOMRect | null>(null);

  const setMenuId = setActiveMenuId;
  const setPosition = setMenuOpenButtonPosition;
  const close = () => {
    setActiveMenuId('');
    setMenuOpenButtonPosition(null);
  };

  return (
    <MenusContext.Provider
      value={{
        activeMenuId,
        setMenuId,
        position: menuOpenButtonPosition,
        setPosition,
        close,
      }}
    >
      {props.children}
    </MenusContext.Provider>
  );
};

export default Menus;
