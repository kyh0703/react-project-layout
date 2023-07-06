import styled from 'styled-components';

import Link from '@/app/ui/link/link.component';

import palette from '@/lib/styles/palette.lib';

export const HeaderContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  border-bottom: 1px solid ${palette.gray7};
`;

export const LinkContainer = styled.nav`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: none;
  left: initial;
  height: initial;
  top: initial;
  position: relative;
  border-bottom: none;
  border-bottom-right-radius: none;
  border-bottom-left-radius: none;
`;

export const StyledLink = styled(Link)`
  padding: 5px 5px;
  color: inherit;

  &.active {
    color: ${(props) => props.theme.color};
  }
`;

export const ThemeLogoWrapper = styled.div`
  cursor: pointer;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px 10px;

  &:hover {
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.color};
  }
  &:active {
    outline: 0;
  }
`;
