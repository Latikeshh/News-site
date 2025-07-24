import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import HeroCarousel from '../components/HeroCarousel';
import Sidebar from '../components/Sidebar';
import newsItems from '../data/newsData';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [category, setCategory] = useState("All");

  return (
    <>
      <HeroCarousel />
      <div className="home-container container my-5">
        <div className="row">
          <div className="col-lg-9">
            <h2 className="section-heading mb-4">Latest Headlines</h2>
            <div className="row">
              {newsItems.map((item, i) => (
                <div className="col-md-6 col-lg-4 mb-4" key={i}>
                  <NewsCard {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
