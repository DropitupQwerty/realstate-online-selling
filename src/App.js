import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './page/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
