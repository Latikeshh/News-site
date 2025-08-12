import React, { useEffect, useRef, useState } from 'react';
import videoFile from './vid/News_intro.mp4';
import './Sidebar.css';
import axios from 'axios';

const Sidebar = () => {
  const scrollRef = useRef(null);
  const [news, setNews] = useState([]);

  // Fetch news
  useEffect(() => {
    let mounted = true;
    axios.get('http://localhost:8000/findnews')
      .then(res => {
        if (!mounted) return;
        const items = res.data?.data || [];
        setNews(items);
      })
      .catch(err => console.error('Sidebar fetch error:', err));
    return () => { mounted = false; };
  }, []);

  // Auto-scroll logic (seamless loop)
  useEffect(() => {
    if (!news.length) return;
    const container = scrollRef.current;
    if (!container) return;

    // जर content कमी असेल तर scroll करू नको
    if (container.scrollHeight <= container.clientHeight) return;

    let isPaused = false;
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    const intervalId = setInterval(() => {
      if (!isPaused) {
        container.scrollTop += 1;

        // जर पहिली list पूर्ण स्क्रोल झाली तर पहिल्या duplicate वर ने
        if (container.scrollTop >= container.scrollHeight / 2) {
          container.scrollTop = 0;
        }
      }
    }, 35);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [news]);

  // duplicate list तयार seamless loop साठी
  const doubledNews = [...news, ...news];

  return (
    <aside className="side-news">
      <div className="fixed-video">
        <video autoPlay loop muted playsInline>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>

      <div className="scrollable-news" ref={scrollRef}>
        {doubledNews.map((item, i) => (
          <div className="news-item" key={`${item._id || i}-${i}`}>
            <h5 className="news-title">📰 {item.title || 'Untitled'}</h5>
            <p className="news-date">
              📅 {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('en-GB') : ''}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
