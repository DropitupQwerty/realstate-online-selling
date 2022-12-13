import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import global from '../styles/global';
import Account from '../page/Account';
import Reservation from './../page/Inquire';
import LoginOrSignUp from './LoginOrSignUp';
import Login from '../page/login';

export default function Navbar() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

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
    window.location.replace('/');
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpen(false);
  };
  const closeLogin = () => {
    setOpenLogin(false);
  };

  return (
    <div>
      <LoginOrSignUp
        cancel={handleClose}
        open={open}
        openLogin={handleOpenLogin}
      />
      <Login open={openLogin} cancel={closeLogin} />
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <span className="company-name">
              <Link to="/">Real Estate Online Reservation and Inquiry</Link>
            </span>
          </li>
        </ul>
        <ul
          className="nav-list"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <li className="nav-item">
            <span>
              <Link to="/">Home</Link>
            </span>
          </li>
          {auth ? (
            <li className="nav-item">
              <span>
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
              <Button sx={{ ...global.btnPrimary }} onClick={handleOpen}>
                Inquire Now
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
