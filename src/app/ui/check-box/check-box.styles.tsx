import styled, { css } from 'styled-components';

export const CheckBoxContainer = styled.div``;

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

export const Box = styled.input`
  height: 1.125rem;
  width: 1.125rem;
`;

export const Label = styled.label`
  font-size: 1.125rem;
`;
