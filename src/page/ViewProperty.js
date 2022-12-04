import React, { useEffect, useState } from 'react';
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getProperty } from '../fakeApi/fakehouesapi';
import '../components/styles/ViewPropertyStyles.css';
import Carousel from 'react-bootstrap/Carousel';
import {
  Button,
  FormControl,
  FormGroup,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import global from '../styles/global';
import Footer from '../components/Footer';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Facilities from '../components/Facilities';
import Login from './login';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ViewProperty() {
  const [property, setProperty] = useState();
  const { id } = useParams();
  const intId = parseInt(id);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    fullname: '',
    contact: '',
    address: '',
    email: '',
    password: '',
    credentialurl: '',
  });
  let uid = sessionStorage.getItem('UID');

  const { fullname, contact, address, email, password, credentialurl } =
    user || {};

  const {
    image,
    property: prop,
    description,
    price,
    facilities,
    location: loc,
    locationURL,
  } = property || {};

  const [inquire, setInquire] = useState({
    message: '',
    date: '',
    time: '',
  });

  let nf = new Intl.NumberFormat('en-US'); // "1,234,567,890"

  const getProp = () => {
    const prop = getProperty(intId);
    setProperty(prop);
  };

  const handleLogin = () => {
    setOpen(true);
  };

  const handleCloseLogin = () => {
    setOpen(false);
  };

  const handleNavigate = () => {
    navigate(`/reservation/${intId}`);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquire({
      ...inquire,
      fullname: fullname,
      contact: contact,
      address: address,
      email: email,
      property: prop,
    });

    axios
      .post('http://localhost:3001/inquiry/save', inquire)
      .then((res) => {
        console.log('done');
        toast.success('Inquiry Submitted');
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(inquire);
  };

  const handleChange = (e) => {
    setInquire({ ...inquire, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getProp();
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!uid) {
        setAuth(false);
      } else {
        setAuth(true);
      }
    }, 10);
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/user/fetch/${uid}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  console.log('user : ', user);
  console.log('Inquries : ', inquire);

  return (
    <div>
      <Navbar />
      {!auth && (
        <Login open={open} cancel={handleCloseLogin} isNavigate={true} />
      )}
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
      <div className="view-property-container">
        <div className="carousel-container">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {image?.map((img) => {
              return (
                <Carousel.Item>
                  <img className="property-img" src={img} alt={img} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="property-detail-container">
          <div className="property-name">
            <h1>
              <span>Property Name: </span>
              {prop}
            </h1>
          </div>

          <div className="property-price">
            <h1>
              <span> Location: </span> {loc}
            </h1>
          </div>

          <div className="property-price">
            <h1>
              <span>for sale : </span>₱ {nf.format(price)}
            </h1>
          </div>

          <Facilities facilities={facilities} />

          {auth ? (
            <div className="property-btn">
              <Button
                sx={{
                  ...global.buttonLogin,
                }}
                fullWidth
                component="a"
                href="#inquire"
              >
                Inquire
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  fontSize: '15px',
                  marginTop: '20px',
                  padding: '5px 40px',
                }}
                onClick={handleNavigate}
              >
                Reserve Property
              </Button>
            </div>
          ) : (
            <div className="property-btn">
              <Button
                sx={{
                  fontSize: '20px',
                  justifySelf: 'flex-end',
                  alignSelf: 'flex-end',
                }}
                variant="outlined"
                fullWidth
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          )}

          {/* <div className="property-sidebar">
          <label for=/>
        </div> */}
        </div>
      </div>
      <div className="property-description">
        <h1>Description</h1>
        <h2>{description}</h2>
      </div>
      <div className="property-description">
        <h1>Location</h1>

        <iframe
          src={locationURL}
          style={{ width: '100%', height: '450px', border: '0' }}
        ></iframe>
        <div>
          <form onSubmit={handleSubmit}>
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
                      required
                      multiline
                      rows={4}
                      placeholder="Message"
                      name="message"
                      value={inquire.message}
                      onChange={handleChange}
                      inputProps={{ maxLength: 120 }}
                      endAdornment={
                        <Typography sx={{ marginTop: '100px' }}>
                          {inquire.message.length + '/120'}
                        </Typography>
                      }
                    />
                  </FormControl>

                  <div>
                    <h2> Best day of the week & Best time to call</h2>

                    <div className="meeting-date" id="inquire">
                      <div className="meeting-date-form">
                        <FormControl>
                          <OutlinedInput
                            sx={{
                              ...global.formInput,
                              width: '200px',
                              margin: '0 20px ',
                            }}
                            type="date"
                            name="date"
                            value={inquire.date}
                            onChange={handleChange}
                            required
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
                            name="time"
                            value={inquire.time}
                            onChange={handleChange}
                            required
                          />
                        </FormControl>
                      </div>

                      <div>
                        {auth ? (
                          credentialurl ? (
                            <Button
                              sx={{ ...global.btnPrimary, width: '200px' }}
                              type="submit"
                            >
                              Submit
                            </Button>
                          ) : null
                        ) : (
                          <Button
                            sx={{ ...global.btnPrimary, width: '200px' }}
                            onClick={handleLogin}
                            component="a"
                            href="#login"
                          >
                            Login
                          </Button>
                        )}
                      </div>
                      {auth ? (
                        credentialurl ? (
                          <Typography color="#22bb33" variant="h6">
                            Valid Credentials Uploaded
                          </Typography>
                        ) : (
                          <Typography color="#bb2124" variant="h6">
                            Valid Credentials is not Uploaded
                          </Typography>
                        )
                      ) : null}
                    </div>
                  </div>
                </FormGroup>
              </div>
            </Paper>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
