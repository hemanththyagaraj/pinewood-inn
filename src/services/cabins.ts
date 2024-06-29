import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import axiosInstance from './axios';

const getCabins = () => {
  return axiosInstance.get('/cabins?select=*');
};

export const useGetCabins = (options?: UseQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: ['cabins'],
    queryFn: getCabins,
  });
};
