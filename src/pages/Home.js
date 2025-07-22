import React, { useState } from 'react';
import NewsCard from '../components/NewsCard';
import HeroCarousel from '../components/HeroCarousel';
import Sidebar from '../components/Sidebar';
import newsItems from '../data/newsData';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <HeroCarousel />
      <div className="container my-4">
        <div className="row mt-4">
          <div className="col-lg-9">
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
