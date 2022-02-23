import { IPost } from './types';
import Post from './Post';

export default function UserPosts({ posts }: { posts: IPost[] }): JSX.Element {
  return (
    <div>
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}
