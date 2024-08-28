import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Cabin } from 'types/base';
import FormField from 'components/form-field/form-field';
import Input from 'components/input/input';
import styled from 'styled-components';
import Button from 'components/button/button';
import FileInput from 'components/file-input/file-input';
import { useCreateCabin, useEditCabin } from 'services/cabins';
import { useUploadImage } from 'services/images';
import { toast } from 'react-toastify';

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
`;

const StyledForm = styled.form`
  min-width: 40vw;
  margin: 2rem;
`;

type CabinFormProps = {
  onSubmitSuccess: () => void;
  cabin?: Cabin;
  onCancel?: () => void;
};

const CabinForm = (props: CabinFormProps) => {
  const { onSubmitSuccess, cabin: defaultCabin, onCancel } = props;

  const isEdit = !!defaultCabin?.id;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Cabin>({
    defaultValues: defaultCabin,
  });

  const { mutate: createCabin, isPending: isCreating } = useCreateCabin();
  const { mutate: updateCabin, isPending: isUpdating } = useEditCabin();
  const { mutate: uploadImage, isPending: isUploading } = useUploadImage();
  const isEditSession = !!defaultCabin;

  const handleSuccess = () => {
    toast.success(`Successfully ${isEditSession ? 'edited' : 'created'}`);
    onSubmitSuccess();
  };

  const onSubmit = (cabin: Cabin) => {
    const { image } = cabin;

    if (typeof image === 'object') {
      return uploadImage(image[0], {
        onSuccess() {
          const imageUrl = `${import.meta.env.VITE_BASE_URL}/storage/v1/object/public/the_pinewood_inn/${image[0].name}`;
          isEditSession
            ? updateCabin(
                { ...cabin, image: imageUrl },
                {
                  onSuccess: handleSuccess,
                },
              )
            : createCabin(
                { ...cabin, image: imageUrl },
                {
                  onSuccess: handleSuccess,
                },
              );
        },
      });
    }

    updateCabin(
      { ...cabin },
      {
        onSuccess: handleSuccess,
      },
    );
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormField label="Name" error={errors?.name?.message}>
          <Input
            id="name"
            {...register('name', { required: 'Cabin must have a name.' })}
          />
        </FormField>
        <FormField
          label="Maximum Capacity"
          error={errors?.max_capacity?.message}
        >
          <Input
            id="maxCapacity"
            {...register('max_capacity', {
              required: 'Cabin must have maximum capacity.',
            })}
          />
        </FormField>
        <FormField label="Regular Price" error={errors?.regular_price?.message}>
          <Input
            id="regularPrice"
            {...register('regular_price', {
              required: 'Cabin must have a regular price.',
              valueAsNumber: true,
            })}
            type="number"
          />
        </FormField>
        <FormField label="Discount" error={errors?.discount?.message}>
          <Input
            id="discount"
            type="number"
            {...register('discount', {
              required: 'Cabin must have a discount.',
              valueAsNumber: true,
            })}
          />
        </FormField>
        <FormField label="Image" error={errors?.image?.message}>
          <FileInput
            id="cabinImage"
            {...register('image', {
              required: false,
            })}
            src={(defaultCabin?.image as string) ?? ''}
          />
        </FormField>
        <Actions>
          <Button
            variant="outlined"
            size="medium"
            type="reset"
            onClick={onCancel}
            disabled={isCreating || isUpdating || isUploading}
          >
            Cancel
          </Button>
          <Button
            size="medium"
            type="submit"
            disabled={isCreating || isUpdating || isUploading}
          >
            {isEdit ? 'Edit' : 'Create New'} Cabin
          </Button>
        </Actions>
      </StyledForm>
      <DevTool control={control} />
    </>
  );
};

export default CabinForm;
