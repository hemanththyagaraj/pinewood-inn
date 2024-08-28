import Button from 'components/button/button';
import CabinForm from 'components/cabin-form/cabin-form';
import Modal from 'components/modal/modal';
import { useState } from 'react';

const CreateCabin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={toggleOpen}>
      <Modal.Open>
        <div>
          <Button size="medium" onClick={toggleOpen}>
            Create New Cabin
          </Button>
        </div>
      </Modal.Open>
      <Modal.Window>
        <CabinForm onSubmitSuccess={toggleOpen} onCancel={toggleOpen} />
      </Modal.Window>
    </Modal>
  );
};

export default CreateCabin;
