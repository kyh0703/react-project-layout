import { useState, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useAppDispatch, useTypedSelector } from '@/app/store';
import storage from '@/lib/storage/storage.lib';
import { themeActions } from '@/app/theme/services/theme.slice';

import { HeaderContainer, LinkContainer, StyledLink, ThemeLogoWrapper } from './header.styles';
import { selectTheme } from '@/app/theme/services/theme.selector';

type HeaderProps = {
  onLogout?: () => void;
};

const Header = ({ onLogout }: HeaderProps) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // 임시코드
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  const theme = useTypedSelector(selectTheme);
  const dispatch = useAppDispatch();

  // handle toggle theme button event
  const handleThemeClick = (e: MouseEvent<HTMLOrSVGElement>) => {
    if (theme === 'dark') {
      dispatch(themeActions.enableLightMode());
    } else {
      dispatch(themeActions.enableDarkMode());
    }
  };

  return (
    <>
      <HeaderContainer>
        <LinkContainer>
          <StyledLink to="/auth/signin">로그인</StyledLink>
          <p>&nbsp;|&nbsp;</p>
          <StyledLink to="/auth/signup">회원가입</StyledLink>
          <p>&nbsp;|</p>
          <ThemeLogoWrapper>
            {theme === 'dark' ? (
              <FaMoon onClick={handleThemeClick} />
            ) : (
              <FaSun onClick={handleThemeClick} />
            )}
          </ThemeLogoWrapper>
        </LinkContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
