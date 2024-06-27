import { useGetCabins } from 'services/cabins';

const Cabins = () => {
  const { data, isLoading } = useGetCabins();

  console.log(data, isLoading);

  return <div>This is a cabin page</div>;
};

export default Cabins;
