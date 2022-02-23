/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Post as IPost } from '../generated';
import Comment from './Comment';

export default function Post({ post }: { post: IPost }): JSX.Element {
  return (
    <div>
      <h3>{post.title}</h3>
      <ul>
        {post.comments.map((c) => (
          <li key={c.id}>
            {c.author && (
              <img
                style={{ maxWidth: 20, borderRadius: '50%' }}
                src={c.author?.avatarUrl!}
                alt={c.author?.name!}
              />
            )}
            <Comment comment={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}
