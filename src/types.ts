export interface IComment {
  id: string;
  text: string;
  author: IUser;
}

export interface IPost {
  id: string;
  title: string;
  comments: IComment[];
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  posts: IPost[];
}
