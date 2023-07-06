import { Navigate, Routes, Route } from 'react-router-dom';

import { SignInPage } from './sign-in';
import { SignUpPage } from './sign-up';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
