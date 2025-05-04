import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Carsight made my first car purchase so much less stressful. Their quiz matched me with exactly what I was looking for within my budget! (Note: This is a design prototype testimonial)",
    author: "Jamie S.",
    position: "First-time buyer",
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "The guides helped me understand car financing terms that would have otherwise been confusing. I felt confident negotiating at the dealership. (Note: This is a design prototype testimonial)",
    author: "Michael P.",
    position: "Recent graduate",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "After using Carsight, I realized I didn't need all the expensive features I thought I wanted. Saved me thousands on my new family car! (Note: This is a design prototype testimonial)",
    author: "Priya K.",
    position: "Parent",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-secondary-700">
              Design prototype testimonials showcasing potential user experiences with Carsight.
            </p>
          </div>

          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary-100" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg md:text-xl text-secondary-800 italic mb-6">
                    {testimonials[current].quote}
                  </p>
                  <div>
                    <p className="font-semibold text-primary-800">{testimonials[current].author}</p>
                    <p className="text-sm text-secondary-600">{testimonials[current].position}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-end mt-6 space-x-2">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-secondary-100 hover:bg-secondary-200 text-secondary-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={next}
                className="p-2 rounded-full bg-secondary-100 hover:bg-secondary-200 text-secondary-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    current === index 
                      ? 'w-8 bg-primary-500' 
                      : 'w-2 bg-secondary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;