import React from 'react';
import '../components/styles/myStyle.css';
import Navbar from '../components/Navbar';
import house1 from '../assets/img/house1.jpg';
import house2 from '../assets/img/house2.jpg';
import house3 from '../assets/img/house3.jpg';
import house4 from '../assets/img/house4.jpg';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export default function Homepage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="hero-container">
          <div>
            <h1 className="hero-header">BUY OR RENT PROPERTY NOW</h1>
          </div>
        </div>

        <div>
          <div className="properties-items">
            <div>Search lot</div>
            <div className="cards-container">
              <Grid
                container
                spacing={2}
                sx={{
                  width: '80%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Grid item xs={4}>
                  <Card>
                    <CardMedia>
                      <img className="image" src={house1} alt="first houese" />
                    </CardMedia>
                    <CardContent>
                      <Typography variant="h4">1 Apartment</Typography>
                      <Typography variant="h5">Taguig Manila</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <img src={house2} alt="first houese" />
                </Grid>
                <Grid item xs={4}>
                  <img src={house3} alt="first houese" />
                </Grid>
                <Grid item xs={4}>
                  <img src={house4} alt="first houese" />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
