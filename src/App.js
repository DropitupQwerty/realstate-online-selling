import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/utils/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './page/home';
import Login from './page/login';
import SignUp from './page/signup';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
