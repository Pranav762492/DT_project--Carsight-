import { Target, Users, LightbulbIcon } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
              Making Car Buying Simple and Accessible for Everyone
            </h2>
            <p className="text-lg text-secondary-700">
              At Carsight, we believe everyone deserves a straightforward and confident car buying experience, regardless of their previous knowledge or experience.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-800">Simplifying Complexity</h3>
                  <p className="text-secondary-600">
                    We transform overwhelming car choices into manageable, personalized recommendations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-800">Empowering First-Time Buyers</h3>
                  <p className="text-secondary-600">
                    We provide educational resources and guidance specifically tailored for those new to car buying.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <LightbulbIcon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-800">Data-Driven Approach</h3>
                  <p className="text-secondary-600">
                    Our recommendations are based on real user needs gathered through extensive research and feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7144171/pexels-photo-7144171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team working on car buying solutions" 
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
            
            {/* Stats overlay */}
            <div className="absolute -right-6 -bottom-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">76%</p>
                  <p className="text-sm text-secondary-600">Users found car buying confusing</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">84%</p>
                  <p className="text-sm text-secondary-600">Found Carsight helpful</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;