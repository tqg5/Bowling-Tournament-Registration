import { useEffect } from 'react';
import { useQuery } from 'urql';
import {
  Box,
  ThemeProvider,
  Flex,
  Button,
  Text,
  Message
} from 'theme-ui';
import User from 'components/types/User';
import theme from './theme';

const GetAllUsers = `
  query {
      users {
          id
          firstName
          lastName
          email
          average
      }
  }
`;

interface UserListProps {
  refreshList: boolean;
}
const UserList = ({
  refreshList
}: UserListProps) => {
  const [getAllUsersResult, getAllUsers] = useQuery({ query: GetAllUsers });

  const { data, fetching, error } = getAllUsersResult;

  useEffect(() => {
    if(refreshList) {
      getAllUsers({ requestPolicy: 'network-only' });
    }
  }, [ refreshList ]);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
 
  return (
    <ThemeProvider
      theme={theme}
    >
      <Box
        variant='listWrapper'
      >
        <h1>User List</h1>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Average</th>
          </tr>
          {data.users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.average}</td>
            </tr>
          ))}
        </table>
      </Box>
    </ThemeProvider>
  );
}

export default UserList;