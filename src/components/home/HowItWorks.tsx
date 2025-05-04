import { Search, ThumbsUp, Car } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary-500" />,
      title: "Discover",
      description: "Answer a few simple questions about your needs, preferences, and budget."
    },
    {
      icon: <Car className="h-10 w-10 text-primary-500" />,
      title: "Match",
      description: "Get personalized car recommendations based on your unique requirements."
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary-500" />,
      title: "Buy Confidently",
      description: "Make an informed decision with our detailed guides and resources."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">How Carsight Works</h2>
          <p className="text-lg text-secondary-700">
            Our simple three-step process helps you find the perfect car without the stress and confusion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-secondary-100 group"
            >
              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-secondary-600">
                {step.description}
              </p>
              
              {/* Step number */}
              <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;