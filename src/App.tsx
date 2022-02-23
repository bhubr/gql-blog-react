import { User, useUsersQuery } from './generated';
import UsersList from './components/UsersList';
import './App.css';
import './style.css';

function App(): JSX.Element {
  const { loading, error, data } = useUsersQuery();

  return (
    <div className="App">
      <h1>GraohQL Blog</h1>
      <p>Load a lot of nested data</p>
      {error && <p>Error while fetching: {error?.message}</p>}
      {loading && <p>Loading data</p>}
      {data?.users && <UsersList users={data.users as User[]} />}
    </div>
  );
}

export default App;
