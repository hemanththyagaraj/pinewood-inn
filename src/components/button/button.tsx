import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'filled' | 'outlined';
}

const sizes = {
  small: css`
    padding: 0.8rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
  `,
  medium: css`
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 0.8rem;
  `,
  large: css`
    padding: 1.5rem;
    font-size: 2rem;
    border-radius: 1rem;
  `,
};

const variant = {
  outlined: css`
    background: none;
    border: 1px solid var(--primary-green);
    color: var(--primary-green);
  `,
  filled: css`
    background: var(--primary-green);
    border: none;
    color: var(--white);
  `,
  text: css`
    background: none;
    border: none;
    color: var(--primary-green);
    font-weight: 700;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  &:disabled {
    background-color: ${(props) =>
      props.variant !== 'text' ? 'var(--grey)' : 'transparent'};
    cursor: default;
    color: ${(props) =>
      props.variant !== 'text' ? 'var(--primary-green)' : 'var(--grey)'};
  }
  ${(props) => sizes[props?.size ?? 'small']}
  ${(props) => variant[props?.variant ?? 'filled']}
`;

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
