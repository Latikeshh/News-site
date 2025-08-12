import React from 'react';

import pol1 from '../components/img/Lok sabha.avif';
import pol2 from '../components/img/india-france.webp';
import pol3 from '../components/img/Union.webp';
import pol4 from '../components/img/supreme.webp';
import pol5 from '../components/img/National.png';
import pol6 from '../components/img/Electorol.webp';
import pol7 from '../components/img/india-us.webp';
import pol8 from '../components/img/Record.webp';
import pol9 from '../components/img/Anti-curruption.jpg';
import pol10 from '../components/img/economy.jpg';


import world1 from '../components/img/UN.webp';
import world2 from '../components/img/south.webp';
import world3 from '../components/img/indian-satelight.png';
import world4 from '../components/img/global1.png';
import world5 from '../components/img/world.jpg';
import world6 from '../components/img/world6.png';
import world7 from '../components/img/world7.jpg';
import world8 from '../components/img/world8.jpg';
import world9 from '../components/img/world9.jpg';
import world10 from '../components/img/world10.jpg';

import business1 from '../components/img/business1.jpg';
import business2 from '../components/img/business2.png';
import business3 from '../components/img/business3.jpg';
import business4 from '../components/img/business4.jpg';
import business5 from '../components/img/business5.png';
import business6 from '../components/img/business6.avif';
import business7 from '../components/img/business7.jpg';
import business8 from '../components/img/business8.jpg';
import business9 from '../components/img/business9.jpg';
import business10 from '../components/img/business10.jpg';


import bollywood1 from '../components/img/bollywood1.jpg';
import bollywood2 from '../components/img/bollywood2.jpg';
import bollywood3 from '../components/img/bollywood3.jpg';
import bollywood4 from '../components/img/bollywood4.jpg';
import bollywood5 from '../components/img/bollywood5.jpg';
import bollywood6 from '../components/img/bollywood6.jpeg';
import bollywood7 from '../components/img/bollywood7.jpg';
import bollywood8 from '../components/img/bollywood8.jpg';
import bollywood9 from '../components/img/bollywood9.jpg';
import bollywood10 from '../components/img/bollywood10.webp';

import finance1 from '../components/img/Lok sabha.avif';
import finance2 from '../components/img/Lok sabha.avif';
import finance3 from '../components/img/Lok sabha.avif';
import finance4 from '../components/img/Lok sabha.avif';
import finance5 from '../components/img/Lok sabha.avif';
import finance6 from '../components/img/Lok sabha.avif';
import finance7 from '../components/img/Lok sabha.avif';
import finance8 from '../components/img/Lok sabha.avif';
import finance9 from '../components/img/Lok sabha.avif';
import finance10 from '../components/img/Lok sabha.avif';

