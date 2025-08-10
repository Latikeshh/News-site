import React, { useRef, useEffect } from 'react';
import './Home.css';
import Sidebar from '../components/Sidebar';
import NewsPage1 from '../components/NewsPage1';

const NewsGrid = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let isPaused = false;

    const scrollInterval = setInterval(() => {
      if (!isPaused && scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
          scrollAmount = 0; // Reset scroll to top
        }
        scrollContainer.scrollTop = scrollAmount;
      }
    }, 35); // Adjust speed here

    // Pause scrolling on mouse hover
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    if (scrollContainer) {
      scrollContainer.addEventListener('mouseenter', handleMouseEnter);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <div className="home-wrapper">
        <div className="main-content-scrolll">
          <NewsPage1 />
        </div>
        <div className="sidebar-fixed">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default NewsGrid;
