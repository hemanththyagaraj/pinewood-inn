import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background: none;
  border: 1px solid var(--grey);
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--white);
  outline: none;
  font-size: 1.6rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button,
  &[type='number'] {
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: textfield;
  }
`;

const Input = React.forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return <StyledInput {...props} ref={ref} />;
  },
);

export default Input;
