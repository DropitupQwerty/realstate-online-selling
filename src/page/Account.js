import {
  Box,
  Button,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import global from '../styles/global';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../service/firebase-config';
import { async } from '@firebase/util';

export default function Account() {
  const [user, setUser] = useState({
    fullname: '',
    contact: '',
    address: '',
    email: '',
    password: '',
    credentialurl: '',
  });
  const { fullname, contact, address, email, password, credentialurl } =
    user || {};
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const uid = sessionStorage.getItem('UID');

  const handleFileUpload = (e) => {
    setFiles(e.target.files);

    console.log(e.target.files);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const profileRef = ref(storage, `credentials/`);
    const uploadTask = uploadBytesResumable(profileRef, files);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        alert('image error', error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(async (downloadURL) => {
            setUser({ ...user, credentialurl: downloadURL });
            console.log(downloadURL);
          })
          .then(async () => {
            // let uid = sessionStorage.getItem('UID');
            // console.log(uid);

            console.log(user);
            axios
              .post(`http://localhost:3001/user/edit/${uid}`, user)
              .then(() => {
                console.log('Uploaded');
              })
              .catch((err) => {
                console.log('Failed');
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  };

  console.log(user);
  useEffect(() => {
    axios.get(`http://localhost:3001/user/fetch/${uid}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="account-container">
        <div>
          <Typography variant="h3" sx={{ marginBottom: '40px' }}>
            Personal information
          </Typography>
        </div>

        <div>
          <FormGroup>
            <FormControl>
              <Typography variant="h6"> Fullname :</Typography>
              <OutlinedInput
                sx={{ ...global.formInput }}
                value={fullname}
                name="fullname"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h6"> Address</Typography>

              <OutlinedInput
                sx={{ ...global.formInput }}
                value={address}
                name="address"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h6"> Contact Number</Typography>
              <OutlinedInput
                sx={{ ...global.formInput }}
                value={contact}
                name="contact"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h6"> Email</Typography>
              <OutlinedInput
                sx={{ ...global.formInput }}
                value={email}
                name="email"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <Typography variant="h6"> Password</Typography>
              <OutlinedInput
                sx={{ ...global.formInput }}
                value={password}
                name="password"
                onChange={handleChange}
              />
            </FormControl>
          </FormGroup>
        </div>

        <div>
          <Typography variant="h3">Upload Valid Credentials</Typography>
          <Typography variant="h5">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="contained"
              component="label"
              sx={{ marginTop: '12px', ...global.buttonLogin }}
            >
              Upload File
              <input hidden type="file" onChange={handleFileUpload} />
            </Button>
            <div
              style={{
                marginLeft: '20px',
              }}
            >
              {credentialurl ? (
                <Typography variant="h5" color="#22bb33">
                  Uploaded
                </Typography>
              ) : (
                <Typography variant="h5" color="	#bb2124">
                  Not Uploaded
                </Typography>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Box
          sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
        >
          <div style={{ margin: ' 0 40px' }}>
            <Button
              sx={{ ...global.btnPrimary, margin: ' 0 20px' }}
              onClick={handleSubmit}
            >
              Save
            </Button>

            <Button
              sx={{ ...global.btnSecondary, margin: ' 0 20px' }}
              onClick={() => {
                navigate(-1);
              }}
            >
              Exit
            </Button>
          </div>
        </Box>
      </div>

      <Footer />
    </div>
  );
}
