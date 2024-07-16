import { UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query';
import axiosInstance from './axios';

const getCabins = () => {
  return axiosInstance.get('/cabins?select=*');
};

const deleteCabin = (id: string) => {
  return axiosInstance.delete(`/cabins?id=eq.${id}`);
};

export const useGetCabins = (options?: UseQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: ['cabins'],
    queryFn: getCabins,
    staleTime: 30000,
  });
};

export const useDeleteCabin = () => {
  return useMutation({
    mutationFn: (id: string) => deleteCabin(id),
  });
};
