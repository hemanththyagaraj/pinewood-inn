import { screen, render, userEvent } from 'tests/TestUtils';
import Button from 'components/button/button';
import Modal from './modal';

describe('Test the modal component', () => {
  it('Render the modal opener correctly', () => {
    render(
      <Modal>
        <Modal.Open render={() => <Button>Open Modal</Button>} />
      </Modal>,
    );
    const modalOpenButton = screen.getByRole('button');

    expect(modalOpenButton).toBeInTheDocument();
  });

  it('Opens the modal on modal open button click', async () => {
    render(
      <Modal>
        <Modal.Open
          render={(toggleModal) => (
            <Button onClick={toggleModal}>Open Modal</Button>
          )}
        />
        <Modal.Window>
          <span>Hello from the modal window</span>
        </Modal.Window>
      </Modal>,
    );

    const modalOpenButton = screen.getByRole('button');

    await userEvent.click(modalOpenButton);

    const modalWindow = screen.getByRole('dialog');

    expect(modalWindow).toBeInTheDocument();
  });

  it('Closes the modal on close icon click', async () => {
    render(
      <Modal>
        <Modal.Open
          render={(toggleModal) => (
            <Button onClick={toggleModal}>Open Modal</Button>
          )}
        />
        <Modal.Window>
          <span>Hello from the modal window</span>
        </Modal.Window>
      </Modal>,
    );

    const modalOpenButton = screen.getByRole('button');

    await userEvent.click(modalOpenButton);

    const modalWindow = screen.getByRole('dialog');
    const closeButton = screen.getByLabelText(/close modal/i);

    await userEvent.click(closeButton);

    expect(modalWindow).not.toBeInTheDocument();
  });

  it('Closes the modal when clicked outside the modal window', async () => {
    render(
      <Modal>
        <Modal.Open
          render={(toggleModal) => (
            <Button onClick={toggleModal}>Open Modal</Button>
          )}
        />
        <Modal.Window>
          <span>Hello from the modal window</span>
        </Modal.Window>
      </Modal>,
    );

    const modalOpenButton = screen.getByRole('button');

    await userEvent.click(modalOpenButton);

    const modalWindow = screen.getByRole('dialog');
    const overlay = screen.getByLabelText(/modal overlay/i);

    await userEvent.click(overlay);

    expect(modalWindow).not.toBeInTheDocument();
  });
});
