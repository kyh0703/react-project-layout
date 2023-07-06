import styled, { keyframes } from 'styled-components';

import palette from '@/lib/styles/palette.lib';

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
`;

export const SpinnerItem = styled.div`
  position: relative;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  border: 1px solid ${palette.teal2};
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;

export const SpinnerText = styled.em`
  color: ${(props) => props.theme.bodyContentColor};
  position: absolute;
  letter-spacing: 1.2px;
`;
