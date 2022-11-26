import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import global from '../styles/global';

export default function Navbar() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

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
              <Link to="/">Real State Company</Link>
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
