import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import NewAtNoom from './Components/NewAtNoom/NewAtNoom';
import OurStory from './Components/OurStory/OurStory';
import BrewGuides from './Components/BrewGuides/BrewGuides';
import CatchUp from './Components/CatchUp/CatchUp';
import Newsletter from './Components/Newsletter/Newsletter';
import NoomFooter from './Components/NoomFooter/NoomFooter';
import { useState } from 'react';
import { AppContainer } from './Components/Styled/Styled';

function App() {
  const [dark, setDark] = useState(true);

  return (
    <AppContainer dark={dark} className="App" id='home'>
      <Navbar dark={dark} setDark={setDark}/>
      <Hero />
      <NewAtNoom dark={dark} />
      <OurStory dark={dark}/>
      <BrewGuides />
      <CatchUp />
      <Newsletter />
      <NoomFooter dark={dark} />
    </AppContainer>
  );
}

export default App;
