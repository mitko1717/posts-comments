import { useEffect } from "react";
import { useGetPostsQuery } from "../store/data/data.api";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Post from "../components/Post";
// import { Link } from "react-router-dom";
import { useActions } from "../hooks/actions";
import NewPost from "../components/NewPost";

const Posts = () => {
  const { isLoading, isError, data } = useGetPostsQuery("");

  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Alert severity="error">error has occured fetching data</Alert>;

  return (
    <>
      <NewPost />
      <div className="w-[80%] flex mx-auto flex-col overflow-y-auto h-full">
      {data &&
        [...data]
          .reverse()
          .slice(0, 5)
          .map((item) => {
            return <Post key={item.id} id={item.id} />;
          })}
      </div>
    </>
  );
};

export default Posts;
