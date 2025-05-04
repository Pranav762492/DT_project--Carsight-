import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Users, ShieldCheck } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to find your perfect car?
            </h2>
            <p className="text-lg text-primary-100">
              Try our car matching tool to find your ideal vehicle without the stress and confusion.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/car-match" 
                className="inline-flex items-center bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                <span>Find Your Match</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/8985458/pexels-photo-8985458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Happy car owner with new car" 
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
            
            {/* Floating message */}
            <div className="absolute -bottom-6 -left-6 bg-white text-secondary-900 p-4 rounded-lg shadow-lg max-w-xs">
              <p className="font-semibold text-primary-800">
                "I found my dream car in just 15 minutes! Thank you, Carsight!"
              </p>
              <p className="text-sm text-secondary-600 mt-1">
                — Alex, design prototype user
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;