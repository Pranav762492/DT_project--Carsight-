import { useEffect } from 'react';
import { Car } from 'lucide-react';
import CarQuiz from '../components/car-match/CarQuiz';

const CarMatchPage = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Car Match Tool - Find Your Perfect Car';
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12 pt-8">
          <div className="bg-primary-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Car className="h-10 w-10 text-primary-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Find Your Car Match
          </h1>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
            Answer a few simple questions and we'll help you find the perfect car that fits your needs, preferences, and budget.
          </p>
        </div>
        
        {/* Quiz Component */}
        <div className="max-w-3xl mx-auto">
          <CarQuiz />
        </div>
        
        {/* Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto bg-secondary-50 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sarah J." 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-secondary-800 italic mb-4">
                "As a first-time car buyer, I was completely lost about what would work for me. The Car Match tool asked all the right questions and recommended a perfect car that I might have never considered otherwise. It saved me so much time and stress!"
              </p>
              <p className="font-semibold text-primary-800">Sarah J.</p>
              <p className="text-sm text-secondary-600">Recent college graduate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarMatchPage;