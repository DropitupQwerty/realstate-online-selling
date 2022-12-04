import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/utils/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './page/home';
import Login from './page/login';
import SignUp from './page/signup';
import ViewProperty from './page/ViewProperty';
import Reservation from './page/Inquire';
import Account from './page/Account';
import AdminLogin from './page/admin/Login';
import Inquiries from './page/admin/Inquiries';
import AdminDrawer from './components/AdminDrawer';
import Reservations from './page/admin/Reservations';
import AdminAccount from './page/admin/AdminAccount';
import Properties from './page/admin/Properties';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/viewproperty/:id" element={<ViewProperty />} />
          <Route path="/reservation/:id" element={<Reservation />} />
          <Route path="/account" element={<Account />} />

          <Route path="/admin" element={<AdminLogin />} />
          <Route element={<AdminDrawer />}>
            <Route path="/admin/inquiries" element={<Inquiries />} />
            <Route path="/admin/Properties" element={<Properties />} />
            <Route path="/admin/reservations" element={<Reservations />} />
            <Route path="/admin/account" element={<AdminAccount />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer autoClose={2000} />
    </ThemeProvider>
  );
}

export default App;
