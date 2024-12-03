// src/App.js
import React, { useState } from 'react';
import { Container } from '@mui/material';
import UserList from './UserList';
import UserDetail from './UserDetail';
import CustomHeader from './CustomHeader';
import ControlledForm from './ControlledForm'
import Timer from './Timer';

// Sample User Data
const usersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '456-123-7890' },
];

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
      <Container>
        {/* < ControlledForm></ControlledForm> */}
        {/* <Timer></Timer> */}
        <CustomHeader title="User Management New" />
        <UserList onSelectUser={setSelectedUser} />
        <UserDetail user={selectedUser} />
       
      </Container>
  );
}

export default App;