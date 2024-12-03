// src/UserList.js
import React from 'react';
import useFetch from './useFetch';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const UserList = ({onSelectUser }) => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <List>
      {data.map((user) => (
        <ListItem button key={user.id} onClick={() => onSelectUser(user)}>
          <ListItemText primary={user.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;

// import React from 'react';


// function UserList() {
//   const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <ul>
//       {data.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default UserList;