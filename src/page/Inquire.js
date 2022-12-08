import {
  Box,
  Button,
  FormControl,
  FormGroup,
  IconButton,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import global from '../styles/global';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { getProperty } from '../fakeApi/fakehouesapi';
import { useParams, useNavigate, Link } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';

export default function Reservation({ open, cancel }) {
  const [property, setProperty] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [billingAccount, setBillingAccount] = useState({});

  const { image } = property || {};

  const { fullname, contact, address, email, credentialurl } = user || {};

  useEffect(() => {
    const getProp = () => {
      const p = getProperty(parseInt(id));

      setProperty(p);
    };
    getProp();
  }, [id]);

  useEffect(() => {
    const uid = sessionStorage.getItem('UID');
    axios.get(`http://localhost:3001/user/fetch/${uid}`).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, []);

  console.log(user);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="previous-btn">
        <Button
          variant="outlined"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: '30px' }} />
        </Button>
      </div>
      <Paper
        sx={{
          padding: '10px',
          position: 'relative',
          margin: '50px 100px',
        }}
      >
        <img src={image?.[0]} alt={property} className="property-img" />
      </Paper>

      <Typography sx={{ textAlign: 'center', margin: '0' }} variant="h4">
        Talk to a Property Consultant or Real Estate Agent
      </Typography>

      <Typography sx={{ textAlign: 'center', margin: '0' }} variant="h5">
        Personal Information
      </Typography>
      <Paper
        sx={{
          padding: '40px 30px',
          position: 'relative',
          margin: '50px 100px',
        }}
      >
        <div className="reservation-form-container">
          <Button
            sx={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              ...global.buttonLogin,
            }}
            component={Link}
            to="/account"
          >
            <Typography sx={{ marginRight: '13px' }}>Edit</Typography>
            <EditIcon />
          </Button>

          <FormGroup sx={{ width: '60%' }}>
            <FormControl>
              <Typography variant="h5">Fullname</Typography>
              <OutlinedInput
                readOnly
                sx={{ ...global.formInput }}
                value={fullname}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h5">Contact Number</Typography>
              <OutlinedInput
                readOnly
                sx={{ ...global.formInput }}
                value={contact}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h5">Email</Typography>
              <OutlinedInput
                readOnly
                sx={{ ...global.formInput }}
                value={email}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h5">Address</Typography>
              <OutlinedInput
                readOnly
                sx={{ ...global.formInput }}
                value={address}
              />
            </FormControl>
          </FormGroup>
          <div>
            <Button
              sx={{ ...global.btnPrimary }}
              component={Link}
              to={`/reservation/${id}/payment`}
            >
              Proceed
            </Button>
          </div>
        </div>

        {credentialurl ? (
          <Typography color="#22bb33" variant="h7">
            Valid Credentials Uploaded
          </Typography>
        ) : (
          <Typography color="#bb2124" variant="h7">
            Valid Credentials is not Uploaded
          </Typography>
        )}
      </Paper>

      <Footer />
    </div>
  );
}
