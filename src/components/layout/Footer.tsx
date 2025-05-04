import { Link } from 'react-router-dom';
import { Car, Mail, Phone, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-white" />
              <span className="text-xl font-heading font-bold">Carsight</span>
            </Link>
            <p className="text-secondary-300 text-sm mt-2">
              Simplifying the car-buying journey for everyone through guidance, education, and personalized recommendations.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/car-match" className="text-secondary-300 hover:text-white transition-colors">
                  Car Match Tool
                </Link>
              </li>
              <li>
                <Link to="/guide" className="text-secondary-300 hover:text-white transition-colors">
                  Buyer's Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Resources</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                  Car Buying FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                  Financing Options
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                  Car Maintenance Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Contact Us</h6>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary-300" />
                <a href="mailto:info@carsight.com" className="text-secondary-300 hover:text-white transition-colors">
                  info@carsight.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary-300" />
                <a href="tel:+1234567890" className="text-secondary-300 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-primary-800 text-sm text-secondary-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Carsight. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              A design thinking project by Abhinav, Pranav, Jessica, and Tanishq
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;