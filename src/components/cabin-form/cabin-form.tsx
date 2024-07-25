import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Cabin } from 'types/base';
import FormField from 'components/form-field/form-field';
import Input from 'components/input/input';
import styled from 'styled-components';
import Button from 'components/button/button';
import FileInput from 'components/file-input/file-input';

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
`;

type CabinFormProps = {
  onSubmit: (cabin: Cabin) => void;
};

const CabinForm = (props: CabinFormProps) => {
  const { onSubmit: onFormSubmit } = props;
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Cabin>();

  const onSubmit = (cabin: Cabin) => {
    onFormSubmit(cabin);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            })}
          />
        </FormField>
        <FormField label="Image" error={errors?.image?.message}>
          <FileInput
            id="cabinImage"
            {...register('image', {
              required: 'Cabin image is required',
            })}
          />
        </FormField>
        <Actions>
          <Button variant="outlined" size="medium" type="reset">
            Cancel
          </Button>
          <Button size="medium" type="submit">
            Create New Cabin
          </Button>
        </Actions>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default CabinForm;
