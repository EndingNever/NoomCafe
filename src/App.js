import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import NewAtNoom from './Components/NewAtNoom/NewAtNoom';
import OurStory from './Components/OurStory/OurStory';
import BrewGuides from './Components/BrewGuides/BrewGuides';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NewAtNoom />
      <OurStory />
      <BrewGuides />
    </div>
  );
}

export default App;
