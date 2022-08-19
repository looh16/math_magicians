import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import './css/Style.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  </Router>

);
export default App;
