import React from 'react';
import { Heart, Footprints } from 'lucide-react'; 

const iconComponentsMap = {
  HeartIcon: Heart,
  FootprintsIcon: Footprints,
};

const AnatomySection = ({ indicators }) => {
  return (
    <div className="h-full flex flex-col"> 
      <h2 className="text-xl font-semibold text-brand-text mb-4">Dashboard Overview</h2>
      <div className="relative w-full max-w-[260px] mx-auto md:max-w-[280px] my-auto"> 
        <img
          src="/body-anatomy.jpg" 
          alt="Anatomical Illustration"
          className="w-full h-auto"
        />
        {indicators.map(indicator => {
          const IconComponent = iconComponentsMap[indicator.iconName];
          return (
            <div
              key={indicator.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1.5 p-1.5 pr-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-transform cursor-default"
              style={{ top: indicator.top, left: indicator.left }}
            >
              {IconComponent && (
                <IconComponent
                  size={16} 
                  className={`${indicator.iconColorClass || 'text-gray-600'} shrink-0`}
                />
              )}
              <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{indicator.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnatomySection;