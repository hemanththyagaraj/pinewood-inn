import { Table } from 'components/table';
// import { useGetCabins } from 'services/cabins';

const Cabins = () => {
  // const { data, isLoading } = useGetCabins();

  // console.log(data, isLoading);

  return (
    <div>
      <Table
        data={[
          { name: 'luxury woods', price: 200, maxPeople: 2 },
          { name: 'luxury woods', price: 200, maxPeople: 2 },
          { name: 'luxury woods', price: 200, maxPeople: 2 },
        ]}
        columns={[
          { key: 'name', title: 'Name' },
          { key: 'price', title: 'Price' },
          { key: 'maxPeople', title: 'Max People' },
        ]}
      />
    </div>
  );
};

export default Cabins;
