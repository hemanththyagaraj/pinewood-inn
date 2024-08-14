import { createContext, PropsWithChildren, useState } from 'react';
import ModelOpen from './modal-open';
import ModalWindow from './modal-window';

type ModalContext = {
  open: boolean;
  toggleOpen: () => void;
};

export const ModalContext = createContext<ModalContext>({
  open: false,
  toggleOpen: () => {},
});

const Modal = (props: PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <ModalContext.Provider value={{ open, toggleOpen }}>
      {props.children}
    </ModalContext.Provider>
  );
};

Modal.Open = ModelOpen;
Modal.Window = ModalWindow;

export default Modal;
