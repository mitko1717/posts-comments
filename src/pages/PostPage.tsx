import { Link } from "react-router-dom";
import { useGetCommentsToPostQuery } from "../store/data/data.api";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Comment from "../components/Comment";
import Button from "@mui/material/Button";
import NewComment from "../components/NewComment";

interface IPostProps {
  id: number;
}

const Post = ({ id }: IPostProps) => {
  const { isLoading, isError, data } = useGetCommentsToPostQuery({
    postId: id,
  });

  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Alert severity="error">error has occured fetching data</Alert>;

  if (data)
    return (
      <div className="h-[100vh] w-[80%] overflow-y-auto pb-8 mx-auto">
        <Link to={`/`}>
          <Button variant="contained">back to posts list</Button>
        </Link>

        <NewComment id={id} />

        <div className="my-3 shadow-sm bg-slate-400 p-4 flex flex-col rounded">
          <h3 className="font-bold text-xl">{data.title}</h3>
          <p>{data.body}</p>
          <div className="font-bold mt-4">
            comments: {data.comments ? data?.comments.length : 0}
          </div>
        </div>

        <div>
          {data.comments?.length ? (
            <h4 className="my-4 font-bold ml-8">comments:</h4>
          ) : (
            <h4 className="my-4 font-bold ml-8">no comments for this post</h4>
          )}
          {[...data.comments]?.reverse().map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );

  return <></>;
};

export default Post;
