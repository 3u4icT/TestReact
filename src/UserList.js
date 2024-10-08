// src/UserList.js
import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const UserList = ({ users, onSelectUser }) => {
  return (
    <List>
      {users.map((user) => (
        <ListItem button key={user.id} onClick={() => onSelectUser(user)}>
          <ListItemText primary={user.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;