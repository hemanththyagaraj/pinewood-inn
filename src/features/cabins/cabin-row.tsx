import Button from 'components/button/button';
import Menu from 'components/menu/menu';
import Modal from 'components/modal/modal';
import { useState } from 'react';
import { HiEllipsisVertical, HiPencil, HiTrash } from 'react-icons/hi2';
import styled from 'styled-components';
import { Cabin } from 'types/base';
import Heading from 'components/heading/heading';
import { useDeleteCabin } from 'services/cabins';
import { toast } from 'react-toastify';
import CabinForm from 'components/cabin-form/cabin-form';

const StyledIcon = styled(HiEllipsisVertical)`
  color: var(--grey);
  font-size: 2.5rem;
`;

const Description = styled.p`
  margin: 2rem 0;
  font-size: 2rem;
  width: 60rem;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const DeleteButton = styled(Button)`
  background-color: var(--error-text-color);
`;

type CabinRowProps = {
  cabin: Cabin;
};

type WindowName = 'delete' | 'edit' | string;

const CabinActions = (props: CabinRowProps) => {
  const { cabin } = props;

  const [activeWindow, setActiveWindow] = useState<WindowName>('');

  const { mutate: deleteCabin, isPending } = useDeleteCabin();

  const handleDelete = () => {
    deleteCabin(cabin.id, {
      onSuccess: () => {
        toast.success('Successfully deleted');
        closeModal();
      },
    });
  };

  const closeModal = () => {
    setActiveWindow('');
  };

  const openModal = (windowName: WindowName) => {
    setActiveWindow(windowName);
  };

  return (
    <Modal key={cabin?.id} isOpen={!!activeWindow} onClose={closeModal}>
      <Modal.Open>
        <Menu>
          <Menu.Open id={cabin?.id} render={() => <StyledIcon />} />
          <Menu.List id={cabin?.id}>
            <Menu.Item onClick={() => openModal('edit')} icon={<HiPencil />}>
              Edit Cabin
            </Menu.Item>
            <Menu.Item onClick={() => openModal('delete')} icon={<HiTrash />}>
              Delete Cabin
            </Menu.Item>
          </Menu.List>
        </Menu>
      </Modal.Open>

      {activeWindow === 'delete' && (
        <Modal.Window>
          <Heading as="h2">Delete Cabins</Heading>
          <Description>
            Are you sure you want to delete this cabin permanently? This action
            cannot be undone.
          </Description>
          <Actions>
            <Button onClick={closeModal} variant="outlined">
              Cancel
            </Button>
            <DeleteButton disabled={isPending} onClick={handleDelete}>
              Delete
            </DeleteButton>
          </Actions>
        </Modal.Window>
      )}
      {activeWindow === 'edit' && (
        <Modal.Window>
          <CabinForm
            cabin={cabin}
            onSubmitSuccess={closeModal}
            onCancel={closeModal}
          />
        </Modal.Window>
      )}
    </Modal>
  );
};

export default CabinActions;
