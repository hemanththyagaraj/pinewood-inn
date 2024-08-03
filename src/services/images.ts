import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';

const uploadImage = (file: File) => {
  const form = new FormData();
  form.append(file.name, file);
  console.log(file);
  return axiosInstance.post(
    `/storage/v1/object/the_pinewood_inn/${file.name}`,
    form,
    {
      baseURL: import.meta.env.VITE_BASE_URL,
    },
  );
};

export const useUploadImage = () => {
  return useMutation({
    mutationFn: (file: File) => uploadImage(file),
  });
};
