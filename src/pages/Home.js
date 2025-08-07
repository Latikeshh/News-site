import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import NewsPage from '../components/NewsPage';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="home-wrapper">
        <div className="main-content-scrollable">
          <NewsPage />
        </div>
        <div className="sidebar-fixed">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
