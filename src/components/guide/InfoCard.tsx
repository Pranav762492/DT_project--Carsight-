import React from 'react';

type InfoCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
};

const InfoCard = ({ title, description, icon, iconBgColor, iconColor }: InfoCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className={`${iconBgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
        <div className={`${iconColor}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-primary-900 mb-3">{title}</h3>
      <p className="text-secondary-700">{description}</p>
    </div>
  );
};

export default InfoCard;