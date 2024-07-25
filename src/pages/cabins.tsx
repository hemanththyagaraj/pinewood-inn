import Button from 'components/button/button';
import { Table } from 'components/table';
import { useCreateCabin, useDeleteCabin, useGetCabins } from 'services/cabins';
import styled from 'styled-components';
import { HiMiniTrash } from 'react-icons/hi2';
import { useQueryClient } from '@tanstack/react-query';
import { Cabin } from 'types/base';
import { Column } from 'components/table/table';
import CreateCabin from 'components/cabin-form/cabin-form';

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
  const queryClient = useQueryClient();

  const handleDelete = (id: string) => {
    deleteCabin(id, {
      onSuccess() {
        queryClient.invalidateQueries();
      },
    });
  };

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

  const handleCreateCabin = (cabin: Cabin) => {
    createCabin(cabin, {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    });
  };

  return (
    <>
      <Table isLoading={isLoading} data={cabins as Cabin[]} columns={columns} />
      <CreateCabin onSubmit={handleCreateCabin} />
    </>
  );
};

export default Cabins;
