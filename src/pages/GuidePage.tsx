import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  Fuel, 
  ShieldCheck, 
  FileText, 
  CreditCard, 
  Car, 
  Banknote, 
  HelpCircle,
  Clock,
  Search,
  ListChecks,
  ArrowRight
} from 'lucide-react';
import FaqAccordion from '../components/guide/FaqAccordion';
import InfoCard from '../components/guide/InfoCard';

const GuidePage = () => {
  // Update page title
  useEffect(() => {
    document.title = "Buyer's Guide - Car Buying Made Simple";
  }, []);

  // FAQ data
  const faqs = [
    {
      question: "What is the 'on-road price' of a car?",
      answer: (
        <div>
          <p>The on-road price is the total amount you'll pay to drive the car out of the dealership. It includes:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Ex-showroom price (the base price of the car)</li>
            <li>Registration fees and road tax</li>
            <li>Insurance costs</li>
            <li>Additional dealer charges and accessories</li>
          </ul>
          <p className="mt-2">Always ask for a detailed breakdown of the on-road price to understand exactly what you're paying for.</p>
        </div>
      )
    },
    {
      question: "What's the difference between petrol and diesel cars?",
      answer: (
        <div>
          <p className="mb-2">Both fuel types have distinct advantages:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary-50 p-4 rounded-lg">
              <p className="font-medium text-primary-800 mb-2">Petrol Cars</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Lower initial cost</li>
                <li>Quieter engine</li>
                <li>Better for short city drives</li>
                <li>Less expensive maintenance</li>
              </ul>
            </div>
            <div className="bg-secondary-50 p-4 rounded-lg">
              <p className="font-medium text-primary-800 mb-2">Diesel Cars</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Better fuel efficiency</li>
                <li>Higher torque (pulling power)</li>
                <li>Ideal for long highway drives</li>
                <li>Often better resale value</li>
              </ul>
            </div>
          </div>
          <p className="mt-3">Choose based on your driving habits: petrol for city use, diesel for highways and long distances.</p>
        </div>
      )
    },
    {
      question: "How do I calculate my car loan EMI?",
      answer: (
        <div>
          <p>Your monthly EMI (Equated Monthly Installment) depends on:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Loan amount (car price minus down payment)</li>
            <li>Interest rate</li>
            <li>Loan tenure (in months or years)</li>
          </ul>
          <p className="mt-2">Use this simple formula: EMI = P × r × (1+r)^n ÷ [(1+r)^n−1]</p>
          <p className="mt-2">Where:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>P = Principal loan amount</li>
            <li>r = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
            <li>n = Total number of monthly installments</li>
          </ul>
          <p className="mt-3">For a quick estimation, use the rule of thumb: a loan of ₹100,000 at 10% interest for 5 years will have an EMI of approximately ₹2,125.</p>
        </div>
      )
    },
    {
      question: "Should I buy a new or used car?",
      answer: (
        <div>
          <p className="mb-2">Both options have their advantages:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary-50 p-4 rounded-lg">
              <p className="font-medium text-primary-800 mb-2">New Car</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Latest features and technology</li>
                <li>Full warranty coverage</li>
                <li>No history of wear and tear</li>
                <li>More financing options</li>
              </ul>
            </div>
            <div className="bg-secondary-50 p-4 rounded-lg">
              <p className="font-medium text-primary-800 mb-2">Used Car</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Lower initial price</li>
                <li>Less depreciation (new cars lose 15-35% value in first year)</li>
                <li>Lower insurance costs</li>
                <li>More car for your budget</li>
              </ul>
            </div>
          </div>
          <p className="mt-3">Consider your budget, how long you plan to keep the car, and your comfort with potential repairs when deciding.</p>
        </div>
      )
    },
    {
      question: "What safety features should I look for in a car?",
      answer: (
        <div>
          <p>Essential safety features to consider include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className="font-medium">Airbags:</span> At minimum, dual front airbags; ideally side and curtain airbags too</li>
            <li><span className="font-medium">ABS (Anti-lock Braking System):</span> Prevents wheels from locking during hard braking</li>
            <li><span className="font-medium">ESC (Electronic Stability Control):</span> Helps maintain control during sudden maneuvers</li>
            <li><span className="font-medium">ISOFIX child seat anchors:</span> For secure installation of child seats</li>
            <li><span className="font-medium">Seatbelt pre-tensioners:</span> Tighten seatbelts automatically during a collision</li>
          </ul>
          <p className="mt-3">Advanced features to look for in higher-end models:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Collision warning and automatic emergency braking</li>
            <li>Lane departure warning and lane keeping assist</li>
            <li>Blind spot monitoring</li>
            <li>Rearview camera and parking sensors</li>
            <li>Adaptive cruise control</li>
          </ul>
          <p className="mt-3">Always check the car's NCAP safety rating (if available) - aim for 4 or 5 stars.</p>
        </div>
      )
    }
  ];
  
  // Buying steps
  const buyingSteps = [
    {
      title: "Research",
      description: "Compare models, features, and prices online before visiting dealerships.",
      icon: <Search className="h-6 w-6" />,
      iconBgColor: "bg-primary-100",
      iconColor: "text-primary-600"
    },
    {
      title: "Budget Planning",
      description: "Determine how much you can spend, including insurance, tax, and maintenance costs.",
      icon: <DollarSign className="h-6 w-6" />,
      iconBgColor: "bg-accent-100",
      iconColor: "text-accent-600"
    },
    {
      title: "Test Drive",
      description: "Test multiple vehicles to compare comfort, handling, and features firsthand.",
      icon: <Car className="h-6 w-6" />,
      iconBgColor: "bg-primary-100",
      iconColor: "text-primary-600"
    },
    {
      title: "Paperwork",
      description: "Review all documents carefully, including warranties, insurance, and loan terms.",
      icon: <FileText className="h-6 w-6" />,
      iconBgColor: "bg-accent-100",
      iconColor: "text-accent-600"
    }
  ];
  
  // Important aspects
  const carAspects = [
    {
      title: "Financing",
      description: "Compare interest rates and loan terms from multiple lenders to find the best deal.",
      icon: <Banknote className="h-6 w-6" />,
      iconBgColor: "bg-success-100",
      iconColor: "text-success-500"
    },
    {
      title: "Insurance",
      description: "Get quotes from multiple insurers and understand what's covered in each policy.",
      icon: <ShieldCheck className="h-6 w-6" />,
      iconBgColor: "bg-primary-100",
      iconColor: "text-primary-600"
    },
    {
      title: "Fuel Economy",
      description: "Consider both city and highway mileage based on your typical driving patterns.",
      icon: <Fuel className="h-6 w-6" />,
      iconBgColor: "bg-warning-100",
      iconColor: "text-warning-500"
    },
    {
      title: "Maintenance Costs",
      description: "Research the cost of spare parts, service intervals, and typical repairs.",
      icon: <CreditCard className="h-6 w-6" />,
      iconBgColor: "bg-accent-100",
      iconColor: "text-accent-600"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <div className="bg-primary-50 py-12">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Car Buying Guide
            </h1>
            <p className="text-lg text-secondary-700 mb-8">
              Everything you need to know to navigate the car buying process with confidence.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#faqs" className="btn-primary">
                Common Questions
              </a>
              <a href="#steps" className="btn-secondary">
                Buying Steps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs section */}
      <section id="faqs" className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <HelpCircle className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
                Frequently Asked Questions
              </h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Buying steps section */}
      <section id="steps" className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <ListChecks className="h-8 w-8 text-primary-600 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
              The Car Buying Process
            </h2>
          </div>
          <p className="text-lg text-secondary-700 mb-8 max-w-3xl">
            Follow these steps to make your car buying journey smooth and successful.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyingSteps.map((step, index) => (
              <div key={index} className="relative">
                <InfoCard 
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  iconBgColor={step.iconBgColor}
                  iconColor={step.iconColor}
                />
                
                {/* Step number */}
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Connection line */}
                {index < buyingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary-300">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important aspects section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex items-center mb-8">
            <Clock className="h-8 w-8 text-primary-600 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
              Important Aspects to Consider
            </h2>
          </div>
          <p className="text-lg text-secondary-700 mb-8 max-w-3xl">
            Beyond the car itself, these factors can significantly impact your ownership experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carAspects.map((aspect, index) => (
              <InfoCard 
                key={index}
                title={aspect.title}
                description={aspect.description}
                icon={aspect.icon}
                iconBgColor={aspect.iconBgColor}
                iconColor={aspect.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Ready to find your perfect car?</h2>
              <p className="text-primary-100">
                Use our Car Match tool to get personalized recommendations based on your needs.
              </p>
            </div>
            <Link 
              to="/car-match" 
              className="inline-flex items-center bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-md font-medium transition-colors"
            >
              <span>Take the Quiz</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Floating help button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center">
          <HelpCircle className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default GuidePage;