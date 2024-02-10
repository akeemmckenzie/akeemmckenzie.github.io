import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => (
  <Router>
    <CssBaseline />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      {/* Redirect any other route to the home page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer/>
  </Router>
);

export default App;
