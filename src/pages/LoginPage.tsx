import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';

type FormMode = 'login' | 'signup';

const LoginPage = () => {
  const [mode, setMode] = useState<FormMode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Update page title
  useEffect(() => {
    document.title = mode === 'login' ? 'Login - Carsight' : 'Sign Up - Carsight';
  }, [mode]);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        if (!name.trim()) {
          throw new Error('Please enter your name');
        }
        await signup(name, email, password);
      }
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col justify-center bg-secondary-50">
      <div className="container-custom max-w-5xl">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Column - Image */}
            <div className="md:w-1/2 relative hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Happy family with their new car"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-900/50 flex flex-col justify-center px-8 py-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  {mode === 'login' ? 'Welcome Back!' : 'Join Carsight Today'}
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  {mode === 'login' 
                    ? 'Log back in to access your personalized car recommendations and saved preferences.'
                    : 'Create an account to save your preferences, get personalized car recommendations, and more.'
                  }
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                    <p className="ml-4">Personalized car recommendations</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                    <p className="ml-4">Save your preferences and search history</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                    <p className="ml-4">Get notified about new matches and features</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-primary-900">
                  {mode === 'login' ? 'Sign In to Carsight' : 'Create Your Account'}
                </h1>
                <p className="text-secondary-600 mt-2">
                  {mode === 'login' 
                    ? 'Enter your credentials to access your account'
                    : 'Fill in your details to create a new account'
                  }
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-error-50 border-l-4 border-error-500 text-error-700 rounded">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {mode === 'signup' && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                      Full Name
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
                )}

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
                  <label htmlFor="password" className="block text-sm font-medium text-secondary-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-secondary-400" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 input-field py-3 rounded-md w-full"
                      placeholder={mode === 'signup' ? 'Create a password' : 'Enter your password'}
                      required
                      minLength={6}
                    />
                  </div>
                  {mode === 'login' && (
                    <div className="mt-1 text-right">
                      <a href="#" className="text-sm text-primary-600 hover:text-primary-800">
                        Forgot password?
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="btn-primary w-full py-3 flex justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      mode === 'login' ? 'Sign In' : 'Create Account'
                    )}
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-secondary-600">
                    {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="ml-1 text-primary-600 hover:text-primary-800 font-medium"
                    >
                      {mode === 'login' ? 'Sign up' : 'Sign in'}
                    </button>
                  </p>
                </div>
              </form>

              <div className="mt-8">
                <button 
                  type="button"
                  onClick={() => navigate('/')}
                  className="text-center w-full text-secondary-600 hover:text-primary-600"
                >
                  Continue as Guest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;