import { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

type FormField = {
  error?: string;
  label?: string;
};

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 2rem 0;
`;

const Label = styled.label`
  font-size: 2rem;
`;

const Error = styled.span`
  color: var(--error-text-color);
`;

const FormField = (props: PropsWithChildren<FormField>) => {
  const { label = '', error = '', children } = props;

  return (
    <StyledFormField>
      {label && (
        <Label htmlFor={(children as ReactElement)?.props?.id ?? ''}>
          {label}
        </Label>
      )}
      {children}
      {error && (
        <Error aria-live="polite" role="alert">
          {error}
        </Error>
      )}
    </StyledFormField>
  );
};

export default FormField;
