import styled from 'styled-components';

import palette from '@/lib/styles/palette.lib';

export const TagsContainer = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan7};
    text-decoration: none;
    margin-right: 0.5rem;
  }
  &:hover {
    color: ${palette.cyan6};
  }
`;
