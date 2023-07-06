import { ReactNode } from 'react';

import Header from '@/app/ui/layout/header/header.component';
import Navigation from '@/app/ui/layout/navigation/navigation.component';
import Footer from '@/app/ui/layout/footer/footer.component';

import { MainWrapper } from './main.styles';

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <div>
      <Header />
      <Navigation />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  );
};

export default Main;
