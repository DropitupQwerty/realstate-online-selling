import {
  AppBar,
  Box,
  Button,
  FormControl,
  FormGroup,
  OutlinedInput,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import global from '../../styles/global';

export default function AdminLogin() {
  return (
    <div>
      <AppBar>
        <Toolbar>Admin Login</Toolbar>
      </AppBar>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h2"
          sx={{ marginBottom: '12px', fontWeight: 'bold' }}
        >
          Adminastrator Login
        </Typography>
        <Paper sx={{ width: '500px', height: '400px', padding: '40px' }}>
          <FormGroup>
            <FormControl>
              <Typography variant="h4">Username : </Typography>
              <OutlinedInput sx={{ ...global.formInput }}></OutlinedInput>
            </FormControl>
            <FormControl>
              <Typography variant="h4">Password : </Typography>
              <OutlinedInput sx={{ ...global.formInput }}></OutlinedInput>
            </FormControl>
            <FormControl>
              <Button sx={{ ...global.buttonLogin }}>Login</Button>
            </FormControl>
          </FormGroup>
        </Paper>
      </Box>
    </div>
  );
}
