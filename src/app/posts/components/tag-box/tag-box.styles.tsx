import styled from 'styled-components';

import palette from '@/lib/styles/palette.lib';

export const TagBoxContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray2};
  padding-top: 2rem;

  h4 {
    color: ${palette.gray8};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

export const TagForm = styled.form``;
