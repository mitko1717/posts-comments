import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IComment, IPost } from "./../../models/interfaces";

interface IQueries {
  postId: number;
}

export const dataApi = createApi({
  reducerPath: "posts/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog-api-t6u0.onrender.com/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getPosts: build.query<IPost[], "">({
      query: () => ({
        url: `posts`,
      }),
      transformResponse: (response: IPost[]) => response,
    }),

    getAllComments: build.query<IComment[], "">({
      query: () => ({
        url: `comments`,
      }),
      transformResponse: (response: IComment[]) => response,
    }),

    getCommentsToPost: build.query<IPost[], IQueries>({
      query: ({ postId }) => ({
        url: `posts`,
        params: {
          _: postId,
          _embed: 'comments',
        },
      }),
      transformResponse: (response: IPost[]) => response,
    }),   
  }),
});

export const { useGetPostsQuery, useGetCommentsToPostQuery, useGetAllCommentsQuery } = dataApi;
