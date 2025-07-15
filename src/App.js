import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BreakingNews from './components/BreakingNews';
import Footer from './components/Footer';

import Home from './pages/Home';
import Category from './pages/Category';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <BreakingNews />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politics" element={<Category category="Politics" />} />
        <Route path="/sports" element={<Category category="Sports" />} />
        <Route path="/business" element={<Category category="Business" />} />
        <Route path="/tech" element={<Category category="Tech" />} />
        <Route path="/entertainment" element={<Category category="Entertainment" />} />
        <Route path="/health" element={<Category category="Health" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
