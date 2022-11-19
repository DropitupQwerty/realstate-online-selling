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
  Paper,
} from '@mui/material';
import { getProperties } from './../fakeApi/fakehouesapi';

export default function SaleProperty() {
  const [saledProperties, setSaledProperties] = useState([]);

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
              const { location, price, facilities, image, property } =
                saledProperty;
              return (
                <Grid item xs={5}>
                  <Card>
                    <CardMedia>
                      <img className="image" src={image} alt="first houese" />
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
                        <span className="sale-header">Price :</span> {price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{ ...global.btnPrimary }} fullWidth>
                        INQUIRE
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
        <div className="footer-container">
          <footer>Add me like a shit</footer>
        </div>
      </div>
    </div>
  );
}
