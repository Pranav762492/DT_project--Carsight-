import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Car } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

type HeaderProps = {
  isScrolled: boolean;
};

const Header = ({ isScrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Determine header background based on scroll position
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || mobileMenuOpen 
      ? 'bg-white shadow-md py-3' 
      : 'bg-transparent py-5'
  }`;

  // Link styles based on active state and scroll position
  const getLinkClasses = ({ isActive }: { isActive: boolean }) => {
    return `relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-primary-600' 
        : isScrolled 
          ? 'text-secondary-900 hover:text-primary-600' 
          : 'text-secondary-900 hover:text-primary-600'
    }`;
  };

  return (
    <header className={headerClasses}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            aria-label="Carsight Home"
          >
            <Car className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-heading font-bold text-primary-800">
              Carsight
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={getLinkClasses}>Home</NavLink>
            <NavLink to="/about" className={getLinkClasses}>About</NavLink>
            <NavLink to="/car-match" className={getLinkClasses}>Car Match</NavLink>
            <NavLink to="/guide" className={getLinkClasses}>Buyer's Guide</NavLink>
            <NavLink to="/contact" className={getLinkClasses}>Contact</NavLink>
          </nav>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center ml-6 space-x-4">
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-sm font-medium text-secondary-900 hover:text-primary-600">
                  <span>Hi, {user?.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button 
                    onClick={logout} 
                    className="block w-full text-left px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="btn-primary">
                Login / Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-secondary-500 hover:text-secondary-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'text-primary-600' : 'text-secondary-900'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'text-primary-600' : 'text-secondary-900'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/car-match" 
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'text-primary-600' : 'text-secondary-900'}`
              }
            >
              Car Match
            </NavLink>
            <NavLink 
              to="/guide" 
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'text-primary-600' : 'text-secondary-900'}`
              }
            >
              Buyer's Guide
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'text-primary-600' : 'text-secondary-900'}`
              }
            >
              Contact
            </NavLink>
            
            <div className="pt-2 border-t border-secondary-100">
              {isAuthenticated ? (
                <div className="space-y-2">
                  <p className="text-sm text-secondary-500">Logged in as {user?.name}</p>
                  <button 
                    onClick={logout}
                    className="block w-full text-left py-2 text-secondary-900"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login" className="block w-full btn-primary text-center">
                  Login / Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;