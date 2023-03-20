export interface IPost {
    id: number
    title: string
    body: string
  }

export interface IPostWithComments {
    id: number
    title: string
    body: string
    comments: IComment[] | null
  }
  
export interface IComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
  }

export interface IComments {
    comments: IComment[]
  }