import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getProperty } from '../fakeApi/fakehouesapi';
import '../components/styles/ViewPropertyStyles.css';
import Carousel from 'react-bootstrap/Carousel';
import { Button, IconButton, Input } from '@mui/material';
import global from '../styles/global';
import Footer from '../components/Footer';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Facilities from '../components/Facilities';

export default function ViewProperty() {
  const [property, setProperty] = useState();
  const { id } = useParams();
  const intId = parseInt(id);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const {
    image,
    property: prop,
    description,
    price,
    facilities,
    location,
    locationURL,
  } = property || {};

  let nf = new Intl.NumberFormat('en-US'); // "1,234,567,890"
  console.log('Path id', intId);
  console.log(typeof intId);

  const getProp = () => {
    const prop = getProperty(intId);
    setProperty(prop);
  };

  useEffect(() => {
    getProp();
  }, [id]);

  return (
    <div>
      <Navbar />
      {/* <img className="property-img" src={image} alt={prop}></img> */}

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
              <span> Location: </span> {location}
            </h1>
          </div>

          <div className="property-price">
            <h1>
              <span>for sale : </span>₱ {nf.format(price)}
            </h1>
          </div>

          <Facilities facilities={facilities} />
          <div className="property-btn">
            <Button
              sx={{
                fontSize: '20px',
                justifySelf: 'flex-end',
                alignSelf: 'flex-end',
              }}
              variant="outlined"
              fullWidth
            >
              Inquire
            </Button>
          </div>

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

          // width="600"
          // height="450"
          // style="border:0;"
          // allowfullscreen=""
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}
