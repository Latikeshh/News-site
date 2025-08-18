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
import Journey from './pages/Journey';
import Learn from './pages/Learn';
import SearchPage from './components/SearchPage';
import DateNews from './components/DateNews';

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
        <Route path="/search" element={
          <>
            <Navbar />
            <BreakingNews />
            <SearchPage />
            <Footer />
          </>
        } />

        <Route path="/news/date/:date" element={
          <>
            <Navbar />
            <BreakingNews />
            <DateNews />
            <Footer />
          </>
        } />

        <Route path="/news/:_id" element={
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
        
      </Routes>
    </Router>

  );
};

export default App;
