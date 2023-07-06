import styled from 'styled-components';

import palette from '../../../../lib/styles/palette.lib';

export const PostItemContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.blue5};
  }
  h2 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    &:hover {
      color: ${(props) => props.theme.bodyContentHoverColor};
    }
  }
  p {
    margin-top: 2rem;
  }
`;
