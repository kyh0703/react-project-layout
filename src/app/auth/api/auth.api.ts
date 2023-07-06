import { api } from '@/app/api';

import { User, SignUpDTO, SignInDTO } from '../types';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<User, Partial<SignUpDTO>>({
      query(body) {
        return {
          url: '/api/users/signup',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Auth'],
    }),
    signIn: build.mutation<User, Partial<SignInDTO>>({
      query(body) {
        return {
          url: '/api/users/signip',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Auth'],
    }),
    signOut: build.mutation<boolean, number>({
      query(body) {
        return {
          url: '/api/users/signout',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Auth'],
    }),
    getUsers: build.query<User, number>({
      query: (id) => `/api/users/${id}`,
      providesTags: (_result, _err, id) => [{ type: 'Auth', id }],
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useSignOutMutation,
  useGetUsersQuery,
} = authApi;
