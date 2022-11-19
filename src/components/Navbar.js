import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import global from '../styles/global';

export default function Navbar() {
  return (
    <div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <span className="company-name">
              <Link>Real State Company</Link>
            </span>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>

          <li className="nav-item">
            <Link>ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link>CONTACT US</Link>
          </li>
          <li className="nav-item">
            <Button
              sx={{ ...global.btnPrimary }}
              component={Link}
              to="/sign-up"
            >
              Inquire Now
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
