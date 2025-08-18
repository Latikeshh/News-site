import React from "react";
import './About.css';


export default function CharityLandingPage() {
  
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="overlay">
<div class="darsh"><h2>AboutUs</h2></div>

          <h1>Let's build a Smarter<br />Nation together</h1>
          <p>
          At Talk Bharat, we believe in the power of unbiased, timely, and impactful journalism.
Our mission is to bring you the latest updates from across the globe, covering everything from politics and entertainment to science and social issues — in a way that informs, inspires, and empowers.

          </p>
          <div className="buttons">
            {/* <button className="btn donate">DONATE NOW →</button> */}
            {/* <button className="btn learn">LEARN MORE →</button> */}
            <a href="/Journey" class="btn donate">OUR JOURNEY →</a>
            <a href="/Learn" class="btn learn">LEARN MORE →</a>
            
          </div>
        </div>
      </div>

      <div className="services">
        <div className="service-card">
          <div className="icon">📰</div>
          <h3> Reliable Reports</h3>

          <p> We bring you verified and factual reporting, cutting through the noise to keep you informed with truth.

</p>
        </div>
        <div className="service-card">
          <div className="icon">📅</div>
          <h3> Daily Coverage</h3>
          <p>Our team works round the clock to ensure fresh content every day — from headlines to in-depth analysis.

</p>
        </div>
        <div className="service-card">
          <div className="icon">📚</div>
          <h3> Our Archives
</h3>
          <p>Access our growing catalog of articles and reports, categorized for easy exploration and research.</p>
        </div>
        <div className="service-card">
          <div className="icon">🎓</div>
          <h3> News That Educates
</h3>
          <p>Beyond breaking news, we help readers understand the "why" and "how" behind every story.
.</p>
        </div>
      </div>
    </div>
  );
}