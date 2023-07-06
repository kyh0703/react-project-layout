import styled from 'styled-components';

import { Link } from 'react-router-dom';

import palette from '@/lib/styles/palette.lib';
import { StyledButton } from '@/app/ui/button/button.styles';

export const SignInFormContainer = styled.div`
  h3 {
    text-align: center;
    margin: 0;
    color: ${palette.blue9};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const ErrorMessage = styled.div`
  color: ${palette.red9};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export const SignInButton = styled(StyledButton)`
  margin-top: 1rem;
  width: 100%;
`;

export const OtherSignInContainer = styled.div`
  margin-top: 1rem;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SignInLogoContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SignInLogo = styled.div<{ imageURL: string }>`
  background-image: url(${(props) => props.imageURL});
  background-size: cover;
  border-radius: 50%;
  width: 80px;
  height: 80px;

  &:hover {
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  a {
    color: ${palette.gray6};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray9};
    }
  }
`;

export const TinyLink = styled(Link)`
  font-size: 0.95rem;
  text-decoration: none;
  &:hover,
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
