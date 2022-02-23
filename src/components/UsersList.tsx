/* eslint-disable @typescript-eslint/no-non-null-assertion */
import UserPosts from './UserPosts';
import { User } from '../generated';

export default function UsersList({ users }: { users: User[] }): JSX.Element {
  return (
    <div>
      {users.map((u) => (
        <div>
          <div style={{ display: 'flex', marginTop: 100 }}>
            <img alt={u.name!} src={u.avatarUrl!} />
            <h2>Posts by {u.name}</h2>
          </div>
          <UserPosts key={u.id} posts={u.posts} />
        </div>
      ))}
    </div>
  );
}
