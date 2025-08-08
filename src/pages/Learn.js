import React from "react";
import './Learn.css'


const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <h1 className="heading-main">📰 About Us</h1>

      <section className="card">
        <h2 className="heading-section">Who We Are</h2>
        <p>
          <strong>[Tumcha Website Name]</strong> is an independent digital news platform committed to delivering reliable, fast, and responsible journalism.
          We bring you stories that inform, inspire, and impact — across categories like Politics, Bollywood, Science, Technology, Breaking News, and More.
        </p>
        <p>
          Founded with a mission to fight misinformation and bring clarity to chaos, we believe that news should empower, not manipulate.
        </p>
      </section>

      <section className="card mission">
        <h2 className="heading-section">🎯 Our Mission</h2>
        <ul>
          <li>Inform citizens about real-time developments</li>
          <li>Educate readers with fact-based stories</li>
          <li>Promote transparency and accountability</li>
          <li>Give voice to unheard communities</li>
        </ul>
      </section>

      <section className="card">
        <h2 className="heading-section">📂 What We Cover</h2>
        <ul>
          <li>📌 Politics – Elections, government schemes, public issues</li>
          <li>🎬 Bollywood – Celebrity news, interviews, reviews</li>
          <li>🔬 Science & Tech – Innovations, gadgets, discoveries</li>
          <li>🌍 Social Stories – Real stories from real people</li>
          <li>💥 Breaking News – Fast, fact-checked updates</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="card highlight">
        <h2 className="heading-section">💡 Why Choose Us?</h2>
        <ul>
          <li>✔ Fact-Checked Content</li>
          <li>✔ Reader-Focused Journalism</li>
          <li>✔ Multilingual Support: English, Hindi, Marathi</li>
          <li>✔ Clean & Modern Design</li>
        </ul>
      </section>

      {/* Our Values */}
      <section className="card">
        <h2 className="heading-section">🌟 Our Values</h2>
        <div className="values">
          <span>🕊 Truth First</span>
          <span>🤝 Transparency</span>
          <span>🔍 Accountability</span>
          <span>🧠 Education</span>
          <span>❤ Respect</span>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="card mission">
        <h2 className="heading-section">🤝 Meet the Team</h2>
        <ul>
          <li>🖋 Experienced Journalists & Reporters</li>
          <li>🧑‍💻 Tech Developers</li>
          <li>🧠 Editors</li>
          <li>📸 Photo & Video Creators</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="card contact">
        <h2 className="heading-section">📬 Let’s Stay Connected</h2>
        <p>Got a story? Contact us.</p>
        <p>Feedback or suggestions? We’d love to hear.</p>
        <p>Want to contribute? Join our growing team.</p>
      </section>
    </div>
  );
};

export default AboutUs;