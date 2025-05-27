import React from 'react';
import { Syringe, Eye, Heart, Brain, User } from 'lucide-react'; 

const iconMap = {
  SyringeIcon: Syringe,
  EyeIcon: Eye,
  HeartIcon: Heart,
  BrainIcon: Brain,
  UserIcon: User,
};

const SimpleAppointmentCard = ({ title, time, iconName, iconColorClass }) => {
  const IconComponent = iconMap[iconName];

  return (
    <div className="bg-indigo-100 p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow min-h-[80px]">
      <div className="flex flex-col">
        <h4 className="text-sm font-semibold text-gray-800 mb-0.5">{title}</h4>
        <p className="text-xs text-gray-600">{time}</p>
      </div>
      {IconComponent && (
        <IconComponent 
          size={22} 
          className={`${iconColorClass || 'text-indigo-600'} opacity-80`} 
        />
      )}
    </div>
  );
};

export default SimpleAppointmentCard;