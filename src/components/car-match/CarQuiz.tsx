import { useState } from 'react';
import { ArrowRight, ArrowLeft, Car, DollarSign, Fuel, Users, Gauge, MapPin, ShieldCheck } from 'lucide-react';

// Types for quiz and result
type QuizQuestion = {
  id: string;
  question: string;
  description?: string;
  type: 'select' | 'range' | 'checkbox';
  options?: {
    value: string;
    label: string;
    icon?: JSX.Element;
  }[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
};

type CarResult = {
  id: number;
  name: string;
  image: string;
  price: string;
  fuelType: string;
  seating: number;
  mileage: string;
  description: string;
  features: string[];
  matchPercentage: number;
};

// Quiz questions
const quizQuestions: QuizQuestion[] = [
  {
    id: 'budget',
    question: 'What is your budget range?',
    description: 'Select a price range that fits your financial plan.',
    type: 'range',
    min: 5000,
    max: 100000,
    step: 5000,
    unit: '$'
  },
  {
    id: 'purpose',
    question: 'What will you primarily use your car for?',
    description: 'This helps us understand your driving patterns and needs.',
    type: 'select',
    options: [
      { value: 'commute', label: 'Daily Commute', icon: <MapPin className="h-5 w-5" /> },
      { value: 'family', label: 'Family Transport', icon: <Users className="h-5 w-5" /> },
      { value: 'adventure', label: 'Outdoor Adventures', icon: <Gauge className="h-5 w-5" /> },
      { value: 'luxury', label: 'Luxury & Comfort', icon: <ShieldCheck className="h-5 w-5" /> }
    ]
  },
  {
    id: 'fuelType',
    question: 'What type of fuel do you prefer?',
    description: 'Different fuel types offer different benefits in terms of cost, efficiency, and environmental impact.',
    type: 'select',
    options: [
      { value: 'petrol', label: 'Petrol', icon: <Fuel className="h-5 w-5" /> },
      { value: 'diesel', label: 'Diesel', icon: <Fuel className="h-5 w-5" /> },
      { value: 'hybrid', label: 'Hybrid', icon: <Fuel className="h-5 w-5" /> },
      { value: 'electric', label: 'Electric', icon: <Fuel className="h-5 w-5" /> }
    ]
  },
  {
    id: 'seating',
    question: 'How many seats do you need?',
    description: 'Consider your family size and if you frequently travel with others.',
    type: 'select',
    options: [
      { value: '2', label: '2 Seats', icon: <Users className="h-5 w-5" /> },
      { value: '4-5', label: '4-5 Seats', icon: <Users className="h-5 w-5" /> },
      { value: '6-7', label: '6-7 Seats', icon: <Users className="h-5 w-5" /> },
      { value: '8+', label: '8+ Seats', icon: <Users className="h-5 w-5" /> }
    ]
  },
  {
    id: 'features',
    question: 'Which features are important to you?',
    description: 'Select all that apply to your preferences.',
    type: 'checkbox',
    options: [
      { value: 'safety', label: 'Advanced Safety Features', icon: <ShieldCheck className="h-5 w-5" /> },
      { value: 'technology', label: 'Technology & Connectivity', icon: <Gauge className="h-5 w-5" /> },
      { value: 'comfort', label: 'Comfort & Luxury', icon: <ShieldCheck className="h-5 w-5" /> },
      { value: 'performance', label: 'Performance & Handling', icon: <Gauge className="h-5 w-5" /> },
      { value: 'fuelEfficiency', label: 'Fuel Efficiency', icon: <Fuel className="h-5 w-5" /> },
      { value: 'storage', label: 'Cargo Space', icon: <Car className="h-5 w-5" /> }
    ]
  }
];

// Sample car results (in a real app, these would be generated from backend data)
const carResults: CarResult[] = [
  {
    id: 1,
    name: "Honda Civic",
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$20,000 - $25,000",
    fuelType: "Petrol",
    seating: 5,
    mileage: "30-36 mpg",
    description: "A reliable compact sedan perfect for daily commuting with excellent fuel economy and modern features.",
    features: ["Apple CarPlay/Android Auto", "Collision Mitigation Braking", "Adaptive Cruise Control", "Lane Keeping Assist"],
    matchPercentage: 95
  },
  {
    id: 2,
    name: "Toyota RAV4 Hybrid",
    image: "https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$28,000 - $35,000",
    fuelType: "Hybrid",
    seating: 5,
    mileage: "40-41 mpg",
    description: "A versatile crossover SUV with excellent fuel efficiency, spacious interior, and advanced safety features.",
    features: ["All-Wheel Drive", "Toyota Safety Sense", "Wireless Phone Charging", "Hybrid Powertrain"],
    matchPercentage: 88
  },
  {
    id: 3,
    name: "Ford F-150",
    image: "https://images.pexels.com/photos/2676532/pexels-photo-2676532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$30,000 - $45,000",
    fuelType: "Petrol",
    seating: 6,
    mileage: "20-25 mpg",
    description: "A powerful and versatile full-size pickup truck ideal for those who need towing capacity and utility.",
    features: ["Pro Trailer Backup Assist", "360-Degree Camera", "SYNC 4 Infotainment", "Onboard Generator"],
    matchPercentage: 72
  }
];

const CarQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  
  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelectOption = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({ ...answers, [currentQuestion.id]: parseInt(e.target.value) });
  };

  const handleCheckboxChange = (value: string) => {
    if (selectedFeatures.includes(value)) {
      setSelectedFeatures(selectedFeatures.filter(item => item !== value));
    } else {
      setSelectedFeatures([...selectedFeatures, value]);
    }
    setAnswers({ ...answers, [currentQuestion.id]: selectedFeatures });
  };

  const isOptionSelected = (value: string) => {
    return answers[currentQuestion.id] === value;
  };

  const isFeatureSelected = (value: string) => {
    return selectedFeatures.includes(value);
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'select':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentQuestion.options?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelectOption(option.value)}
                className={`p-6 border rounded-lg text-left transition-all ${
                  isOptionSelected(option.value)
                    ? 'border-primary-500 bg-primary-50 shadow-md'
                    : 'border-secondary-200 hover:border-primary-300 hover:bg-secondary-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    isOptionSelected(option.value) ? 'bg-primary-100 text-primary-700' : 'bg-secondary-100 text-secondary-700'
                  }`}>
                    {option.icon}
                  </div>
                  <span className="font-medium">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        );
      
      case 'range':
        return (
          <div className="space-y-6">
            <div className="text-center text-2xl font-semibold text-primary-700">
              {currentQuestion.unit}{answers[currentQuestion.id] || currentQuestion.min?.toLocaleString()}
            </div>
            <input
              type="range"
              min={currentQuestion.min}
              max={currentQuestion.max}
              step={currentQuestion.step}
              value={answers[currentQuestion.id] || currentQuestion.min}
              onChange={handleRangeChange}
              className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between text-sm text-secondary-600">
              <span>{currentQuestion.unit}{currentQuestion.min?.toLocaleString()}</span>
              <span>{currentQuestion.unit}{currentQuestion.max?.toLocaleString()}</span>
            </div>
          </div>
        );
      
      case 'checkbox':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentQuestion.options?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleCheckboxChange(option.value)}
                className={`p-4 border rounded-lg text-left transition-all ${
                  isFeatureSelected(option.value)
                    ? 'border-primary-500 bg-primary-50 shadow-md'
                    : 'border-secondary-200 hover:border-primary-300 hover:bg-secondary-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    isFeatureSelected(option.value) ? 'bg-primary-100 text-primary-700' : 'bg-secondary-100 text-secondary-700'
                  }`}>
                    {option.icon}
                  </div>
                  <span className="font-medium text-sm">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  const renderCarResults = () => {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">Your Car Matches</h2>
          <p className="text-secondary-700">
            Based on your preferences, here are the cars we recommend for you.
          </p>
        </div>

        <div className="space-y-6">
          {carResults.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-secondary-200">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-primary-900">{car.name}</h3>
                    <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {car.matchPercentage}% Match
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-secondary-500">Price Range</p>
                      <p className="font-medium text-secondary-900">
                        <DollarSign className="h-4 w-4 inline-block mb-1" /> {car.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500">Fuel Type</p>
                      <p className="font-medium text-secondary-900">
                        <Fuel className="h-4 w-4 inline-block mb-1" /> {car.fuelType}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500">Seating</p>
                      <p className="font-medium text-secondary-900">
                        <Users className="h-4 w-4 inline-block mb-1" /> {car.seating} Passengers
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500">Fuel Economy</p>
                      <p className="font-medium text-secondary-900">
                        <Gauge className="h-4 w-4 inline-block mb-1" /> {car.mileage}
                      </p>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-secondary-700">{car.description}</p>
                  
                  <div className="mt-4">
                    <p className="text-sm font-medium text-secondary-900 mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {car.features.map((feature, index) => (
                        <span key={index} className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-4">
          <button 
            onClick={() => {
              setCurrentStep(0);
              setAnswers({});
              setSelectedFeatures([]);
              setShowResults(false);
            }}
            className="btn-secondary"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  };

  if (showResults) {
    return renderCarResults();
  }

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="w-full bg-secondary-100 rounded-full h-2.5">
        <div 
          className="bg-primary-600 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Question Counter */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-secondary-500">
          Question {currentStep + 1} of {quizQuestions.length}
        </span>
        <span className="text-sm font-medium text-primary-600">
          {Math.round(progress)}% Complete
        </span>
      </div>
      
      {/* Question */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold text-primary-900 mb-2">
          {currentQuestion.question}
        </h2>
        {currentQuestion.description && (
          <p className="text-secondary-600 mb-6">{currentQuestion.description}</p>
        )}
        
        {/* Answer Options */}
        <div className="py-4">
          {renderQuestion()}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${
            currentStep === 0
              ? 'text-secondary-400 cursor-not-allowed'
              : 'text-secondary-700 hover:text-primary-600'
          }`}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Previous</span>
        </button>
        
        <button
          onClick={handleNext}
          className="btn-primary flex items-center space-x-2"
        >
          <span>{currentStep === quizQuestions.length - 1 ? 'See Results' : 'Next'}</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CarQuiz;