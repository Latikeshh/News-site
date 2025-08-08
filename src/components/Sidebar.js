// src/components/CommonAside.js
import React, { useEffect, useRef } from 'react';
import videoFile from './vid/News_intro.mp4';
import './Sidebar.css'; 

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
    <div>
    <aside className="side-news">
      <div className="fixed-video">
        <video autoPlay loop muted playsInline>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="scrollable-news" ref={scrollRef}>
                <div className="news-item"><h3><strong>Delhi faces record-breaking monsoon rains this July</strong></h3><span>1h ago</span></div>
                <div className="news-item"><h3><strong>Indian Navy rescues 25 fishermen stranded in Arabian Sea</strong></h3><span>4h ago</span></div>
                <div className="news-item"><h3><strong>India becomes world's 3rd largest startup ecosystem</strong></h3><span>7h ago</span></div>
                <div className="news-item"><h3><strong>Government launches Digital India Internship 2025 for students</strong></h3><span>8h ago</span></div>
                <div className="news-item"><h3><strong>Supreme Court to hear Article 370 case next week</strong></h3><span>10h ago</span></div>
                <div className="news-item"><h3><strong>India to host G20 Education Ministers' Summit</strong></h3><span>12h ago</span></div>
                <div className="news-item"><h3><strong>IRCTC launches new AI-powered ticket booking system</strong></h3><span>14h ago</span></div>
                <div className="news-item"><h3><strong>Mumbai local train services get digital upgrade</strong></h3><span>15h ago</span></div>
                <div className="news-item"><h3><strong>IIT Bombay ranks in top 100 global universities</strong></h3><span>17h ago</span></div>
                <div className="news-item"><h3><strong>ISRO's Aditya-L1 sends first solar flare images</strong></h3><span>20h ago</span></div>
                <div className="news-item"><h3><strong>India's forex reserves touch record high of $650 billion</strong></h3><span>1d ago</span></div>
                <div className="news-item"><h3><strong>Kerala tops in education index again</strong></h3><span>1d ago</span></div>
                <div className="news-item"><h3><strong>Delhi Metro to operate 24/7 on Independence Day</strong></h3><span>1d ago</span></div>
                <div className="news-item"><h3><strong>Startup from Pune creates AI-powered farming drone</strong></h3><span>1d ago</span></div>
                <div className="news-item"><h3><strong>India and Japan sign space collaboration agreement</strong></h3><span>2d ago</span></div>
                <div className="news-item"><h3><strong>Goa to host International Film Festival 2025</strong></h3><span>2d ago</span></div>
                <div className="news-item"><h3><strong>Bangalore becomes India's most liveable city 2025</strong></h3><span>2d ago</span></div>
                <div className="news-item"><h3><strong>Chennai airport adds facial recognition entry</strong></h3><span>2d ago</span></div>
                <div className="news-item"><h3><strong>India to build world's largest solar park in Rajasthan</strong></h3><span>2d ago</span></div>
      </div>
    </aside>
    </div>
  );
};

export default Sidebar;
