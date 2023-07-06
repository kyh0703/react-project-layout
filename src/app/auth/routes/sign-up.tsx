import AuthTemplate from '@/app/auth/components/auth-template/auth-template.component';
import SignUpForm from '@/app/auth/components/sign-up-form/sign-up-form.component';

export const SignUpPage = () => {
  return (
    <AuthTemplate>
      <SignUpForm />
    </AuthTemplate>
  );
};
