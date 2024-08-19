import { PropsWithChildren, useContext } from 'react';
import { ModalContext } from './modal';

type ModalOpenProps = {
  render?: (toggleOpen: () => void) => void;
} & PropsWithChildren;

const ModelOpen = (props: ModalOpenProps) => {
  const { children, render } = props;
  const { toggleOpen } = useContext(ModalContext);

  return <>{render?.(toggleOpen) ?? children}</>;
};

export default ModelOpen;
