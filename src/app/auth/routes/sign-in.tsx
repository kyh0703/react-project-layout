import AuthTemplate from '@/app/auth/components/auth-template/auth-template.component';
import SignInForm from '@/app/auth/components/sign-in-form/sign-in-form.component';

export const SignInPage = () => {
  return (
    <AuthTemplate>
      <SignInForm />
    </AuthTemplate>
  );
};
