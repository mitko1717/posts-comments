import { useState } from "react";
import { useActions } from "../hooks/actions";
import { useGetCommentsToPostQuery } from "../store/data/data.api";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { useDeletePostMutation } from "../store/data/data.api";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import ModalEdit from "./ModalEdit";

interface IPostProps {
  id: number;
}

const Post = ({ id }: IPostProps) => {
  const { setOpenedPost, setOpeningPostId } = useActions();
  const { isLoading, isError, data } = useGetCommentsToPostQuery({
    postId: id,
  });
  const [deletePost, response] = useDeletePostMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDelete = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    deletePost(id)
      .unwrap()
      .then(() => {})
      .then((error: any) => {
        error && console.log(error);
      });
  };

  const onEdit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const setOpenedPostHandler = () => {
    setOpeningPostId(id);
    if (data) setOpenedPost(data);
  };

  if (isLoading) return <CircularProgress />;
  if (isError)
    return <Alert severity="error">error has occured fetching data</Alert>;

  if (data)
    return (
      <div className="relative">
        {isModalOpen && (
          <ModalEdit
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            id={id}
          />
        )}
        <div className="my-3 shadow-sm bg-slate-400 p-4 flex flex-col rounded relative">
          <div className="absolute top-1 right-1 flex gap-x-2 z-10">
            <Button variant="outlined" startIcon={<Edit />} onClick={onEdit}>
              Edit
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={onDelete}
            >
              Delete
            </Button>
          </div>
          <Link
            to={`/post/${id}`}
            onClick={setOpenedPostHandler}
            className="relative mt-4"
          >
            <h3 className="font-bold text-xl">{data.title}</h3>
            <p>{data.body}</p>
            <div className="font-bold mt-4">
              comments: {data.comments ? data?.comments.length : 0}
            </div>
          </Link>
        </div>
      </div>
    );

  return <></>;
};

export default Post;
