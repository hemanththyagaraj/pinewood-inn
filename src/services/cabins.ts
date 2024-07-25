import { UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query';
import axiosInstance from './axios';
import { Cabin } from 'types/base';

const getCabins = () => {
  return axiosInstance.get('/cabins?select=*');
};

const deleteCabin = (id: string) => {
  return axiosInstance.delete(`/cabins?id=eq.${id}`);
};

const createCabin = (cabin: Cabin) => {
  return axiosInstance.post('/cabins', cabin);
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

export const useCreateCabin = () => {
  return useMutation({
    mutationFn: (cabin: Cabin) => createCabin(cabin),
  });
};
