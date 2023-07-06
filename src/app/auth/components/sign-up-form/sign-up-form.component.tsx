import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Input from '@/app/ui/input/input.component';

import { User, SignUpDTO } from '@/app/auth/index';
import { useAppDispatch, useTypedSelector } from '@/app/store';

import {
  SignUpFormContainer,
  SignUpButton,
  SignUpButtonContainer,
  Footer,
  ErrorMessage,
} from './sign-up-form.styles';

const SignUpForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authError = null;
  const success = null;

  // const { authError, success } = useTypedSelector<"auth">((auth) => {
  //   authError: users.error,
  //   success: users.success,
  // }));

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('아이디가 입력되지 않았습니다').email('아이디는 이메일형식입니다'),
    username: Yup.string()
      .required('이름이 입력되지 않았습니다')
      .min(2, '이름은 최소 2자리 이상입니다')
      .max(20, '이름은 최대 20자리 이하입니다'),
    password: Yup.string()
      .required('비밀번호가 입력되지 않았습니다')
      .min(6, '패스워드는 최소 6자리 이상입니다')
      .max(40, '패스워드는 최대 20자리 이하입니다'),
    passwordConfirm: Yup.string()
      .required('비밀번호 확인이 입력되지 않았습니다')
      .oneOf([Yup.ref('password')], '비밀번호가 일치 하지 않습니다'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDTO>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (dto: SignUpDTO) => {
    // dispatch(signUpUser(dto));
  };

  useEffect(() => {
    if (authError) {
      alert(`회원가입이 실패하였습니다\n${authError}`);
      return;
    }
    if (success) {
      alert(`회원가입이 성공하였습니다`);
      // TODO login 처리를 바로?
      navigate('/signin');
    }
  }, [authError, success]);

  const onCancel = () => {
    navigate('/');
  };

  return (
    <SignUpFormContainer>
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="아이디" id="email" type="email" autoComplete="email" {...register('email')} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input label="이름" id="username" type="username" {...register('username')} />
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
        <Input
          label="비밀번호"
          id="password"
          type="password"
          autoComplete="new-password"
          {...register('password')}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <Input
          label="비밀번호 재확인"
          id="passwordConfirm"
          type="password"
          autoComplete="new-password"
          {...register('passwordConfirm')}
        />
        {errors.passwordConfirm && <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>}
        <SignUpButtonContainer>
          <SignUpButton variant="primary" size="lg" type="submit">
            회원가입
          </SignUpButton>
          <SignUpButton variant="inverse" size="lg" onClick={onCancel}>
            돌아가기
          </SignUpButton>
        </SignUpButtonContainer>
      </form>
      <Footer>
        <Link to="/auth/signin">로그인</Link>
      </Footer>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
