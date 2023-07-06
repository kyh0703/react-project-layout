import styled, { css } from 'styled-components';

import { ButtonSizes, ButtonVariants } from '@/app/ui/button/button.component';
import palette from '@/lib/styles/palette.lib';

const getVariantStyles = ({ variant = 'primary' }) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${(props) => props.theme.primaryColor};
        color: white;
      `;
    case 'inverse':
      return css`
        background-color: white;
        color: ${(props) => props.theme.primaryColor};
      `;
    case 'danger':
      return css`
        background-color: #ff00009b;
        color: #fff;
      `;
  }
};

const getSizeStyles = ({ size = 'md' }) => {
  switch (size) {
    case 'sm':
      return css`
        height: 1.5rem;
        padding: 10px 16px;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        font-size: 1rem;
      `;
    case 'md':
      return css`
        height: 2rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        font-size: 1rem;
      `;
    case 'lg':
      return css`
        height: 2.5rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;
        & + & {
          margin-left: 0.875rem;
        }
        font-size: 1.125rem;
      `;
  }
};

type ButtonProps = {
  variant: ButtonVariants;
  size: ButtonSizes;
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 0.375rem;
  border: 1px solid ${palette.gray3};

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
`;
