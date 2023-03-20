import { IComment } from "../models/interfaces";

interface ICommentProps {
  comment: IComment;
}

const Comment = ({ comment }: ICommentProps) => {
  return (
    <div className=" ml-8 rounded-xl bg-slate-300 my-4 p-4">
      <h4>
        <span className="font-bold">name:</span>
        {comment.name}
      </h4>
      <p>
        <span className="font-bold">author:</span>
        {comment.email}
      </p>
      <p className="text-xl mt-4">{comment.body}</p>
    </div>
  );
};

export default Comment;
