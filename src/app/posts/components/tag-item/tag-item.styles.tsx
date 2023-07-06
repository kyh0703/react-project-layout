import styled from 'styled-components';

import palette from '@/lib/styles/palette.lib';

export const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray6};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
