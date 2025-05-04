import { Link } from 'react-router-dom';
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-secondary-50">
      <div className="text-center max-w-md">
        <div className="bg-secondary-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="h-12 w-12 text-primary-600" />
        </div>
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Page Not Found</h1>
        <p className="text-secondary-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="btn-primary flex items-center justify-center"
          >
            <Home className="mr-2 h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center justify-center"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;