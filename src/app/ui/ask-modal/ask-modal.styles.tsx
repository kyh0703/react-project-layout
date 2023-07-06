import styled from 'styled-components';

import Button from '@/app/ui/button/button.component';

export const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AskModalContainer = styled.div`
  width: 320px;
  background: ${(props) => props.theme.background};
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px ${(props) => props.theme.background};
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

export const StyledButton = styled(Button)`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;
