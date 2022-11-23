import {
  FormControl,
  FormGroup,
  OutlinedInput,
  Paper,
  Button,
  Typography,
  Box,
  Dialog,
  FormHelperText,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react';
import global from '../styles/global';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login({ open, cancel }) {
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
      if (response.data.error) {
        console.log(response.data.error);
        return;
      }
      console.log(response.data);
      sessionStorage.setItem('UID', response.data.uid);
    });
  };

  return (
    <div>
      <Dialog open={open}>
        <Box component="form" onSubmit={handleSubmit}>
          <Paper
            sx={{
              width: '600px',
              padding: '30px',
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: '10px',
                right: '20px',
              }}
              onClick={cancel}
            >
              <CloseIcon sx={{ fontSize: '30px' }} />
            </IconButton>
            <Typography
              variant="h3"
              sx={{ margin: '0px 0 20px 0', fontWeight: '700' }}
            >
              Login
            </Typography>
            <FormGroup>
              <FormControl>
                <OutlinedInput
                  placeholder="Email"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                  sx={{ ...global.formInput }}
                />
              </FormControl>
              <FormControl>
                <OutlinedInput
                  placeholder="Password"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                  sx={{ ...global.formInput }}
                />
              </FormControl>
              <FormControl>
                <Button sx={{ ...global.buttonLogin }} type="submit">
                  Login
                </Button>
                <FormHelperText sx={{ fontSize: '13px' }}>
                  By continuing, you agree to Canva's <Link>Terms of Use</Link>{' '}
                  . Read our <Link>Privacy Policy</Link>
                </FormHelperText>
              </FormControl>
            </FormGroup>
          </Paper>
        </Box>
      </Dialog>
    </div>
  );
}
