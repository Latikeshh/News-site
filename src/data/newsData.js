import ch4 from '../components/img/ch4.jpg';
import budget from '../components/img/budget.jpg';
import cricket from '../components/img/Cricket.avif';

const newsItems = [
  {
    title: "India wins T20 series",
    content: "India defeated Australia 3-2 in a thrilling finish at Mumbai.",
    image: cricket,
    category: "sports",
    featured: true
  },
  {
    title: "Budget 2025 Highlights",
    content: "Govt announces major tax reforms and infrastructure investments.",
    image: budget,
    category: "finance",
    featured: true
  },
  {
    title: "ISRO's new moon mission",
    content: "Chandrayaan-4 scheduled for launch in early 2026.",
    image: ch4,
    category: "science",
    featured: true
  },
  {
    title: "India wins T20 Series",
    content: "India defeated Australia 3-2 in a thrilling finish at Mumbai.",
    image: cricket,
    category: "sports",
    featured: false
  },
  {
    title: "Budget 2025 Highlights",
    content: "Govt announces major tax reforms and infrastructure investments.",
    image: budget,
    category: "finance",
    featured: false
  },
  {
    title: "ISRO's new moon mission",
    content: "Chandrayaan-4 scheduled for launch in early 2026.",
    image: ch4,
    category: "science",
    featured: false
  }
];

export default newsItems;
