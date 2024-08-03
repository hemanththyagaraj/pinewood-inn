import React, {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react';
import styled from 'styled-components';
import { HiArrowUpTray } from 'react-icons/hi2';
import Preview from 'components/preview/preview';

const StyledFileInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  width: max-content;
  padding: 1rem;
  background: var(--primary-green);
  color: var(--white);
  border-radius: 0.8rem;
  display: flex;
  gap: 0.5rem;
  height: 4rem;
`;

const StyledDiv = styled.div`
  margin: 0.4rem 0;
  display: flex;
  gap: 1rem;
`;

const FileInput = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement> & { src?: string },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const { src, id, ...rest } = props;
    const [image, setImage] = useState<string | null>(src ?? null);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
      props.onChange?.(e);
    };

    return (
      <StyledDiv>
        <Label htmlFor={id ?? ''}>
          <HiArrowUpTray /> Upload
        </Label>
        <StyledFileInput id={id} {...rest} ref={ref} onChange={onChange} />
        {image && <Preview src={image} />}
      </StyledDiv>
    );
  },
);

export default FileInput;
