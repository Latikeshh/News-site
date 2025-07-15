import React, { useState } from 'react';
import CategoryTabs from '../components/CategoryTabs';
import NewsCard from '../components/NewsCard';

const newsItems = [
  {
    title: "India wins T20 series",
    content: "India defeated Australia 3-2 in a thrilling finish at Mumbai.",
    image: "https://via.placeholder.com/600x300"
  },
  {
    title: "Budget 2025 Highlights",
    content: "Govt announces major tax reforms and infrastructure investments.",
    image: "https://via.placeholder.com/600x300"
  },
  {
    title: "ISRO's new moon mission",
    content: "Chandrayaan-4 scheduled for launch in early 2026.",
    image: "https://via.placeholder.com/600x300"
  }
];

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="container my-4">
      <CategoryTabs active={category} onSelect={setCategory} />
      <div className="row mt-4">
        {newsItems.map((item, i) => (
          <div className="col-md-6 col-lg-4 mb-4" key={i}>
            <NewsCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
