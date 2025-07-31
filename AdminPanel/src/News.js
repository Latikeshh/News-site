import React from 'react';
import news from'./pages/news.jpg';


function News() {
  return (
    <div className="app">
      <header className="navbar">
        <h1>DAILY EXPRESS</h1>
        <nav>
          <a href="#">POLITICS</a>
          <a href="#">SPORTS</a>
          <a href="#">ENTERTAINMENT</a>
          <a href="#">TECH</a>
        </nav>
      </header>

      <main className="content">
        <h2>PM launches new scheme</h2>
        <img src={news} alt="Prime Minister" className="main-image" />

        <div className="articles">
          <div className="article">
            <img src={news} alt="Cricket" />
            <h3>Political parties campaign ahead of elections</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer</p>
          </div>
          <div className="article side">
            <img src={news} alt="Cricket" />
            <h3>India wins thrilling match</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div className="article">
            <img src={news} alt="Protest" />
            <h3>New movie announced by popular actress</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer</p>
          </div>

          <div className="article">
            <img src={news} alt="Smartphone" />
            <h3>New smartphone launched</h3>
            <p>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default News;