import { Search, FileQuestion, BarChart3 } from 'lucide-react';

const WhyCarsight = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-primary-600" />,
      title: "Overwhelming Choices",
      description: "We simplify the vast number of options and features available in the market to help you focus on what matters most to you."
    },
    {
      icon: <FileQuestion className="h-8 w-8 text-primary-600" />,
      title: "First-time Buyer Fears",
      description: "Our platform provides clear guidance and education specially designed for buyers with little to no experience in car purchases."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary-600" />,
      title: "Our Simplified Solution",
      description: "Using data-driven insights and a user-friendly approach, we create a personalized car buying experience tailored to your needs."
    }
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Why Choose Carsight?</h2>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            We understand the challenges of car buying and have designed our platform to address the most common pain points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-3 bg-primary-100 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCarsight;