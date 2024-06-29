import { useGetBookings } from 'services/bookings';

const Bookings = () => {
  const { data, isLoading } = useGetBookings();

  console.log(data, isLoading);

  return <div>This is a bookings page</div>;
};

export default Bookings;
