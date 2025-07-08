import React from 'react';
import NewsCard from '../components/NewsCard';

const Home = ({ newsData }) => {
  return (
    <div className="container my-4">
      <NewsCard newsList={newsData} />
    </div>
  );
};

export default Home;
