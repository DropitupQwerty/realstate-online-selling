import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import global from '../styles/global';
import Account from '../page/Account';
import Reservation from './../page/Inquire';

export default function Navbar() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let uid = sessionStorage.getItem('UID');
      if (!uid) {
        setAuth(false);
      } else {
        setAuth(true);
      }
    }, 10);
  }, []);

  const logout = () => {
    sessionStorage.removeItem('UID');
    navigate('/');
  };

  return (
    <div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <span className="company-name">
              <Link to="/">Real State Online Reservation and Inquiry</Link>
            </span>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <span className="company-name">
              <Link to="/">Home</Link>
            </span>
          </li>
          {auth ? (
            <li className="nav-item">
              <span className="company-name">
                <Link to="/account">My Account</Link>
              </span>
            </li>
          ) : null}

          <li className="nav-item">
            {auth ? (
              <Button sx={{ ...global.btnPrimary }} onClick={logout}>
                Logout
              </Button>
            ) : (
              <Button
                sx={{ ...global.btnPrimary }}
                component={Link}
                to="/sign-up"
              >
                Inquire Now
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
