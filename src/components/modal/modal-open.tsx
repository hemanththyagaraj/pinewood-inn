import { useContext } from 'react';
import { ModalContext } from './modal';

type ModalOpenProps = {
  render: (toggleOpen: () => void) => void;
};

const ModelOpen = (props: ModalOpenProps) => {
  const { toggleOpen } = useContext(ModalContext);

  return <>{props?.render(toggleOpen)}</>;
};

export default ModelOpen;
