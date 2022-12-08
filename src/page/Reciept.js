import { Box, Divider, Paper, Typography, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import global from './../styles/global';
import { useReactToPrint } from 'react-to-print';

export default function Reciept() {
  const uid = sessionStorage.getItem('UID');
  const paymentinfo = JSON.parse(sessionStorage.getItem('PaymentInfo'));
  const [user, setUser] = useState({
    fullname: '',
    contact: '',
    address: '',
    email: '',
    password: '',
    credentialurl: '',
  });
  const componentref = useRef();

  const { fullname, contact, address, email, property, amountpaid } =
    paymentinfo || {};

  const handlePrint = useReactToPrint({
    content: () => componentref.current,
    documentTitle: 'emp-data',
    onAfterPrint: () => {
      alert('Print');
    },
  });

  console.log(user);
  useEffect(() => {
    axios.get(`http://localhost:3001/user/fetch/${uid}`).then((res) => {
      setUser(res.data);
    });
    axios.get(`http://localhost:3001/reservation/fetch/${uid}`).then((res) => {
      setUser(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          sx={{
            width: '400px',
            marginTop: '70px',
            padding: '20px',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          component="div"
          ref={componentref}
        >
          <div>
            <Typography
              sx={{
                textAlign: 'center',
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              Real State Online Reservation and Inquiry
            </Typography>

            <Typography>Name: {fullname}</Typography>
            <Typography>Contact Number: {contact}</Typography>
            <Typography>Address: {address}</Typography>
            <Typography>Email Address: {email}</Typography>
            <Typography sx={{ marginTop: '20px' }}>
              Reserved Property: {property}
            </Typography>
          </div>
          <div>
            <Divider />
            <Typography variant="h6" sx={{ marginTop: '50px' }}>
              Amount Paid: ₱ <b>{amountpaid}</b>
            </Typography>
          </div>
        </Paper>
        <div style={{ marginTop: '20px' }}>
          <Button
            sx={{ ...global.btnPrimary, margin: '0 10px' }}
            onClick={handlePrint}
          >
            PRINT
          </Button>
          <Button
            component={Link}
            to="/"
            sx={{ ...global.btnSecondary, margin: '0 10px' }}
          >
            BACK
          </Button>
        </div>
      </Box>
    </div>
  );
}
