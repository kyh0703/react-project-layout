import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FaLock, FaUser } from 'react-icons/fa';

import Input from '@/app/ui/input/input.component';

import { useAppDispatch, useTypedSelector } from '@/app/store';
import { User, SignInDTO } from '@/app/auth/index';

import {
  SignInFormContainer,
  SignInButton,
  OtherSignInContainer,
  SignInLogo,
  ErrorMessage,
  Footer,
  TinyLink,
} from './sign-in-form.styles';

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authError = null;
  const userInfo = null;
  // const { authError, userInfo } = useAppSelector(({ users }) => ({
  // authError: users.error,
  // userInfo: users.userInfo,
  // }));

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('아이디가 입력되지 않았습니다').email('아이디는 이메일형식입니다'),
    password: Yup.string()
      .required('비밀번호가 입력되지 않았습니다')
      .min(6, '비밀번호는 최소 6자리 이상입니다')
      .max(40, '비밀번호는 최대 40자리 이하입니다'),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInDTO>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: SignInDTO) => {
    // dispatch(signInUser(data));
  };

  useEffect(() => {
    if (authError) {
      alert('로그인이 실패하였습니다');
      return;
    }
    if (userInfo) {
      navigate('/');
      return;
    }
  }, [authError, userInfo]);

  return (
    <SignInFormContainer>
      <h3>로그인</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={<FaUser />}
          isFlex={true}
          id="email"
          type="email"
          autoComplete="email"
          placeholder="아이디"
          {...register('email')}
        />
        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          label={<FaLock />}
          isFlex={true}
          id="password"
          type="password"
          autoComplete="password"
          placeholder="비밀번호"
          {...register('password')}
        />
        {errors?.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <SignInButton variant="primary" size="lg">
          로그인
        </SignInButton>
      </form>
      <OtherSignInContainer>
        <div>
          <SignInLogo imageURL="@/src/assets/image/naver-logo.png" />
          <span>구글 로그인</span>
        </div>
        <div>
          <SignInLogo imageURL="@/src/assets/image/naver-logo.png" />
          <span>카카오 로그인</span>
        </div>
        <div>
          <SignInLogo imageURL="@/src/assets/image/naver-logo.png" />
          <span>네이버 로그인</span>
        </div>
      </OtherSignInContainer>
      <Footer>
        <TinyLink to="/">아이디/비밀번호 찾기</TinyLink>
        <span>|</span>
        <TinyLink to="/auth/signup">회원가입</TinyLink>
      </Footer>
    </SignInFormContainer>
  );
};

export default SignInForm;
