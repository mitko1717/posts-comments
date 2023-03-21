import { ChangeEvent, FormEvent, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import Button from "@mui/material/Button/";
import TextField from "@mui/material/TextField";
import { useAddCommentMutation } from "../store/data/data.api";

interface INewCommentProps {
    id: number;
  }

const NewComment = ({ id }: INewCommentProps) => {
  const { } = useAppSelector((state) => state.data);
  const { } = useActions();
  const [addComment, response] = useAddCommentMutation()
  const [name, setName] = useState('')
  const [body, setBody] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addComment({name, body, email, postId: id, id: Math.random()})

    setName("")
    setBody("")
    setEmail("")
  };
  const nameHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(e.target.value)
  }
  const bodyHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBody(e.target.value)
  }
  const emailHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value)
  }

  return (
    <form className="text-center mb-8" onSubmit={onSubmit}>
      <h3 className="my-2 font-bold text-xl">add comment</h3>

      <div className="flex justify-center">
        <div className="p-2">
            <TextField 
                id="outlined-basic" 
                label="name" 
                variant="outlined" 
                value={name}
                type="text"
                onChange={e => nameHandler(e)}
                required
            />
        </div>
        <div className="p-2">
            <TextField 
                id="outlined-basic" 
                label="body" 
                variant="outlined" 
                value={body}
                type="text"
                onChange={e => bodyHandler(e)}
                required
            />
        </div>
        <div className="p-2">
            <TextField 
                id="outlined-basic" 
                label="email" 
                variant="outlined" 
                value={email}
                type="text"
                onChange={e => emailHandler(e)}
                required
            />
        </div>
      </div>


      <div className="mt-4 ml-2">
        <Button variant="contained" type="submit">
          <span className="text-2xl font-bold text-gray-400">send</span>
        </Button>
      </div>
    </form>
  );
};
export default NewComment;
