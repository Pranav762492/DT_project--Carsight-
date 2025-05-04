import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              Simplify Your Car Buying Journey
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-950 leading-tight">
              Find Your Perfect Car Match
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 max-w-lg">
              Overwhelmed by choices? We guide first-time buyers through a personalized car selection process with confidence and ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/car-match" 
                className="btn-accent text-base"
              >
                <span>Find Your Match</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/guide" 
                className="btn-secondary text-base"
              >
                Explore Buyer's Guide
              </Link>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <img 
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Happy family with their new car" 
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              width="600"
              height="400"
            />
            
            {/* Stats Overlay */}
            <div className="absolute -left-6 -bottom-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2">
                  <p className="text-2xl font-bold text-primary-600">93%</p>
                  <p className="text-sm text-secondary-600">User Satisfaction</p>
                </div>
                <div className="text-center p-2">
                  <p className="text-2xl font-bold text-primary-600">15min</p>
                  <p className="text-sm text-secondary-600">Average Decision Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-accent-100 opacity-50 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-primary-100 opacity-50 rounded-tr-full"></div>
    </div>
  );
};

export default HeroSection;