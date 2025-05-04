import { Lightbulb, Search, HeartHandshake, PencilRuler, PieChart, Sparkles } from 'lucide-react';

const DesignProcess = () => {
  const stages = [
    {
      icon: <HeartHandshake className="h-8 w-8 text-white" />,
      name: "Empathize",
      description: "Understanding consumer pain points through surveys and interviews with car buyers at different experience levels."
    },
    {
      icon: <PieChart className="h-8 w-8 text-white" />,
      name: "Define",
      description: "Identifying key challenges: information overload, technical jargon, and lack of personalized guidance."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      name: "Ideate",
      description: "Brainstorming solutions for simplifying the car buying journey through guided experiences."
    },
    {
      icon: <PencilRuler className="h-8 w-8 text-white" />,
      name: "Prototype",
      description: "Creating the Carsight platform with personalized car matching and educational resources."
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      name: "Test",
      description: "Gathering feedback from users to refine the experience and improve recommendations."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      name: "Implement",
      description: "Launching Carsight to help first-time buyers and others navigate the car buying process with confidence."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Design Thinking Journey</h2>
          <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
            Carsight was created through a rigorous design thinking process, focusing on solving real user problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div 
              key={index} 
              className="bg-white border border-secondary-200 rounded-lg hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="bg-primary-600 p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-500 rounded-lg">
                    {stage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{stage.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-secondary-700">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Survey Insights Section */}
        <div className="mt-16 bg-secondary-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">Key Insights from Our Empathy Research</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">78%</div>
              <p className="text-secondary-700">of first-time buyers feel overwhelmed by car options</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">65%</div>
              <p className="text-secondary-700">struggle to understand car financing terminology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">82%</div>
              <p className="text-secondary-700">want personalized recommendations based on lifestyle</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">91%</div>
              <p className="text-secondary-700">value simplified explanations of car features</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">73%</div>
              <p className="text-secondary-700">prefer step-by-step guidance through the buying process</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">69%</div>
              <p className="text-secondary-700">worry about making the wrong decision due to lack of knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;