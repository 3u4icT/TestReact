// src/UserDetail.js
import React from 'react';
import { Paper, Typography } from '@mui/material';

const UserDetail = ({ user }) => {
  if (!user) return null;

  return (
    <Paper sx={{ padding: '1rem', marginTop: '1rem' }}>
      <Typography variant="h5">{user.name}</Typography>
      <Typography variant="body1">Email: {user.email}</Typography>
      <Typography variant="body1">Phone: {user.phone}</Typography>
    </Paper>
  );
};

export default UserDetail;