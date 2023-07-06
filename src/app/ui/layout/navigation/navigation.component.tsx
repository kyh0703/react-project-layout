import { useState } from 'react';

import { ReactComponent as MonsterLogo } from '@/assets/image/Vampire.svg';

import { NavigationContainer, LinkContainer, LogoWrapper, StyledLink } from './navigation.styles';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen((state) => !state);
  };

  return (
    <NavigationContainer>
      <LogoWrapper to="/">
        <MonsterLogo />
      </LogoWrapper>
      <LinkContainer isOpen={menuOpen}>
        <StyledLink to="/">백테스트</StyledLink>
        <StyledLink to="/">자산배분</StyledLink>
        <StyledLink to="/">포트폴리오 추출</StyledLink>
        <StyledLink to="/">전략 예시</StyledLink>
        <StyledLink to="/">사용권 구매</StyledLink>
        <StyledLink to="/">고객지원</StyledLink>
      </LinkContainer>
    </NavigationContainer>
  );
};

export default Navigation;
