
import About from './Component/About';
import FeatureSection from './Component/FeaturesSection';
import HeroSection from './Component/HeroSection';
import Navigation from './Component/Navigation';
import WhenSection from './Component/WhenSection';
import Footer from './Component/Footer';
import SliderSection from './Component/SliderSection';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <SliderSection/>
      <About/>
      <Fade left>
      <WhenSection/>
      </Fade>
      <Fade top>
      <FeatureSection/>
      </Fade>
      <RubberBand>
      <Footer/>
      </RubberBand>
      
    </div>
  );
}

export default App;
