import React, { useEffect, useState } from 'react';
import global from '../styles/global';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { getProperties } from './../fakeApi/fakehouesapi';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Facilities from './Facilities';

export default function SaleProperty() {
  const [saledProperties, setSaledProperties] = useState([]);
  let nf = new Intl.NumberFormat('en-US');

  useEffect(() => {
    const getProp = () => {
      const properties = getProperties();
      setSaledProperties(properties);
    };
    getProp();
  }, []);

  return (
    <div>
      <div className="properties-items">
        <div className="cards-container">
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            {saledProperties.map((saledProperty) => {
              const { location, price, facilities, image, property, id } =
                saledProperty;
              return (
                <Grid key={id} item xs={5}>
                  <Card>
                    <CardMedia>
                      <img
                        className="image"
                        src={image[0]}
                        alt="first houese"
                      />
                    </CardMedia>
                    <CardContent
                      sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <Typography variant="h4">
                        <span className="sale-header center">{property}</span>
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: '13px' }}>
                        <span className="sale-header">Location :</span>{' '}
                        {location}
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: '13px' }}>
                        <span className="sale-header"> Price :</span>₱
                        {nf.format(price)}
                      </Typography>
                      <Facilities facilities={facilities} fsize={'20px'} />
                    </CardContent>
                    <CardActions>
                      <Button
                        sx={{ ...global.btnPrimary }}
                        component={Link}
                        to={`/viewproperty/${id}`}
                        fullWidth
                      >
                        VIEW
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
