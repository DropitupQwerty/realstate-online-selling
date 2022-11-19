import React from 'react';
import '../components/styles/myStyle.css';
import Navbar from '../components/Navbar';

import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import SaleProperty from '../components/SaleProperty';

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
          <SaleProperty />
        </div>
      </div>
    </div>
  );
}
