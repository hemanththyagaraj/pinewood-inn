import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import axiosInstance from './axios';

export const useGetCabins = (options?: UseQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: ['cabins'],
    queryFn: () => axiosInstance.get('/cabins?select=*'),
  });
};
