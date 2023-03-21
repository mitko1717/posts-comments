import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IComment, IPost, IPostWithComments } from "./../../models/interfaces";

interface IQueries {
  postId: number;
}

export const dataApi = createApi({
  reducerPath: "posts/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog-api-t6u0.onrender.com/",
  }),
  tagTypes: ['Post'],
  refetchOnFocus: true,
  endpoints: (build) => ({
    getPosts: build.query<IPost[], "">({
      query: () => ({
        url: `posts`,
      }),
      providesTags: ['Post'],
      transformResponse: (response: IPost[]) => response,
    }),

    getAllComments: build.query<IComment[], "">({
      query: () => ({
        url: `comments`,
      }),
      providesTags: ['Post'],
      transformResponse: (response: IComment[]) => response,
    }),

    getCommentsToPost: build.query<IPostWithComments, IQueries>({
      query: ({ postId }) => ({
        url: `posts/${postId}/`,
        params: {
          _embed: "comments",
        },
      }),
      providesTags: ['Post'],
      transformResponse: (response: IPostWithComments) => response,
    }),

    addPost: build.mutation<null, IPost>({
      query: (payload) => ({
        url: '/posts',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }),

    addComment: build.mutation<null, IComment>({
      query: (payload) => ({
        url: '/comments',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetCommentsToPostQuery,
  useGetAllCommentsQuery,
  useAddPostMutation,
  useAddCommentMutation
} = dataApi;
