import { createContext, PropsWithChildren } from 'react';
import ModelOpen from './modal-open';
import ModalWindow from './modal-window';

type ModalContext = {
  open: boolean;
  toggleOpen: () => void;
};

type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
} & PropsWithChildren;

export const ModalContext = createContext<ModalProps>({
  isOpen: false,
  onClose: () => {},
});

const Modal = (props: ModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      {props.children}
    </ModalContext.Provider>
  );
};

Modal.Open = ModelOpen;
Modal.Window = ModalWindow;

export default Modal;
