import { useEffect, useState } from "react";
import {
  useGetPostsQuery,
  useGetAllCommentsQuery,
} from "../store/data/data.api";
import { useAppSelector } from "../hooks/redux";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Post from "./Post";

const Posts = () => {
  const { isLoading, isError, data } = useGetPostsQuery("");
  const allComments = useGetAllCommentsQuery("").data;

  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Alert severity="error">error has occured fetching data</Alert>;

  return (
    <div className="w-[80%] flex mx-auto flex-col overflow-y-auto h-full">
      {data &&
        data.map((item) => {
          let commentsToPost = allComments
            ? allComments.filter((com) => com.postId === item.id)
            : [];

          return <Post key={item.id} item={item} comments={commentsToPost} />;
        })}
    </div>
  );
};

export default Posts;
