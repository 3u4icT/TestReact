// src/UserDetail.stories.js
import React from 'react';
import UserDetail from './UserDetail';

export default {
  title: 'UserDetail',
  component: UserDetail,
};

const user = { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' };

export const Default = () => <UserDetail user={user} />;