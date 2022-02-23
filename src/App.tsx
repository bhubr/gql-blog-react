import { useQuery, gql } from '@apollo/client';

import { IUser } from './types';
import UsersList from './components/UsersList';
import './App.css';

interface IUsersListData {
  users: IUser[];
}

const GET_USERS_POSTS = gql`
  query Users {
    users {
      id
      name
      posts {
        id
        title
        comments {
          id
          text
          author {
            name
            avatarUrl
          }
        }
      }
      avatarUrl
    }
  }
`;

function App(): JSX.Element {
  const { loading, error, data } = useQuery<IUsersListData>(GET_USERS_POSTS);

  return (
    <div className="App">
      <h1>GraohQL Blog</h1>
      <p>Load a lot of nested data</p>
      {error && <p>Error while fetching: {error?.message}</p>}
      {loading && <p>Loading data</p>}
      {data && <UsersList users={data.users} />}
    </div>
  );
}

export default App;
