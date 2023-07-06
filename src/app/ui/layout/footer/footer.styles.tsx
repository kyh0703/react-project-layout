import palette from '@/lib/styles/palette.lib';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 60px;
  position: relative;
  transform: translateY(0%);
  border-top: 1px solid ${palette.gray7};
  display: flex;
  align-items: center;
  justify-content: center;
`;
