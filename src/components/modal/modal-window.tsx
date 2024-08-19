import { PropsWithChildren, useContext } from 'react';
import { ModalContext } from './modal';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import useOutsideClick from 'hooks/use-outside-click';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white);
  background-color: var(--secondary-bg-color);
  padding: 2rem;
  border-radius: 1rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  backdrop-filter: blur(0.4rem);
`;

const StyledSvg = styled(HiXMark)`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 2rem;
  cursor: pointer;
`;

type ModalWindowProps = {
  render?: (toggleOpen: () => void) => void;
} & PropsWithChildren;

const ModalWindow = (props: ModalWindowProps) => {
  const { render, children } = props;
  const { open, toggleOpen } = useContext(ModalContext);

  const ref = useOutsideClick<HTMLDivElement>(toggleOpen);

  if (!open) return null;

  return createPortal(
    <Overlay aria-label="Modal Overlay">
      <StyledModal ref={ref} role="dialog">
        <StyledSvg
          role="button"
          onClick={toggleOpen}
          aria-label="Close Modal"
        />
        {render?.(toggleOpen) ?? children}
      </StyledModal>
    </Overlay>,
    document.body,
  );
};

export default ModalWindow;
