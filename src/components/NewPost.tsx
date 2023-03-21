import { ChangeEvent, FormEvent, useState } from "react";
import Button from "@mui/material/Button/";
import TextField from "@mui/material/TextField";
import { useAddPostMutation } from "../store/data/data.api";

const NewPost = () => {
  const [addPost, response] = useAddPostMutation();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost({ title, body, id: Math.ceil(Math.random() * 999999) })
      .unwrap()
      .then(() => {})
      .then((error: any) => {
        console.log(error);
      });
    setTitle("");
    setBody("");
  };

  const titleHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBody(e.target.value);
  };

  return (
    <form className="text-center mb-8" onSubmit={onSubmit}>
      <h3 className="my-2 font-bold text-xl">add post</h3>

      <div className="flex justify-center">
        <div className="p-2">
          <TextField
            id="outlined-basic"
            label="title"
            variant="outlined"
            value={title}
            type="text"
            onChange={(e) => titleHandler(e)}
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
            onChange={(e) => bodyHandler(e)}
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
export default NewPost;
