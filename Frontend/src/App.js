import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BreakingNews from './components/BreakingNews';
import Footer from './components/Footer';
import ViewNews from './components/ViewNews';
import Home from './pages/Home';
import Category from './pages/Category';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import World from './pages/World';
import Journey from './pages/Journey';
import Learn from './pages/Learn';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Site */}
        <Route path="/" element={
          <>
            <Navbar />
            <BreakingNews />
            <Home />
            <Footer />
          </>
        } />

        <Route path="/category/:category" element={
          <>
            <Navbar />
            <BreakingNews />
            <Category />
            <Footer />
          </>
        } />

        <Route path="/news/:id" element={
          <>
            <Navbar />
            <BreakingNews />
            <ViewNews />
            <Footer />
          </>
        } />

        <Route path="/Contact" element={
          <>
            <Navbar />
            <BreakingNews />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <BreakingNews />
            <About />
            <Footer />
          </>
        } />

        <Route path="/Learn" element={
          <>
            <Navbar />
            <BreakingNews />
            <Learn />
            <Footer />
          </>
        } />

        <Route path="/Journey" element={
          <>
            <Navbar />
            <BreakingNews />
            <Journey />
            <Footer />
          </>
        } />

        <Route path="/Help" element={
          <>
            <Navbar />
            <BreakingNews />
            <Help />
            <Footer />
          </>
        } />

        <Route path="/World" element={
          <>
            <Navbar />
            <BreakingNews />
            <World />
            <Footer />
          </>
        } />
      </Routes>
    </Router>

  );
};

export default App;
