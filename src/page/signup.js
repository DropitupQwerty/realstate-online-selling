import React, { useState } from 'react';
import {
  Paper,
  FormGroup,
  OutlinedInput,
  FormControl,
  Button,
  Typography,
  FormHelperText,
  Box,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import global from '../styles/global';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({
    fullname: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
          <Box component="form" onSubmit={handleSubmit}>
            <FormGroup>
              <FormControl>
                <OutlinedInput
                  type="text"
                  placeholder="Fullname"
                  sx={{ ...global.formInput }}
                  name="fullname"
                  value={userInfo.fullname}
                  onChange={handleChange}
                  endAdornment={<PersonIcon fontSize="large" />}
                ></OutlinedInput>
              </FormControl>
              <FormControl>
                <OutlinedInput
                  type="number"
                  placeholder="(+639) Phone Number"
                  sx={{ ...global.formInput }}
                  name="phoneNumber"
                  value={userInfo.phoneNumber}
                  onChange={handleChange}
                  endAdornment={<ContactsIcon fontSize="large" />}
                ></OutlinedInput>
              </FormControl>
              <FormControl>
                <OutlinedInput
                  type="text"
                  placeholder="Address"
                  sx={{ ...global.formInput }}
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                  endAdornment={<HomeIcon fontSize="large" />}
                ></OutlinedInput>
              </FormControl>
              <FormControl>
                <OutlinedInput
                  type="text"
                  placeholder="Email"
                  sx={{ ...global.formInput }}
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  endAdornment={<EmailIcon fontSize="large" />}
                ></OutlinedInput>
              </FormControl>
              <FormControl>
                <OutlinedInput
                  type="password"
                  placeholder="Password"
                  sx={{ ...global.formInput }}
                  name="password"
                  value={userInfo.password}
                  onChange={handleChange}
                  endAdornment={<PasswordIcon fontSize="large" />}
                ></OutlinedInput>
              </FormControl>
              <FormControl>
                <FormHelperText
                  sx={{ fontSize: '13px', margin: '15px 0 10px 0' }}
                >
                  By continuing, you agree to Canva's <Link>Terms of Use</Link>{' '}
                  . Read our <Link>Privacy Policy</Link>
                </FormHelperText>
                <Button sx={{ ...global.buttonLogin }} type="submit">
                  Submit
                </Button>

                <FormHelperText
                  sx={{
                    fontSize: '13px',
                    margin: '15px 0 10px 0',
                    textAlign: 'center',
                  }}
                >
                  Already Have Account? <Link to="/login">Login</Link>
                </FormHelperText>
              </FormControl>
            </FormGroup>
          </Box>
        </Paper>
      </div>
    </div>
  );
}
