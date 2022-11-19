import {
  FormControl,
  FormGroup,
  OutlinedInput,
  Paper,
  Button,
  Typography,
} from '@mui/material';
import React from 'react';
import Navbar from './../components/Navbar';
import global from '../styles/global';

export default function Login() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Paper sx={{ width: '400px', padding: '30px' }}>
          <Typography variant="h3" sx={{ marginBottom: '20px' }}>
            Login
          </Typography>
          <FormGroup>
            <FormControl sx={{ ...global.formInput }}>
              <OutlinedInput placeholder="Email" />
            </FormControl>
            <FormControl sx={{ ...global.formInput }}>
              <OutlinedInput placeholder="Password" />
            </FormControl>
            <FormControl>
              <Button sx={{ ...global.buttonLogin }}>Login</Button>
            </FormControl>
          </FormGroup>
        </Paper>
      </div>
    </div>
  );
}
