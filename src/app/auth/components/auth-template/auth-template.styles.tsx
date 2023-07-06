import styled from 'styled-components';

export const AuthTemplateContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  border: 1px solid ${(props) => props.theme.color};
  padding: 2rem;
  width: 600px;
  border-radius: 10px;
`;
