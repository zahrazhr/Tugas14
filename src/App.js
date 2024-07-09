import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './props/Navbar';
import Home from './halaman/Home';
import About from './halaman/About';
import Data from './halaman/Data';
import { ThemeProvider } from './konteks/ThemeContext';

function App() {
  const navbarLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/data', text: 'Data' }
  ];

  return (
    <ThemeProvider>
      <Router>
        <AppNavbar brand="Tugas 14" links={navbarLinks} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
