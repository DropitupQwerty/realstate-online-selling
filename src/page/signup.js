import React from 'react';
import {
  Paper,
  FormGroup,
  OutlinedInput,
  FormControl,
  Button,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import global from '../styles/global';
import Navbar from '../components/Navbar';

export default function SignUp() {
  return (
    <div>
      <Navbar />
      <div className="login-container">
        <Paper
          sx={{ width: '600px', padding: '20px', margin: '50px' }}
          elevation={2}
        >
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', margin: '20px', fontSize: '20px' }}
          >
            Register User <LockOutlinedIcon />
          </Typography>
          <FormGroup>
            <FormControl>
              <OutlinedInput
                requuired
                type="text"
                placeholder="Fullname"
                sx={{ ...global.formInput }}
              ></OutlinedInput>
            </FormControl>
            <FormControl>
              <OutlinedInput
                type="number"
                placeholder="Phone Number"
                sx={{ ...global.formInput }}
              ></OutlinedInput>
            </FormControl>
            <FormControl>
              <OutlinedInput
                type="text"
                placeholder="Address"
                sx={{ ...global.formInput }}
              ></OutlinedInput>
            </FormControl>
            <FormControl>
              <OutlinedInput
                type="text"
                placeholder="Email"
                sx={{ ...global.formInput }}
              ></OutlinedInput>
            </FormControl>
            <FormControl>
              <OutlinedInput
                type="text"
                placeholder="Password"
                sx={{ ...global.formInput }}
              ></OutlinedInput>
            </FormControl>

            <Button sx={{ ...global.buttonLogin }}> Submit</Button>
          </FormGroup>
        </Paper>
      </div>
    </div>
  );
}
