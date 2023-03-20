import { useActions } from "../hooks/actions";
import { useGetCommentsToPostQuery } from "../store/data/data.api";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

interface IPostProps {
  id: number;
}

const Post = ({ id }: IPostProps) => {
  const { setOpenedPost, setOpeningPostId } = useActions();
  const { isLoading, isError, data } = useGetCommentsToPostQuery({
    postId: id,
  });

  const setOpenedPostHandler = () => {
    setOpeningPostId(id);
    if (data) setOpenedPost(data);
  };

  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Alert severity="error">error has occured fetching data</Alert>;

  if (data)
    return (
      <Link to={`/post/${id}`} onClick={setOpenedPostHandler}>
        <div className="my-3 shadow-sm bg-slate-400 p-4 flex flex-col rounded">
          <h3 className="font-bold text-xl">{data.title}</h3>
          <p>{data.body}</p>
          <div className="font-bold mt-4">
            comments: {data.comments ? data?.comments.length : 0}
          </div>
        </div>
      </Link>
    );

  return <></>;
};

export default Post;
