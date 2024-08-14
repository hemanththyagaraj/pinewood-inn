import { PropsWithChildren, useContext } from 'react';
import { ModalContext } from './modal';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

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

const ModalWindow = (props: PropsWithChildren) => {
  const { open, toggleOpen } = useContext(ModalContext);

  if (!open) return null;

  return createPortal(
    <Overlay>
      <StyledModal role="dialog">
        <StyledSvg
          role="button"
          onClick={toggleOpen}
          aria-label="Close Modal"
        />
        {props.children}
      </StyledModal>
    </Overlay>,
    document.body,
  );
};

export default ModalWindow;
