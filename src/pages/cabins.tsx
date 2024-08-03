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
import { Cabin } from 'types/base';
import { Column } from 'components/table/table';
import CabinForm from 'components/cabin-form/cabin-form';
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

const Cabins = () => {
  const { data: cabins, isLoading } = useGetCabins();
  const { mutate: deleteCabin, isPending: isDeleting } = useDeleteCabin();
  const { mutate: createCabin } = useCreateCabin();
  const { mutate: editCabin } = useEditCabin();
  const { mutate: uploadImage } = useUploadImage();

  const columns: Column[] = [
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
    {
      key: 'id',
      title: '',
      render: (id) => (
        <DeleteButton onClick={() => handleDelete(id)} disabled={isDeleting}>
          <HiMiniTrash id={id} />
        </DeleteButton>
      ),
    },
  ];

  const handleDelete = (id: string) => {
    deleteCabin(id);
  };

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
      <Table isLoading={isLoading} data={cabins as Cabin[]} columns={columns} />
      {false && <CabinForm onSubmit={handleSubmit} />}
    </>
  );
};

export default Cabins;
