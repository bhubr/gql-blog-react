import { Post as IPost } from '../generated';
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
