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
import Reciept from './Reciept';

export default function Payment() {
  const [property, setProperty] = useState();
  const { id } = useParams();
  const [user, setUser] = useState();
  const [billingAccount, setBillingAccount] = useState({});
  const [openReceipt, setOpenReceipt] = useState(false);

  const { property: prop, price, location: loc } = property || {};

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setBillingAccount('');

    axios
      .post('http://localhost:3001/reservation/save', {
        fullname: fullname,
        contact: contact,
        address: address,
        email: email,
        property: prop,
        amountpaid: price * 0.1,
      })
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem('PaymentInfo', JSON.stringify(res.data));

        setOpenReceipt(true);
      });
  };

  console.log(user);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Reciept open={openReceipt} />
      <Typography sx={{ textAlign: 'center', margin: '60px' }} variant="h4">
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
              <Typography variant="h4">Payment</Typography>
            </div>
            <div>
              <Typography variant="h4">To Pay: ₱ {price * 0.1}</Typography>
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
            <Box component="form" onSubmit={handleSubmit}>
              <FormGroup>
                <FormControl>
                  <Typography variant="h7" sx={{ marginTop: '12px' }}>
                    Name on Card
                  </Typography>
                  <OutlinedInput
                    placeholder="eg. John M. Doe"
                    name="cardname"
                    value={cardname}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl>
                  <Typography variant="h7" sx={{ marginTop: '12px' }}>
                    Credit card number
                  </Typography>
                  <OutlinedInput
                    placeholder="1111-2222-3333-4444"
                    name="cardnumber"
                    value={cardnumber}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl>
                  <Typography variant="h7" sx={{ marginTop: '12px' }}>
                    Exp Month
                  </Typography>
                  <OutlinedInput
                    name="cardexpmonth"
                    value={cardexpmonth}
                    onChange={handleChange}
                    required
                    placeholder="eg. 11"
                  />
                </FormControl>

                <FormControl>
                  <Typography variant="h7" sx={{ marginTop: '12px' }}>
                    Exp Year
                  </Typography>
                  <OutlinedInput
                    name="cardexpyear"
                    value={cardexpyear}
                    placeholder="eg. 11"
                  />
                </FormControl>
                <FormControl>
                  <Typography variant="h7" sx={{ marginTop: '12px' }}>
                    CVV
                  </Typography>
                  <OutlinedInput
                    name="cardcvv"
                    value={cardcvv}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
              </FormGroup>

              <Typography sx={{ marginTop: '20px' }} variant="h6">
                Make your payment directly into our bank account via bank
                transfer or cash deposit
              </Typography>

              <div>
                <Button
                  sx={{ ...global.btnPrimary, width: '400px' }}
                  type="submit"
                >
                  PROCEED PAYMENT
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </Paper>
    </div>
  );
}
