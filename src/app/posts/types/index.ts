// fetchPostsDTO
export type PostsRequestDTO = {
  tag: string | null;
  page: number | null;
  username?: string;
};

export type PostsResponseDTO = {
  posts: Post[] | null;
  lastPage: number;
};

export type InputPayload = {
  key: 'body' | 'title' | 'tags';
  value: string | string[];
};

export type ValidationErrors = {
  status: number;
  message: string | null | undefined;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  publishAt: Date;
  userId: number;
  username: string;
};
