import { Table } from 'components/table';
import { Column } from 'components/table/table';
import { useGetCabins } from 'services/cabins';
import styled from 'styled-components';
import { Cabin } from 'types/base';
import MenusProvider from 'components/menu/menus';
import CabinActions from './cabin-row';

const Image = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
`;

const Price = styled.p`
  color: var(--success-text-color);
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

const CabinsTable = () => {
  const { data: cabins, isLoading } = useGetCabins();

  const cabinColumns: Column<Cabin>[] = [
    ...columns,
    {
      key: '',
      title: '',
      render: (_, cabin) => (
        <>
          <CabinActions cabin={cabin as Cabin} />
        </>
      ),
    },
  ];

  return (
    <MenusProvider>
      <Table
        isLoading={isLoading}
        data={cabins as Cabin[]}
        columns={cabinColumns}
      />
    </MenusProvider>
  );
};

export default CabinsTable;
