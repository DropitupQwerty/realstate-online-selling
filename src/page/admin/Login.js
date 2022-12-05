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
import axios from 'axios';
import React, { useState } from 'react';
import global from '../../styles/global';
import { toast } from 'react-toastify';

export default function AdminLogin() {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/admin/login', login).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
        toast.error('Please try again');
        return;
      }

      console.log(response.data);
      sessionStorage.setItem('ADMIN', response.data.uid);
      window.location.replace('/admin/reservations');
    });
  };

  return (
    <div>
      <AppBar>
        <Toolbar>Admin Login</Toolbar>
      </AppBar>
      <Box
        component="form"
        onSubmit={handleSubmit}
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
          variant="h4"
          sx={{ marginBottom: '12px', fontWeight: 'bold' }}
        >
          Administrator Login
        </Typography>
        <Paper sx={{ width: '500px', height: '400px', padding: '40px' }}>
          <FormGroup>
            <FormControl>
              <Typography variant="h6">Username : </Typography>
              <OutlinedInput
                sx={{ ...global.formInput }}
                name="username"
                value={login.username}
                onChange={handleChange}
                placeholder="username"
              ></OutlinedInput>
            </FormControl>
            <FormControl>
              <Typography variant="h6">Password : </Typography>
              <OutlinedInput
                placeholder="password"
                sx={{ ...global.formInput }}
                name="password"
                value={login.password}
                onChange={handleChange}
                required
                type="password"
              ></OutlinedInput>
            </FormControl>
            <FormControl>
              <Button sx={{ ...global.buttonLogin }} type="submit">
                Login
              </Button>
            </FormControl>
          </FormGroup>
        </Paper>
      </Box>
    </div>
  );
}
