import React from 'react';

import pol1 from '../components/img/pol1.jpg';
import pol2 from '../components/img/pol2.jpg';
import pol3 from '../components/img/budget.webp';

import sport1 from '../components/img/Cricket.jpg';
import sport2 from '../components/img/pol3.jpg';
import sport3 from '../components/img/rcbwon.jpg';

import sci1 from '../components/img/ch4.webp';
import sci2 from '../components/img/aditya.jpg';
import sci3 from '../components/img/quantum.jpg';

import health1 from '../components/img/heal1.png';
import health2 from '../components/img/heal2.jpg';
import health3 from '../components/img/heal3.jpg';

import ent1 from '../components/img/entertainment3.webp';
import ent2 from '../components/img/censored.jpg';
import ent3 from '../components/img/entertainment3.webp';

import fin1 from '../components/img/budget.webp';
import fin2 from '../components/img/fin2.jpg';
import fin3 from '../components/img/fin3.jpg';


const newsItems = [
  // POLITICS
  {
    id: 1,
    title: "Lok Sabha Passes Women's Reservation Bill",
    content: "The Indian Parliament passed the Women's Reservation Bill, ensuring 33% seats for women. This historic move aims to boost gender equality in governance. The bill received bipartisan support across party lines. Prime Minister called it a win for democracy. Opposition leaders also hailed the bill’s significance. The bill awaits implementation post-delimitation. Social activists have long demanded this reform. Many believe it will encourage more women to join politics. The public response has been overwhelmingly positive. Implementation is expected by the next general election.",
    image: pol1,
    category: "politics",
    featured: true
  },
  {
    id: 2,
    title: "India Signs Defense Pact With France",
    content: "India signed a new strategic defense pact with France focusing on joint production. The deal includes advanced Rafale fighter jets and naval tech sharing. Both nations emphasized Indo-Pacific security collaboration. France reaffirmed support for Make in India. PM Modi and President Macron praised the deepening ties. Defense experts see this as a counter to China's presence. This is India's largest defense agreement this decade. It includes technology transfer clauses. Training and joint exercises are also part of the agreement. The pact enhances India's military self-reliance.",
    image: pol2,
    category: "politics",
    featured: false
  },
  {
    id: 3,
    title: "2025 Budget Session Sees Heated Debate",
    content: "The 2025 Budget sparked intense debate in Parliament. The Finance Minister announced major tax cuts and infrastructure spending. Opposition accused the government of favoring corporates. Farmers demanded more support in the agri sector. Youth raised concerns over job creation. The middle class welcomed revised income tax slabs. Urban projects like metro expansions were widely appreciated. Political analysts say this budget targets upcoming elections. Civil society groups want more focus on healthcare. The session concluded with mixed reactions from all parties.",
    image: pol3,
    category: "politics",
    featured: false
  },

  // SPORTS
  {
    id: 4,
    title: "India Clinches T20 World Cup 2024",
    content: "India defeated England to win the T20 World Cup 2024. The final match was held at Eden Gardens, Kolkata. Virat Kohli scored a match-winning 82 not out. Jasprit Bumrah took three crucial wickets. India’s fielding performance impressed all. The nation celebrated with fireworks and parades. Prime Minister congratulated the team via social media. Kohli dedicated the win to retiring coach Rahul Dravid. Fans flooded the streets in celebration. ICC hailed it as one of the most thrilling finals ever.",
    image: sport1,
    category: "sports",
    featured: true
  },
  {
    id: 5,
    title: "Neeraj Chopra Breaks World Record",
    content: "Indian javelin star Neeraj Chopra broke the world record with a 93.8m throw. The feat was achieved at the Diamond League in Zurich. He surpassed Jan Zelezny's long-standing record. Social media exploded with congratulatory messages. Neeraj thanked his coach and support staff. He dedicated the medal to aspiring athletes in India. Sports Minister praised his dedication and work ethic. The win has inspired a new generation of track athletes. Neeraj now prepares for Paris Olympics. India expects multiple medals from him.",
    image: sport2,
    category: "sports",
    featured: false
  },
  {
    id: 6,
    title: "Royal Challenger Banglore Lift IPL 2025 Trophy",
    content: "RCB won the IPL 2025 title under Virat Kholi's captaincy. They beated Punjab Kings (PBKS) by six runs in final. The IPL trophy is handed over to the Royal Challengers Bengaluru and pop goes the confetti! The Women did it in the WPL in 2024 and the Men have followed suit in 2025. This win will be talked about for ages, because patience has finally borne fruit. They have got a team which has been pretty consistent in all departments not only this year, but for the last 3-4 years now and with the first title under the belt, maybe, it is now time to give the likes of Chennai Super Kings and Mumbai Indians a run for their money, in terms of consistency. Punjab Kings have a bitter pill to swallow, but you never lose - you either win or you learn. They will take inspiration from RCB and come back stronger and more determined in 2026, to try and cross that one final step. And on that note, we end our coverage of the 2025 Indian Premier League as well. An extended season, but we enjoyed it nevertheless.",
    image: sport3,
    category: "sports",
    featured: false
  },

  // SCIENCE
  {
    id: 7,
    title: "ISRO Prepares Chandrayaan-4 for Launch",
    content: "ISRO is set to launch Chandrayaan-4 in early 2026. It will include a rover, orbiter, and sample return mission. Scientists aim to study the lunar south pole further. The mission is expected to be more advanced than Chandrayaan-3. ISRO collaborated with JAXA for technical inputs. The lander will carry new AI-powered navigation systems. The mission budget is ₹1,200 crore. India's lunar goals include potential mining in future. It places India alongside US and China in lunar race. Preparations are in final testing phase.",
    image: sci1,
    category: "science",
    featured: true
  },
  {
    id: 8,
    title: "Aditya-L1 Sends First Solar Images",
    content: "India's Aditya-L1 solar mission has begun transmitting data. The spacecraft captured high-resolution images of solar flares. Scientists observed a rare X-class solar storm. ISRO says the data will help predict space weather. The mission reached Lagrange Point L1 in January. It is India’s first dedicated solar observatory. Data will be shared with global scientists. Solar activity impacts satellite communication and power grids. Aditya-L1 will operate for at least five years. Global space agencies have praised ISRO's achievement.",
    image: sci2,
    category: "science",
    featured: false
  },
  {
    id: 9,
    title: "India Develops Indigenous Quantum Computer",
    content: "IIT Madras unveils India's first quantum computing prototype. It uses 8 superconducting qubits to perform basic calculations. The project is funded by DST under the National Mission on Quantum Tech. Researchers claim it's 10x faster than classical models. The computer passed all initial tests. It opens new doors in encryption and simulations. India joins US and China in quantum race. PM Modi called it a tech milestone. Students will soon be trained to use it. Startups are being funded for quantum apps.",
    image: sci3,
    category: "science",
    featured: false
  },

  // HEALTH
  {
    id: 10,
    title: "India Launches Universal Health ID",
    content: "The government launched Universal Health ID for all citizens. It allows access to health records from any hospital. Doctors can view patient history instantly. Privacy and consent protocols are strictly followed. Aadhaar linking is optional. Over 10 crore users have registered. Hospitals and clinics are rapidly onboarding. The system uses blockchain for data security. WHO praised India’s digital health efforts. Rollout is planned across rural India next year.",
    image: health1,
    category: "health",
    featured: true
  },
  {
    id: 11,
    title: "New Malaria Vaccine Approved in India",
    content: "India approved the R21/Matrix-M malaria vaccine. It was developed by Oxford University and Serum Institute. The vaccine showed 77% efficacy in trials. It targets young children in endemic regions. WHO recommended its global rollout. India plans to include it in national immunization. Health experts say it will save millions of lives. States like Odisha and Assam are pilot sites. Serum Institute to produce 200 million doses annually. Launch expected in Q4 of 2025.",
    image: health2,
    category: "health",
    featured: false
  },
  {
    id: 12,
    title: "India Sees Decline in Cancer Mortality",
    content: "Recent AIIMS study shows 12% drop in cancer deaths. Awareness campaigns have improved early diagnosis. Affordable chemotherapy schemes helped rural patients. Mobile oncology units reached remote districts. Screening for cervical and breast cancer doubled. Health Ministry plans nationwide screening every 2 years. New AI tools help detect tumors early. Government also capped prices on essential drugs. Survivorship programs are gaining traction. India aims for 30% reduction by 2030.",
    image: health3,
    category: "health",
    featured: false
  },

  // // ENTERTAINMENT
  // {
  //   id: 13,
  //   title: "Shah Rukh Khan's 'Raaz 2025' Breaks Records",
  //   content: "'Raaz 2025' starring SRK crosses ₹1,000 crore globally. The thriller features AI-driven storyline twists. Fans praised the high-tech VFX and emotional plot. SRK plays a dual role for the first time. Critics call it his best performance in years. The soundtrack topped Spotify charts in India. The movie was released in 10 languages. Directed by S. Shankar, it became a pan-India hit. Hollywood studios praised the film’s visual effects. SRK thanked fans in a viral video message.",
  //   image: ent1,
  //   category: "entertainment",
  //   featured: true
  // },
  {
    id: 14,
    title: "OTT Platforms Dominate Indian Entertainment",
    content: "Netflix and Amazon released over 100 Indian originals in 2024. Local stories in regional languages saw massive success. Actors like Pankaj Tripathi led in viewership. Subscription growth rose 30% across Tier-2 cities. AI is being used to personalize viewer experience. OTT platforms are investing in Indian tech studios. Theaters are seeing slow recovery post-COVID. Short-form video remains a rising trend. Govt considers regulating digital content more strictly. Viewers now demand more meaningful storytelling.",
    image: ent2,
    category: "entertainment",
    featured: false
  },
  {
    id: 15,
    title: "India Hosts Cannes Asia Fest 2025",
    content: "Mumbai hosted the first-ever Cannes Asia Film Fest. Global filmmakers and Indian stars attended. The event showcased 150+ international indie films. Bollywood made a strong presence with 12 premieres. The fest promotes India as a cinematic hub. South Indian cinema received global appreciation. Women directors led over 40% of the entries. Workshops focused on film-tech and storytelling. Government supported the event under Film India Vision. It will now be an annual event in Mumbai.",
    image: ent3,
    category: "entertainment",
    featured: false
  },

  // FINANCE
  {
    id: 16,
    title: "Budget 2025 Unveils Tax Reforms",
    content: "The 2025 budget introduced 5% lower tax slabs. Middle class families will save up to ₹20,000 annually. Startups received tax exemptions for 3 more years. Capital gains thresholds were revised for investors. Infrastructure spending hit record ₹10 lakh crore. Rural housing and roads got major boosts. Digital payments saw zero MDR incentives extended. Income tax return portal got AI assistant update. India aims 8% GDP growth with this budget. Markets responded positively after announcement.",
    image: fin1,
    category: "finance",
    featured: true
  },
  {
    id: 17,
    title: "RBI Launches Digital Rupee in Full Scale",
    content: "RBI announced phase 2 rollout of Digital Rupee. Over 50 banks and 2 lakh merchants are onboard. Users can pay via QR codes using RBI wallet. The system works offline for rural areas. Interest-bearing versions are in testing. RBI says it reduces cost of printing currency. Data privacy and cyber security protocols are robust. India becomes first major economy to roll out CBDC. Economists see it as a step towards cashless economy. Public adoption is growing steadily.",
    image: fin2,
    category: "finance",
    featured: false
  },
  {
    id: 18,
    title: "Sensex Hits Record 85,000 Points",
    content: "BSE Sensex crossed 85,000 mark for the first time. IT, banking, and auto stocks led the rally. Foreign investments hit a new quarterly high. Rupee stayed stable against the dollar. Investor sentiment improved post-Budget 2025. FIIs pumped over $10B in 3 months. Retail participation rose with SIP surges. Experts warn of short-term volatility. RBI may review rates to control inflation. Markets show optimism about long-term Indian growth.",
    image: fin3,
    category: "finance",
    featured: false
  }
];

export default newsItems;
