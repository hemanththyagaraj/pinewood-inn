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
  padding: 2rem 4rem;
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

const ModalClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledSvg = styled(HiXMark)`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const ModalWindow = (props: PropsWithChildren) => {
  const { children } = props;
  const { isOpen, onClose } = useContext(ModalContext);

  const ref = useOutsideClick<HTMLDivElement>(onClose);

  if (!isOpen) return null;

  return createPortal(
    <Overlay aria-label="Modal Overlay">
      <StyledModal ref={ref} role="dialog">
        <ModalClose>
          <StyledSvg role="button" onClick={onClose} aria-label="Close Modal" />
        </ModalClose>
        {children}
      </StyledModal>
    </Overlay>,
    document.body,
  );
};

export default ModalWindow;
