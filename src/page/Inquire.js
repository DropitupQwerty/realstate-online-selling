import {
  Button,
  FormControl,
  FormGroup,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import global from '../styles/global';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProperty } from '../fakeApi/fakehouesapi';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Reservation({ open, cancel }) {
  const [property, setProperty] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    image,
    property: prop,
    description,
    price,
    facilities,
    location: loc,
    locationURL,
  } = property || {};

  useEffect(() => {
    const getProp = () => {
      const p = getProperty(parseInt(id));
      setProperty(p);
    };
    getProp();
  }, [id]);

  console.log(property);

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
        Personal Information
      </Typography>
      <Paper
        sx={{
          padding: '10px',
          position: 'relative',
          margin: '50px 100px',
        }}
      >
        <div className="reservation-form-container">
          <FormGroup sx={{ width: '60%' }}>
            <FormControl>
              <Typography variant="h5">Fullname</Typography>
              <OutlinedInput
                readOnly
                sx={{ ...global.formInput }}
                value={prop}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h5">Fullname</Typography>
              <OutlinedInput
                readOnly
                sx={{ ...global.formInput }}
                value={prop}
              />
            </FormControl>
          </FormGroup>
        </div>
      </Paper>

      <Typography sx={{ textAlign: 'center', margin: '0' }} variant="h3">
        Talk to a Property Consultant or Real Estate Agent
      </Typography>

      <Paper
        sx={{
          padding: '30px',
          position: 'relative',
          margin: '50px 100px',
        }}
      >
        <div className="reservation-form-container">
          <FormGroup sx={{ width: '60%' }}>
            <h2>Im interested in</h2>
            <FormControl>
              <OutlinedInput
                readOnly
                sx={{ ...global.formInput }}
                value={prop}
              />
            </FormControl>
            <h2>Send your message</h2>
            <FormControl>
              <OutlinedInput
                sx={{
                  ...global.formInput,
                }}
                multiline
                rows={4}
                placeholder="Message"
              />
            </FormControl>

            <div>
              <h2> Best day of the week & Best time to call</h2>

              <div className="meeting-date">
                <div className="meeting-date-form">
                  <FormControl>
                    <OutlinedInput
                      sx={{
                        ...global.formInput,
                        width: '200px',
                        margin: '0 20px ',
                      }}
                      type="date"
                    />
                  </FormControl>
                  <FormControl>
                    <OutlinedInput
                      sx={{
                        ...global.formInput,
                        width: '200px',
                        margin: '0 20px ',
                      }}
                      type="time"
                    />
                  </FormControl>
                </div>
                <div>
                  <Button
                    color="success"
                    sx={{ ...global.btnPrimary, width: '200px' }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </FormGroup>
        </div>
      </Paper>

      <Footer />
    </div>
  );
}
