import React, { useState } from 'react';
import CategoryTabs from '../components/CategoryTabs';
import NewsCard from '../components/NewsCard';
import HeroCarousel from '../components/HeroCarousel';
import Sidebar from '../components/Sidebar';
import ch4 from '../components/img/ch4.jpg';
import budget from '../components/img/budget.jpg';
import cricket from '../components/img/Cricket.avif';

const newsItems = [
  {
    title: "India wins T20 series",
    content: "India defeated Australia 3-2 in a thrilling finish at Mumbai.",
    image: cricket
  },
  {
    title: "Budget 2025 Highlights",
    content: "Govt announces major tax reforms and infrastructure investments.",
    image: budget
  },
  {
    title: "ISRO's new moon mission",
    content: "Chandrayaan-4 scheduled for launch in early 2026.",
    image: ch4
  },
  {
    title: "India wins T20 Series",
    content: "India defeated Australia 3-2 in a thrilling finish at Mumbai.",
    image: cricket
  },
  {
    title: "Budget 2025 Highlights",
    content: "Govt announces major tax reforms and infrastructure investments.",
    image: budget
  },
  {
    title: "ISRO's new moon mission",
    content: "Chandrayaan-4 scheduled for launch in early 2026.",
    image: ch4
  }
];

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <HeroCarousel />
      <div className="container my-4">
        <CategoryTabs active={category} onSelect={setCategory} />
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
