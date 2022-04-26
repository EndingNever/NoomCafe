import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import NewAtNoom from './Components/NewAtNoom/NewAtNoom';
import OurStory from './Components/OurStory/OurStory';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NewAtNoom />
      <OurStory />
    </div>
  );
}

export default App;
