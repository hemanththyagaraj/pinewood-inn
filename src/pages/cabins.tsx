import Button from 'components/button/button';
import { Table } from 'components/table';
import { useDeleteCabin, useGetCabins } from 'services/cabins';
import styled from 'styled-components';
import { Column } from 'types/table';
import { HiMiniTrash } from 'react-icons/hi2';
import { Cabin } from 'types/cabin';
import { useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';

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
  const queryClient = useQueryClient();

  const columns: Column[] = useMemo(
    () => [
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
    ],
    [],
  );

  const handleDelete = (id: string) => {
    deleteCabin(id, {
      onSuccess() {
        queryClient.invalidateQueries();
      },
    });
  };

  return (
    <Table isLoading={isLoading} data={cabins as Cabin[]} columns={columns} />
  );
};

export default Cabins;
