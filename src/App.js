import logo from './logo.svg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BreakingNews from './components/BreakingNews';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <BreakingNews />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
