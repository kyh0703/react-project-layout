import { FC, HTMLAttributes } from 'react';

import { AuthTemplateContainer, AuthBox } from './auth-template.styles';

const AuthTemplate: FC<HTMLAttributes<HTMLSpanElement>> = ({ children }) => {
  return (
    <AuthTemplateContainer>
      <AuthBox>{children}</AuthBox>
    </AuthTemplateContainer>
  );
};

export default AuthTemplate;
