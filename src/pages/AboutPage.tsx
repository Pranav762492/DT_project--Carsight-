import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MissionSection from '../components/about/MissionSection';
import DesignProcess from '../components/about/DesignProcess';
import TeamSection from '../components/about/TeamSection';

const AboutPage = () => {
  // Update page title
  useEffect(() => {
    document.title = 'About Carsight - Our Mission & Team';
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            About Carsight
          </h1>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto mb-8">
            We're on a mission to transform how people buy cars through simplified guidance, education, and personalized recommendations.
          </p>
          <Link 
            to="/car-match" 
            className="btn-accent text-base inline-flex items-center"
          >
            <span>Start Your Car Journey</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Main Sections */}
      <MissionSection />
      <DesignProcess />
      <TeamSection />
    </div>
  );
};

export default AboutPage;