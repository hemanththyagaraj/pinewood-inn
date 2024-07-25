import React, {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react';
import styled from 'styled-components';
import { HiArrowUpTray } from 'react-icons/hi2';
import { formatFileSize } from 'helpers/size';

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
`;

const StyledDiv = styled.div`
  margin: 0.4rem 0;
  display: flex;
  gap: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ImageName = styled.span`
  width: 15rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const FileInput = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [image, setImage] = useState<File | null>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setImage(e?.target?.files?.[0] ?? null);
      props.onChange?.(e);
    };

    return (
      <StyledDiv>
        <Label htmlFor={props?.id ?? ''}>
          <HiArrowUpTray /> Upload
        </Label>
        {image && (
          <Info>
            <ImageName>{image.name}</ImageName>
            <span>{formatFileSize(image.size)}</span>
          </Info>
        )}
        <StyledFileInput {...props} ref={ref} onChange={onChange} />
      </StyledDiv>
    );
  },
);

export default FileInput;
