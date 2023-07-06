import { ButtonHTMLAttributes, forwardRef } from 'react';

import { StyledButton } from './button.styles';

export type ButtonVariants = 'primary' | 'inverse' | 'danger';

export type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isLoading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton variant={variant} size={size} ref={ref} type={type} {...props}></StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
