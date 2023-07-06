import styled from 'styled-components';

import Link from '@/app/ui/link/link.component';

import palette from '@/lib/styles/palette.lib';

export const NavigationContainer = styled.div`
  height: 8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const LogoWrapper = styled(Link)`
  height: 100%;
  width: 160px;
  padding: 1rem;
`;

export const LinkContainer = styled.nav<{
  isOpen: boolean;
}>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  // 브라우저 768px < current
  @media (min-width: 768px) {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: end;
    background: none;
    left: initial;
    height: initial;
    top: initial;
    position: relative;
    border-bottom: none;
    border-bottom-right-radius: none;
    border-bottom-left-radius: none;
  }
`;

export const StyledLink = styled(Link)`
  padding: 10px 20px;
  color: inherit;
  font-size: 1.75rem;

  &.active {
    color: ${(props) => props.theme.color};
  }
`;
