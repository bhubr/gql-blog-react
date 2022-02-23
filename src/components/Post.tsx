import { IPost } from '../types';

export default function Post({ post }: { post: IPost }): JSX.Element {
  return (
    <div>
      <h3>{post.title}</h3>
      <ul>
        {post.comments.map((c) => (
          <li key={c.id}>
            <img
              style={{ maxWidth: 20, borderRadius: '50%' }}
              src={c.author.avatarUrl}
              alt={c.author.name}
            />
            {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
