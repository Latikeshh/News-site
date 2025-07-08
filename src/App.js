import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  const newsArray = [
    { title: 'India Wins Cricket Series', content: 'India beats England 3-1 in the thrilling series.' },
    { title: 'Stock Market Today', content: 'Sensex closes 500 points higher amid global cues.' },
    { title: 'Weather Alert', content: 'Heavy rainfall expected in Mumbai this weekend.' },
  ];

  return (
    <>
      <Navbar />
      <Home newsData={newsArray} />
      <Footer />
    </>
  );
};

export default App;
