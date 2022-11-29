import {
  Box,
  Button,
  FormControl,
  FormGroup,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React from 'react';
import global from '../../styles/global';

export default function AdminAccount() {
  return (
    <div>
      <h1>Admin Account</h1>

      <div>
        <FormGroup sx={{ width: '40%' }}>
          <FormControl sx={{ margin: '10px' }}>
            <Typography variant="h5">Username: </Typography>
            <OutlinedInput />
          </FormControl>
          <FormControl sx={{ margin: '10px' }}>
            <Typography variant="h5">Password: </Typography>
            <OutlinedInput />
          </FormControl>
          <FormControl>
            <Button sx={{ margin: '10px', ...global.btnPrimary }}>Save</Button>
          </FormControl>
        </FormGroup>
      </div>
    </div>
  );
}
