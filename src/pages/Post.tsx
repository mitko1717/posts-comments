import { useActions } from '../hooks/actions';
import { IComment, IPost } from '../models/interfaces'

interface IPostProps {
    item: IPost
    comments: IComment[] | []
}

const Post = ({ item, comments }: IPostProps ) => {
  const { setOpenedPost } = useActions();

  const setOpenedPostHandler = () => {
    setOpenedPost({...item, comments})
  }
  
  if (item)
  return (
    <div className="my-3 shadow-sm bg-slate-400 p-4 flex flex-col rounded" onClick={setOpenedPostHandler}>
        <h3 className="font-bold text-xl">{item.title}</h3>
        <p>{item.body}</p>
        <div className='font-bold mt-4'>comments: {comments.length}</div>
    </div>
  )

  return <></>
}

export default Post