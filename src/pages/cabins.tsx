import Button from 'components/button/button';
import { Table } from 'components/table';
import {
  useCreateCabin,
  useDeleteCabin,
  useEditCabin,
  useGetCabins,
} from 'services/cabins';
import styled from 'styled-components';
import { HiMiniTrash } from 'react-icons/hi2';
import { HiPencil } from 'react-icons/hi2';
import { Cabin } from 'types/base';
import { Column } from 'components/table/table';
import CabinForm from 'components/cabin-form/cabin-form';
import Modal from 'components/modal/modal';
import { useUploadImage } from 'services/images';

const Image = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
`;

const Price = styled.p`
  color: var(--success-text-color);
`;

const DeleteButton = styled(Button)`
  background-color: var(--error-text-color);
`;

const columns: Column<Cabin>[] = [
  {
    key: 'image',
    title: '',
    render: (text) => <Image src={text} />,
  },
  {
    key: 'name',
    title: 'Cabin',
  },
  {
    key: 'max_capacity',
    title: 'Capacity',
    render: (text) => <>Fits upto {text} people</>,
  },
  {
    key: 'regular_price',
    title: 'Price',
  },
  {
    key: 'discount',
    title: 'Discount',
    render: (text) => <Price>₹{text}</Price>,
  },
];

const Cabins = () => {
  const { data: cabins, isLoading } = useGetCabins();
  const { mutate: deleteCabin, isPending: isDeleting } = useDeleteCabin();
  const { mutate: createCabin } = useCreateCabin();
  const { mutate: editCabin } = useEditCabin();
  const { mutate: uploadImage } = useUploadImage();

  console.log(deleteCabin);

  const cabinColumns: Column<Cabin>[] = [
    ...columns,
    {
      key: 'id',
      title: '',
      render: (id, cabin) => (
        <>
          <Modal>
            <Modal.Open
              render={(toggleOpen) => (
                <DeleteButton onClick={toggleOpen} disabled={isDeleting}>
                  <HiMiniTrash id={id} />
                </DeleteButton>
              )}
            />
            <Modal.Window>
              <CabinForm onSubmit={() => {}} />
            </Modal.Window>
          </Modal>
          <Modal>
            <Modal.Open
              render={(toggleOpen) => (
                <Button onClick={toggleOpen} disabled={isDeleting}>
                  <HiPencil id={id} />
                </Button>
              )}
            />
            <Modal.Window>
              <CabinForm onSubmit={handleSubmit} cabin={cabin as Cabin} />
            </Modal.Window>
          </Modal>
        </>
      ),
    },
  ];

  const handleSubmit = (cabin: Cabin) => {
    const { image } = cabin;
    const isEditSession = !!cabin?.id;

    if (typeof image === 'object') {
      return uploadImage(image[0], {
        onSuccess() {
          const imageUrl = `${import.meta.env.VITE_BASE_URL}/storage/v1/object/public/the_pinewood_inn/${image[0].name}`;
          isEditSession
            ? editCabin({ ...cabin, image: imageUrl })
            : createCabin({ ...cabin, image: imageUrl });
        },
      });
    }

    isEditSession ? editCabin(cabin) : createCabin(cabin);
  };

  return (
    <>
      <Modal>
        <Modal.Open
          render={(toggleOpen) => (
            <Button size="medium" onClick={toggleOpen}>
              Create New Cabin
            </Button>
          )}
        />
        <Modal.Window
          render={(toggleOpen) => (
            <CabinForm onSubmit={handleSubmit} onCancel={toggleOpen} />
          )}
        />
      </Modal>
      <Table
        isLoading={isLoading}
        data={cabins as Cabin[]}
        columns={cabinColumns}
      />
    </>
  );
};

export default Cabins;
