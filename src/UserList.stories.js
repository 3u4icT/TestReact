// src/UserList.stories.js
import React from 'react';
import UserList from './UserList';

export default {
  title: 'UserList',
  component: UserList,
};

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
];

export const Default = () => (
  <UserList users={users} onSelectUser={(user) => alert(user.name)} />
);