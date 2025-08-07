// src/components/CommonAside.js
import React, { useEffect, useRef } from 'react';
import videoFile from './vid/News_intro.mp4';
import './Sidebar.css'; 

const Common = () => {
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
                <div className="news-item"><h4><strong>Delhi faces record-breaking monsoon rains this July</strong></h4><span>1h ago</span></div>
                <div className="news-item"><h4><strong>Indian Navy rescues 25 fishermen stranded in Arabian Sea</strong></h4><span>4h ago</span></div>
                <div className="news-item"><h4><strong>India becomes world’s 3rd largest startup ecosystem</strong></h4><span>7h ago</span></div>
                <div className="news-item"><h4><strong>Government launches Digital India Internship 2025 for students</strong></h4><span>8h ago</span></div>
                <div className="news-item"><h4><strong>Supreme Court to hear Article 370 case next week</strong></h4><span>10h ago</span></div>
                <div className="news-item"><h4><strong>India to host G20 Education Ministers’ Summit</strong></h4><span>12h ago</span></div>
                <div className="news-item"><h4><strong>IRCTC launches new AI-powered ticket booking system</strong></h4><span>14h ago</span></div>
                <div className="news-item"><h4><strong>Mumbai local train services get digital upgrade</strong></h4><span>15h ago</span></div>
                <div className="news-item"><h4><strong>IIT Bombay ranks in top 100 global universities</strong></h4><span>17h ago</span></div>
                <div className="news-item"><h4><strong>ISRO's Aditya-L1 sends first solar flare images</strong></h4><span>20h ago</span></div>
                <div className="news-item"><h4><strong>India's forex reserves touch record high of $650 billion</strong></h4><span>1d ago</span></div>
                <div className="news-item"><h4><strong>Kerala tops in education index again</strong></h4><span>1d ago</span></div>
                <div className="news-item"><h4><strong>Delhi Metro to operate 24/7 on Independence Day</strong></h4><span>1d ago</span></div>
                <div className="news-item"><h4><strong>Startup from Pune creates AI-powered farming drone</strong></h4><span>1d ago</span></div>
                <div className="news-item"><h4><strong>India and Japan sign space collaboration agreement</strong></h4><span>2d ago</span></div>
                <div className="news-item"><h4><strong>Goa to host International Film Festival 2025</strong></h4><span>2d ago</span></div>
                <div className="news-item"><h4><strong>Bangalore becomes India’s most liveable city 2025</strong></h4><span>2d ago</span></div>
                <div className="news-item"><h4><strong>Chennai airport adds facial recognition entry</strong></h4><span>2d ago</span></div>
                <div className="news-item"><h4><strong>India to build world's largest solar park in Rajasthan</strong></h4><span>2d ago</span></div>
      </div>
    </aside>
    </div>
  );
};

export default Common;
