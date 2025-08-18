import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'; // Dark + red styling

const Dashboard = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:8000"; // backend base url

  const [totalArticles, setTotalArticles] = useState(0);
  const [totalBreaking, setTotalBreaking] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  const [totalContact, setTotalContact] = useState(0); // added state for complaints

  useEffect(() => {
    const role = localStorage.getItem("role"); // admin / author
    const author = localStorage.getItem("username"); // if role=author, save author name/id in LS

    const fetchTotal = async () => {
      try {
        if (role === "admin") {
          const res = await axios.get(`${baseURL}/totalnewsadmin`);
          setTotalArticles(res.data.total);
        } else if (role === "editor") {
          const res = await axios.get(`${baseURL}/totalnewsauthor?author=${author}`);
          setTotalArticles(res.data.total);
        }
      } catch (err) {
        console.error("Error fetching total news:", err);
      }
    };

    const categoryTotal = async () => {
      try {
        const res = await axios.get(`${baseURL}/categoriescount`);
        setTotalCategory(res.data.totalActiveCategories);
      } catch (err) {
        console.error("Error fetching total categories:", err);
      }
    };

    const breakingTotal = async () => {
      try {
        const res = await axios.get(`${baseURL}/headline/breakingcount`);
        setTotalBreaking(res.data.total);
      } catch (err) {
        console.error("Error fetching total breaking news:", err);
      }
    };

    const contactTotal = async () => {
      try {
        const res = await axios.get(`${baseURL}/contactstotal`); // fetch total non-soft-deleted contacts
        setTotalContact(res.data.total);
      } catch (err) {
        console.error("Error fetching total contacts:", err);
      }
    };

    fetchTotal();
    categoryTotal();
    breakingTotal();
    contactTotal();

  }, []);

  const handleCardClick = (type) => {
    const routes = {
      articles: '/articles',
      breakingNews: '/breakingNews',
      categories: '/categories',
      users: '/users',
      contacted: '/contacted',
      notifications: '/notifications',
      information: '/information',
    };
    if (routes[type]) navigate(routes[type]);
  };

  const cardData = [
    { title: 'Total Articles', text: totalArticles, type: 'articles' },
    { title: 'BreakingNews', text: totalBreaking, type: 'breakingNews' },
    { title: 'Categories', text: totalCategory, type: 'categories' },
    { title: 'Complaints', text: totalContact, type: 'contacted' },
    { title: 'Information', text: 'About Site', type: 'information' },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <button
          className="add-news-btn"
          onClick={() => navigate('/addNews')}
        >
          + Add News
        </button>
      </div>

      <div className="card-grid">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="dashboard-card"
            onClick={() => handleCardClick(card.type)}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
