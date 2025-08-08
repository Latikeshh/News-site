import React, { useRef, useEffect } from 'react';
import './Home.css';
import mainImage from '../components/img/cosmonaut-5142852.jpg';
import mainImage1 from '../components/img/cosmonaut-5142852.jpg';
import Sidebar from '../components/Sidebar'


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

    <div className="news-grid">
      <section className="main-news">
        <img src={mainImage} alt="Main News" />
        <h2><strong>India launches Chandrayaan-4 to explore lunar south pole</strong></h2>
        <br />
        <img src={mainImage1} alt="Main News 2" />
        <h2><strong>ISRO's Gaganyaan mission gears up for crewed spaceflight in 2025</strong></h2>
      </section>

      <Sidebar/>
    </div>
    </>
  );
};

export default NewsGrid;
