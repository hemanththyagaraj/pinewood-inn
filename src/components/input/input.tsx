import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background: none;
  border: 1px solid var(--grey);
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--white);
  outline: none;
  font-size: 2rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button,
  &[type='number'] {
    -webkit-appearance: none;
    appearance: none;
    -moz-appearance: textfield;
  }
`;

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...props} />;
};

export default Input;
