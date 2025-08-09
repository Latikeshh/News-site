import React from "react";
import './Journey.css'


const journeyData = [
  {
    year: "2020",
    title: "The Idea Was Born",
    desc: "The world was shifting fast, and so was the flow of information. We realized there was a growing need for news that is clear, reliable, and accessible to everyone.",
  },
  {
    year: "2021",
    title: "Building the Foundation",
    desc: "We gathered a team of passionate journalists, developers, and storytellers. Our aim? To create a platform where facts matter more than speed, and every voice gets a chance to be heard.",
  },
  {
    year: "2022",
    title: "Going Live",
    desc: "Our website launched with a fresh design, smooth categories like Politics, Bollywood, Science, and Breaking News. We introduced regional language support to connect with a wider audience.",
  },
  {
    year: "2023",
    title: "Audience Love & Growth",
    desc: "Thanks to your support, we crossed 1 million+ monthly readers and started publishing video news, expert columns, and community highlights.",
  },
  {
    year: "2024",
    title: "Innovation & Expansion",
    desc: "We upgraded our newsroom with AI-powered tools, added fact-check sections, and launched a mobile app to keep you informed on-the-go.",
  },
];

const OurJourney = () => {
  return (
    <div className="journey-container">
      <h1 className="journey-heading">🗺 Our Journey</h1>
      <div className="timeline">
        {journeyData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">           
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurJourney;