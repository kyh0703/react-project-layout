import styled from 'styled-components';

import Responsive from '@/app/ui/responsive/responsive.component';

export const EditorBlock = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const TitleInput = styled.input`
  background: inherit;
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.bodyColor};
  margin-bottom: 2rem;
  width: 100%;
`;

// const CustomReactQuill = styled(ReactQuill)`
//   height: 300px;
// `;