const newsItems = [
  // POLITICS
{
    id: 1,
    title: "Lok Sabha Passes Women's Reservation Bill",
    content: "The Indian Parliament passed the Women's Reservation Bill, ensuring 33% seats for women in the Lok Sabha and state assemblies. Leaders across parties hailed this as a milestone in empowering women in politics.",
    image: pol1,
    category: "politics",
    featured: true
  },
  {
    id: 2,
    title: "India Signs Defense Pact With France",
    content: "India and France signed a new defense agreement focusing on joint production of fighter jets and submarines, enhancing strategic ties in the Indo-Pacific region.",
    image: pol2,
    category: "politics",
    featured: false
  },
  {
    id: 3,
    title: "Union Budget 2025 Presented in Parliament",
    content: "The Finance Minister announced tax relief for middle-class families, increased infrastructure spending, and special incentives for renewable energy projects.",
    image: pol3,
    category: "politics",
    featured: false
  },
  {
    id: 4,
    title: "Supreme Court Strikes Down Unconstitutional Law",
    content: "The Supreme Court of India struck down a state law restricting free speech, calling it a violation of fundamental rights guaranteed by the Constitution.",
    image: pol4,
    category: "politics",
    featured: false
  },
  {
    id: 5,
    title: "National Education Policy 2025 Announced",
    content: "The government unveiled the updated NEP 2025 focusing on AI-driven learning, skill development, and promotion of regional languages in schools.",
    image: pol5,
    category: "politics",
    featured: false
  },
  {
    id: 6,
    title: "Electoral Reforms Bill Cleared by Parliament",
    content: "The bill introduces online voting for NRIs, stricter limits on campaign spending, and mandatory televised debates for candidates.",
    image: pol6,
    category: "politics",
    featured: false
  },
  {
    id: 7,
    title: "India-US Bilateral Summit Concludes in New Delhi",
    content: "Prime Minister Modi and the US President signed agreements on clean energy, cybersecurity, and semiconductor manufacturing partnerships.",
    image: pol7,
    category: "politics",
    featured: false
  },
  {
    id: 8,
    title: "Record Turnout in State Assembly Elections",
    content: "Several states witnessed record voter turnout exceeding 78%, with high participation from youth and women voters.",
    image: pol8,
    category: "politics",
    featured: false
  },
  {
    id: 9,
    title: "Anti-Corruption Bill Gets Cabinet Nod",
    content: "The bill proposes stronger penalties for corruption, whistleblower protection, and the creation of a national anti-graft authority.",
    image: pol9,
    category: "politics",
    featured: false
  },
  {
    id: 10,
    title: "Economic Reservation Policy Sparks Debate",
    content: "The Centre proposed a 10% quota in jobs and education for economically weaker sections among upper castes, drawing mixed reactions.",
    image: pol10,
    category: "politics",
    featured: false
  },

  // WORLD
{
  id: 11,
  title: "India Chairs UN Climate Summit 2025",
  content: "India led discussions at the UN Climate Summit, advocating for a $150 billion global green fund to help developing nations transition to clean energy.",
  image: world1,
  category: "world",
  featured: true
},
{
  id: 12,
  title: "India Mediates Peace Talks in South Asia",
  content: "New Delhi hosted historic peace talks between two neighboring countries, resulting in a ceasefire agreement and new trade cooperation.",
  image: world2,
  category: "world",
  featured: false
},
{
  id: 13,
  title: "Indian Satellite Helps Track Cyclone in Pacific",
  content: "ISRO's latest satellite provided early warnings to Pacific nations, helping save thousands of lives during a severe cyclone.",
  image: world3,
  category: "world",
  featured: false
},
{
  id: 14,
  title: "Global Markets Rally as Inflation Eases",
  content: "Global stock markets surged after data showed inflation slowing in the US and Europe, boosting investor confidence worldwide.",
  image: world4,
  category: "world",
  featured: false
},
{
  id: 15,
  title: "Historic Peace Accord Signed Between Two Rival Nations",
  content: "A landmark peace agreement was signed between two countries in conflict for decades, with UN mediation ensuring lasting stability.",
  image: world5,
  category: "world",
  featured: false
},
{
  id: 16,
  title: "Global Refugee Population Hits Record High",
  content: "The UNHCR reported over 110 million displaced people worldwide due to conflicts and climate disasters, calling for urgent global action.",
  image: world6 ,
  category: "world",
  featured: false
},

{
  id: 17,
  title: "Indian Navy Joins Anti-Piracy Mission",
  content: "Indian warships joined an international task force to combat piracy in the Arabian Sea, ensuring safety of global trade routes.",
  image: world7 ,
  category: "world",
  featured: false
},

{
  id: 18,
  title: "Major Breakthrough in Middle East Peace Talks",
  content: "Negotiators announced a ceasefire agreement and plans for democratic elections in a long-conflicted region.",
  image: world8,
  category: "world",
  featured: false
},

{
  id: 19,
  title: "Arctic Ice Melting at Alarming Rate",
  content: "Scientists warn that the Arctic could face ice-free summers by 2035 if greenhouse gas emissions are not drastically reduced.",
  image: world9 ,
  category: "world",
  featured: false
},
{
  id: 20,
  title: "World Bank Announces $500B Climate Recovery Fund",
  content: "The fund aims to support green infrastructure, renewable energy, and sustainable agriculture in developing nations.",
  image: world10,
  category: "world",
  featured: false
},

// Business News
{
  id: 21,
  title: "India’s Largest Startup IPO Debuts Strong",
  content: "India's leading e-commerce startup made a stellar debut on the NSE, closing 42% higher than the issue price.",
  image: business1,
  category: "business",
  featured: true
},
{
  id: 22,
  title: "Adani Group Announces $10B Green Energy Push",
  content: "Adani Green Energy will invest heavily in solar and wind projects to achieve net-zero emissions by 2040.",
  image: business2,
  category: "business",
  featured: false
},
{
  id: 23,
  title: "Tata Motors Unveils Electric Truck for Commercial Use",
  content: "Tata Motors launched India's first fully electric long-haul truck, aiming to reduce logistics costs and emissions.",
  image: business3,
  category: "business",
  featured: false
},
{
  id: 24,
  title: "Global Tech Giant Opens R&D Hub in Bengaluru",
  content: "A US-based technology leader announced a $1 billion investment in a new AI and semiconductor research hub in India.",
  image: business4,
  category: "business",
  featured: false
},
{
  id: 25,
  title: "Indian Steel Industry Reports Record Exports",
  content: "Steel exports hit an all-time high, driven by demand from Southeast Asia and the Middle East.",
  image: business5,
  category: "business",
  featured: false
},
{
  id: 26,
  title: "Amazon to Invest $3B in Indian E-Commerce Operations",
  content: "The investment will focus on expanding warehouses and delivery networks in tier-2 and tier-3 cities.",
  image: business6,
  category: "business",
  featured: false
},
{
  id: 27,
  title: "Mahindra & Mahindra Expands EV Lineup",
  content: "The auto major introduced two new electric SUV models targeting urban commuters.",
  image: business7,
  category: "business",
  featured: false
},
{
  id: 28,
  title: "Reliance Jio to Launch 6G Trials in 2026",
  content: "Reliance Industries announced plans to begin 6G trials with global telecom partners.",
  image: business8,
  category: "business",
  featured: false
},
{
  id: 29,
  title: "Indian Pharma Exports Surge by 15%",
  content: "Demand for generic drugs and vaccines has fueled strong growth in India’s pharmaceutical sector.",
  image: business9,
  category: "business",
  featured: false
},
{
  id: 30,
  title: "HDFC Bank Opens 500 New Branches in Rural India",
  content: "Aimed at boosting financial inclusion, the bank will expand its presence in underserved areas.",
  image: business10,
  category: "business",
  featured: false
},



// Bollywood News
{
  id: 31,
  title: "Shah Rukh Khan’s Next Film Crosses ₹100 Crore in 3 Days",
  content: "The action-thriller became one of the fastest Bollywood films to hit the ₹100 crore mark.",
  image: bollywood1,
  category: "bollywood",
  featured: true
},
{
  id: 32,
  title: "Deepika Padukone Joins Marvel Cinematic Universe",
  content: "The actress is confirmed to star in an upcoming Marvel superhero film.",
  image: bollywood2,
  category: "bollywood",
  featured: false
},
{
  id: 33,
  title: "Akshay Kumar Announces Biopic on Indian Army Hero",
  content: "Inspired by true events, the film will begin shooting later this year.",
  image: bollywood3,
  category: "bollywood",
  featured: false
},
{
  id: 34,
  title: "Ranbir Kapoor and Alia Bhatt Set for Joint Production Venture",
  content: "The power couple will produce a romantic drama under their new banner.",
  image: bollywood4,
  category: "bollywood",
  featured: false
},
{
  id: 35,
  title: "Indian Film Wins Best Foreign Language Film at Oscars",
  content: "A socially relevant drama bagged the prestigious award, bringing global recognition to Indian cinema.",
  image: bollywood5,
  category: "bollywood",
  featured: false
},
{
  id: 36,
  title: "Karan Johar Confirms Sequel to ‘Kabhi Khushi Kabhie Gham’",
  content: "The iconic family drama will return with a new generation of characters.",
  image: bollywood6,
  category: "bollywood",
  featured: false
},
{
  id: 37,
  title: "Salman Khan to Host New Reality Show on OTT",
  content: "The show will focus on celebrity challenges and interactive audience voting.",
  image: bollywood7,
  category: "bollywood",
  featured: false
},
{
  id: 38,
  title: "Priyanka Chopra Producing Bollywood-Hollywood Crossover Film",
  content: "The film will feature actors from both industries and release globally.",
  image: bollywood8,
  category: "bollywood",
  featured: false
},
{
  id: 39,
  title: "Bollywood’s Highest-Paid Actress Signs Three-Film Deal",
  content: "The deal is reportedly worth ₹200 crore over three years.",
  image: bollywood9,
  category: "bollywood",
  featured: false
},
{
  id: 40,
  title: "Vicky Kaushal’s Spy Thriller Gets International Release",
  content: "The film will hit screens in over 50 countries simultaneously.",
  image: bollywood10,
  category: "bollywood",
  featured: false
},



// Finance News
{
  id: 41,
  title: "RBI Keeps Repo Rate Unchanged at 6.5%",
  content: "The central bank cited stable inflation and strong economic growth as reasons for maintaining rates.",
  image: finance1,
  category: "finance",
  featured: true
},
{
  id: 42,
  title: "Sensex Crosses 80,000 for the First Time",
  content: "Strong corporate earnings and foreign inflows pushed the benchmark index to a record high.",
  image: finance2,
  category: "finance",
  featured: false
},
{
  id: 43,
  title: "India’s Forex Reserves Hit $700 Billion",
  content: "The reserves strengthen the country’s economic stability and global trade position.",
  image: finance3,
  category: "finance",
  featured: false
},
{
  id: 44,
  title: "Gold Prices Surge as Rupee Weakens",
  content: "Gold crossed ₹65,000 per 10 grams amid global economic uncertainty.",
  image: finance4,
  category: "finance",
  featured: false
},
{
  id: 45,
  title: "SBI Reports Record Quarterly Profit",
  content: "India’s largest lender posted a 35% year-on-year jump in profits.",
  image: finance5,
  category: "finance",
  featured: false
},
{
  id: 46,
  title: "Mutual Fund SIP Inflows Touch ₹20,000 Crore in July",
  content: "Retail investors continue to invest heavily in equity mutual funds.",
  image: finance6,
  category: "finance",
  featured: false
},
{
  id: 47,
  title: "IMF Revises India’s Growth Forecast to 8%",
  content: "The International Monetary Fund upgraded India’s growth outlook citing robust domestic demand.",
  image: finance7,
  category: "finance",
  featured: false
},
{
  id: 48,
  title: "Cryptocurrency Trading Volumes Rise in India",
  content: "Despite regulatory uncertainty, crypto platforms reported a 25% increase in transactions.",
  image: finance8,
  category: "finance",
  featured: false
},

{
  id: 49,
  title: "Government Launches Sovereign Green Bonds",
  content: "Funds raised will be used for renewable energy and environmental projects.",
  image: finance9,
  category: "finance",
  featured: false
},
{
  id: 50,
  title: "Rupee Strengthens Against US Dollar",
  content: "The currency gained 50 paise in a week due to strong capital inflows.",
  image: finance10,
  category: "finance",
  featured: false
}


];

export default newsItems;
