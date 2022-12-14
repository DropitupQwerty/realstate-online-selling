import React from 'react';
import '../components/styles/myStyle.css';
import Navbar from '../components/Navbar';
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
            <h1 className="hero-header">BUY PROPERTY NOW</h1>
          </div>
        </div>
        <div>
          <SaleProperty />
        </div>
      </div>
    </div>
  );
}
