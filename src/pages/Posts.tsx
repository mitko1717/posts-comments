import { useGetPostsQuery } from "../store/data/data.api";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Post from "../components/Post";
import NewPost from "../components/NewPost";

const Posts = () => {
  const { isLoading, isError, data } = useGetPostsQuery("");

  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Alert severity="error">error has occured fetching data</Alert>;

  return (
    <>
      <NewPost />
      <div className="w-[80%] flex mx-auto flex-col overflow-y-auto pb-8">
        {data &&
          [...data]
            .reverse()
            // .slice(0, 5)
            .map((item) => {
              return <Post key={item.id} id={item.id} />;
            })}
      </div>
    </>
  );
};

export default Posts;
