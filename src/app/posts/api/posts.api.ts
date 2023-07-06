import { api } from '@/app/api';

import { Post, PostsRequestDTO, PostsResponseDTO } from '../types';

export const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    addPost: build.mutation<Post, Partial<Post>>({
      query(body) {
        return {
          url: '/api/posts',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Posts'],
    }),
    getPost: build.query<Post, number>({
      query: (id) => `/api/posts/${id}`,
      providesTags: (_result, _err, id) => [{ type: 'Posts', id }],
    }),
    getPosts: build.query<PostsResponseDTO, PostsRequestDTO>({
      query: (data) => ({
        url: '/api/posts',
        params: data,
      }),
    }),
    updatePost: build.mutation<Post, Partial<Post>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/api/posts/${id}`,
          method: 'PUT',
        };
      },
    }),
    deletePost: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `/api/posts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (post) => [{ type: 'Posts', id: post?.id }],
    }),
  }),
});

export const {
  useAddPostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
