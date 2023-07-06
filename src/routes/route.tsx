import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/global.styles';
import MainLayout from '@/app/ui/layout/main/main.component';

import { AuthRoutes } from '@/app/auth/routes';
import PostsRoutes from '@/app/posts/routes';

import { useTypedSelector } from '@/app/store';
import { selectTheme } from '@/app/theme/services/theme.selector';
import { darkTheme, lightTheme } from '@/app/theme';

const App = () => {
  const theme = useTypedSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainLayout>
    </ThemeProvider>
  );
};

export const Router = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/auth/*', element: <AuthRoutes /> },
      { path: '/posts/*', element: <PostsRoutes /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
