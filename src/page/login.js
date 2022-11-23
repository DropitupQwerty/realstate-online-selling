import {
  FormControl,
  FormGroup,
  OutlinedInput,
  Paper,
  Button,
  Typography,
  Box,
} from '@mui/material';
import React, { useState } from 'react';
import Navbar from './../components/Navbar';
import global from '../styles/global';
import axios from 'axios';

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/user/login', login).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Box component="form" onSubmit={handleSubmit}>
          <Paper sx={{ width: '400px', padding: '30px' }}>
            <Typography variant="h3" sx={{ marginBottom: '20px' }}>
              Login
            </Typography>
            <FormGroup>
              <FormControl sx={{ ...global.formInput }}>
                <OutlinedInput
                  placeholder="Email"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ ...global.formInput }}>
                <OutlinedInput
                  placeholder="Password"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                />
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
    </div>
  );
}
