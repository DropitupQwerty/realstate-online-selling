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
import { getUser } from './../fakeApi/fakeUserApi';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';

export default function Reservation({ open, cancel }) {
  const [property, setProperty] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [billingAccount, setBillingAccount] = useState({});

  const {
    image,
    property: prop,
    description,
    price,
    facilities,
    location: loc,
    locationURL,
  } = property || {};

  const { fullname, contact, address, email } = user || {};
  const { cardname, cardnumber, cardexpmonth, cardexpyear, cardcvv } =
    billingAccount | {};

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

  const handleChange = (e) => {
    setBillingAccount({ ...billingAccount, [e.target.name]: e.target.value });
  };

  console.log(billingAccount);
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

      <Typography sx={{ textAlign: 'center', margin: '0' }} variant="h3">
        Talk to a Property Consultant or Real Estate Agent
      </Typography>

      <Typography sx={{ textAlign: 'center', margin: '0' }} variant="h3">
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
        </div>
        <Typography color="#22bb33" variant="h4">
          Valid Credentials Uploaded
        </Typography>
        <Typography color="#bb2124" variant="h4">
          Valid Credentials is not Uploaded
        </Typography>
      </Paper>

      <Typography sx={{ textAlign: 'center', margin: '0' }} variant="h3">
        Reservation Fee
      </Typography>

      <Paper
        sx={{
          padding: '40px 30px',
          position: 'relative',
          margin: '50px 100px',
        }}
      >
        <div className="col-50">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Typography variant="h3">Payment</Typography>
            </div>
            <div>
              <Typography variant="h3">To Pay: ₱ {price * 0.1}</Typography>
              <Typography variant="caption" sx={{ fontSize: '12px' }}>
                Minimum of 10% price of the house and lot
              </Typography>
            </div>
          </div>

          <Typography for="fname" variant="h6">
            Accepted Cards
          </Typography>
          <div>
            <div className="icon-container">
              <i
                className="fa fa-cc-visa"
                style={{ color: 'navy', fontSize: '30px' }}
              ></i>
              <i
                className="fa fa-cc-amex"
                style={{ color: 'blue', fontSize: '30px' }}
              ></i>
              <i
                className="fa fa-cc-mastercard"
                style={{ color: 'red', fontSize: '30px' }}
              ></i>
              <i
                className="fa fa-cc-discover"
                style={{ color: 'orange', fontSize: '30px' }}
              ></i>
            </div>
          </div>
          <div>
            <Box component="form">
              <FormGroup>
                <FormControl>
                  <Typography variant="h5" sx={{ marginTop: '12px' }}>
                    Name on Card
                  </Typography>
                  <OutlinedInput
                    placeholder="eg. John M. Doe"
                    name="cardname"
                    value={cardname}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <Typography variant="h5" sx={{ marginTop: '12px' }}>
                    Credit card number
                  </Typography>
                  <OutlinedInput
                    placeholder="1111-2222-3333-4444"
                    name="cardnumber"
                    value={cardnumber}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <Typography variant="h5" sx={{ marginTop: '12px' }}>
                    Exp Month
                  </Typography>
                  <OutlinedInput
                    name="cardexpmonth"
                    value={cardexpmonth}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl>
                  <Typography variant="h5" sx={{ marginTop: '12px' }}>
                    Exp Year
                  </Typography>
                  <OutlinedInput name="cardexpyear" value={cardexpyear} />
                </FormControl>
                <FormControl>
                  <Typography variant="h5" sx={{ marginTop: '12px' }}>
                    CVV
                  </Typography>
                  <OutlinedInput
                    name="cardcvv"
                    value={cardcvv}
                    onChange={handleChange}
                  />
                </FormControl>
              </FormGroup>

              <Typography sx={{ marginTop: '20px' }} variant="h6">
                Make your payment directly into our bank account via bank
                transfer or cash deposit
              </Typography>

              <div>
                <Button sx={{ ...global.btnPrimary, width: '400px' }}>
                  PROCEED PAYMENT
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </Paper>
      <Footer />
    </div>
  );
}
