import React, { useEffect, useRef, useState } from 'react';
import videoFile from './vid/News_intro.mp4';
import './Sidebar.css';
import axios from 'axios';

const Sidebar = () => {
  const scrollRef = useRef(null);
  const [news, setNews] = useState([]);
  const [displayNews, setDisplayNews] = useState([]);

  // Fetch news from backend
  useEffect(() => {
    let mounted = true;
    axios.get('http://localhost:8000/findnews')
      .then(res => {
        if (!mounted) return;
        const items = res.data?.data || [];
        setNews(items);
        setDisplayNews(items);
      })
      .catch(err => console.error('Sidebar fetch error:', err));
    return () => { mounted = false; };
  }, []);

  // Auto scroll effect - runs after displayNews changes (and after duplication if needed)
  useEffect(() => {
    if (!displayNews.length) return;
    const container = scrollRef.current;
    if (!container) return;

    let intervalId = null;
    let handleMouseEnter;
    let handleMouseLeave;

    const timer = setTimeout(() => {
      // If content is not tall enough to scroll, duplicate once (so we can loop smoothly)
      // Only duplicate once (i.e. when displayNews length equals original news length)
      if (
        container.scrollHeight <= container.clientHeight &&
        displayNews.length === news.length &&
        news.length > 0
      ) {
        setDisplayNews(prev => [...prev]); // duplicate items once
        return; // effect will re-run because displayNews changed
      }

      let scrollAmount = 0;
      let isPaused = false;

      // If we've duplicated the list, singleHeight should be half the scrollHeight (original block)
      const singleHeight = displayNews.length > news.length ? container.scrollHeight / 2 : container.scrollHeight;

      handleMouseEnter = () => { isPaused = true; };
      handleMouseLeave = () => { isPaused = false; };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      intervalId = setInterval(() => {
        if (!isPaused && container) {
          scrollAmount += 1;
          if (scrollAmount >= singleHeight) {
            scrollAmount = 0;
          }
          container.scrollTop = scrollAmount;
        }
      }, 35);
    }, 60); // small delay to allow layout to settle

    return () => {
      clearTimeout(timer);
      if (intervalId) clearInterval(intervalId);
      if (handleMouseEnter) container.removeEventListener('mouseenter', handleMouseEnter);
      if (handleMouseLeave) container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [displayNews, news]);

  return (
    <aside className="side-news">
      <div className="fixed-video">
        <video autoPlay loop muted playsInline>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="scrollable-news" ref={scrollRef}>
        {displayNews.map((item, i) => (
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
