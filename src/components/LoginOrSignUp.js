import { Box, Button, Dialog, IconButton, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import global from '../styles/global';
import { Link } from 'react-router-dom';

export default function LoginOrSignUp({ open, cancel, openLogin }) {
  return (
    <div>
      <Dialog open={open}>
        <Box sx={{ width: '500px', padding: '60px 40px' }}>
          <Typography
            variant="h5"
            sx={{ textAlign: 'center', margin: '10px 0' }}
          >
            Welcome to Real Estate Online Reservation and Inquiry
          </Typography>
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

          <Button sx={{ ...global.buttonLogin }} fullWidth onClick={openLogin}>
            LOGIN
          </Button>
          <Typography
            variant="h5"
            sx={{ textAlign: 'center', margin: '10px 0' }}
          >
            Or
          </Typography>
          <Button
            sx={{ ...global.btnSecondary }}
            fullWidth
            component={Link}
            to="/sign-up"
          >
            Sign Up
          </Button>

          <Typography>
            By continuing, you agree to Real Estate inquiry and reservation{' '}
            <Link>Terms of Use</Link> . Read our <Link>Privacy Policy</Link>
          </Typography>
        </Box>
      </Dialog>
    </div>
  );
}
