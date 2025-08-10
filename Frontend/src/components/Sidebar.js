// src/components/CommonAside.js
import React, { useEffect, useRef } from 'react';
import videoFile from './vid/News_intro.mp4';
import './Sidebar.css'; 
import newsItems from '../data/newsData';

const Sidebar = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let isPaused = false;

    const scrollInterval = setInterval(() => {
      if (!isPaused && scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTop = scrollAmount;
      }
    }, 35);

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
    <aside className="side-news">
      <div className="fixed-video">
        <video autoPlay loop muted playsInline>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="scrollable-news" ref={scrollRef}>
        {newsItems.map((item, i) => (
          <div className="news-item" key={i}>
            <h5><strong>{item.title}</strong></h5>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;