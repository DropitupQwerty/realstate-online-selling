import {
  Box,
  Button,
  FormControl,
  FormGroup,
  OutlinedInput,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import global from '../../styles/global';
import { toast } from 'react-toastify';

export default function AdminAccount() {
  const [admin, setAdmin] = useState();

  const { username, password } = admin || {};

  useEffect(() => {
    axios.get(`http://localhost:3001/admin/fetch`).then((res) => {
      let data = [...res.data];
      setAdmin(...data);
    });
  }, []);

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/admin/update`, admin);
    console.log('Submitted');
    toast.success('Update Successfully', { position: 'bottom-center' });
  };

  return (
    <div>
      <h1>Admin Account</h1>

      <Box component="form" onSubmit={handleSubmit}>
        <FormGroup sx={{ width: '40%' }}>
          <FormControl sx={{ margin: '10px' }}>
            <Typography variant="h5">Username: </Typography>
            <OutlinedInput
              value={username}
              name="username"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl sx={{ margin: '10px' }}>
            <Typography variant="h5">Password: </Typography>
            <OutlinedInput
              value={password}
              name="password"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <Button sx={{ margin: '10px', ...global.btnPrimary }} type="submit">
              Save Changes
            </Button>
          </FormControl>
        </FormGroup>
      </Box>
    </div>
  );
}
