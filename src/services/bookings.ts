import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import axiosInstance from './axios';

export const useGetBookings = (options?: UseQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: ['bookings'],
    queryFn: () => axiosInstance.get('/bookings'),
  });
};
