// src/CustomHeader.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const CustomHeader = ({ title, onLogin, showLogin }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {showLogin && (
          <Button color="inherit" onClick={onLogin}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;