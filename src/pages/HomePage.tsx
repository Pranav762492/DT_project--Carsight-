import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import WhyCarsight from '../components/home/WhyCarsight';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Carsight - Simplifying Car Buying for Everyone';
  }, []);

  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <WhyCarsight />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;