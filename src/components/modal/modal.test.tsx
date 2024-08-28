import { screen, render, userEvent } from 'tests/TestUtils';
import Button from 'components/button/button';
import Modal from './modal';
import { useState } from 'react';

describe('Test the modal component', () => {
  it('Render the modal opener correctly', () => {
    render(
      <Modal isOpen={false}>
        <Modal.Open>
          <Button>Open Modal</Button>
        </Modal.Open>
      </Modal>,
    );
    const modalOpenButton = screen.getByRole('button');

    expect(modalOpenButton).toBeInTheDocument();
  });

  it('Opens the modal on modal open button click', async () => {
    const ModalComponent = () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <Modal isOpen={isOpen}>
          <Modal.Open>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          </Modal.Open>
          <Modal.Window>
            <span>Hello from the modal window</span>
          </Modal.Window>
        </Modal>
      );
    };
    render(<ModalComponent />);

    const modalOpenButton = screen.getByRole('button');

    await userEvent.click(modalOpenButton);

    const modalWindow = screen.getByRole('dialog');

    expect(modalWindow).toBeInTheDocument();
  });

  it('Closes the modal on close icon click', async () => {
    const ModalComponent = () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Open>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          </Modal.Open>
          <Modal.Window>
            <span>Hello from the modal window</span>
          </Modal.Window>
        </Modal>
      );
    };
    render(<ModalComponent />);

    const modalOpenButton = screen.getByRole('button');

    await userEvent.click(modalOpenButton);

    const modalWindow = screen.getByRole('dialog');
    const closeButton = screen.getByLabelText(/close modal/i);

    await userEvent.click(closeButton);

    expect(modalWindow).not.toBeInTheDocument();
  });

  it('Closes the modal when clicked outside the modal window', async () => {
    const ModalComponent = () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Open>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          </Modal.Open>
          <Modal.Window>
            <span>Hello from the modal window</span>
          </Modal.Window>
        </Modal>
      );
    };
    render(<ModalComponent />);

    const modalOpenButton = screen.getByRole('button');

    await userEvent.click(modalOpenButton);

    const modalWindow = screen.getByRole('dialog');
    const overlay = screen.getByLabelText(/modal overlay/i);

    await userEvent.click(overlay);

    expect(modalWindow).not.toBeInTheDocument();
  });
});
