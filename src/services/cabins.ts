import { UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';
import { Cabin } from 'types/base';
import { queryClient } from 'lib/query-client';

const getCabins = () => {
  return axiosInstance.get('/cabins?select=*');
};

const deleteCabin = (id: string) => {
  return axiosInstance.delete(`/cabins?id=eq.${id}`);
};

const createCabin = (cabin: Cabin) => {
  return axiosInstance.post('/cabins', cabin);
};

const editCabin = (cabin: Cabin) => {
  return axiosInstance.patch(`/cabins?id=eq.${cabin.id}`, cabin);
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
    onSuccess() {
      queryClient.invalidateQueries();
    },
  });
};

export const useCreateCabin = () => {
  return useMutation({
    mutationFn: (cabin: Cabin) => createCabin(cabin),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};

export const useEditCabin = () => {
  return useMutation({
    mutationFn: (cabin: Cabin) => editCabin(cabin),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
