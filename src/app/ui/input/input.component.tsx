import { PropsWithRef, ReactElement, forwardRef } from 'react';

import { InputContainer, InputField, InputLabel } from './input.styles';

type InputProps = PropsWithRef<JSX.IntrinsicElements['input']> & {
  id: string;
  label?: string | ReactElement;
  isFlex?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, isFlex = false, ...rest }, ref) => {
    return (
      <InputContainer isFlex={isFlex}>
        {label && (
          <InputLabel isFlex={isFlex} htmlFor={id}>
            {label}
          </InputLabel>
        )}
        <InputField id={id} ref={ref} {...rest} />
      </InputContainer>
    );
  }
);

export default Input;
