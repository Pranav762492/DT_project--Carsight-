import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Loader2 } from 'lucide-react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update page title
  useEffect(() => {
    document.title = 'Contact Us - Carsight';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            We'd Love to Hear From You
          </h1>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
            Have questions about the car buying process? Want to share your experience? Our team is here to help!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-success-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
                  <Send className="h-8 w-8 text-success-600" />
                </div>
                <h2 className="text-2xl font-bold text-primary-900 mb-4">Message Sent!</h2>
                <p className="text-secondary-700 mb-6">
                  Thank you for reaching out. Our team will get back to you soon.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-secondary-400" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10 input-field py-3 rounded-md w-full"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-secondary-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 input-field py-3 rounded-md w-full"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-secondary-400" />
                      </div>
                      <textarea
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="pl-10 input-field py-3 rounded-md w-full resize-none"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="btn-primary w-full py-3 flex justify-center items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin mr-2" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-primary-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Email Us</p>
                    <a href="mailto:info@carsight.com" className="text-lg font-medium text-primary-800 hover:text-primary-600">
                      info@carsight.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Call Us</p>
                    <a href="tel:+1234567890" className="text-lg font-medium text-primary-800 hover:text-primary-600">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Office Location</p>
                    <p className="text-lg font-medium text-primary-800">
                      VNR VJIET, Bachupally, Hyderabad
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Section */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Meet Our Team</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary-50 rounded-lg p-4">
                    <p className="font-semibold text-primary-800">Abhinav</p>
                    <p className="text-sm text-secondary-600">UX Research Lead</p>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-4">
                    <p className="font-semibold text-primary-800">Pranav</p>
                    <p className="text-sm text-secondary-600">Frontend Designer</p>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-4">
                    <p className="font-semibold text-primary-800">Jessica</p>
                    <p className="text-sm text-secondary-600">UI/UX Designer</p>
                  </div>
                  <div className="bg-secondary-50 rounded-lg p-4">
                    <p className="font-semibold text-primary-800">Tanishq</p>
                    <p className="text-sm text-secondary-600">Frontend Developer</p>
                  </div>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="font-semibold text-primary-800">Academic Mentor: Pratyusha</p>
                  <p className="text-sm text-secondary-600">Guiding our design thinking journey</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/about" className="text-primary-600 hover:text-primary-800 font-medium flex items-center">
                  <span>Learn more about our team</span>
                  <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            to="/car-match" 
            className="btn-accent text-base inline-flex items-center"
          >
            <span>Try Our Car Match Tool</span>
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;