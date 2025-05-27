import React from 'react';

const HealthStatusCards = ({ cards }) => {
  const getProgressBarBgClass = (statusColor) => {
    if (statusColor === 'status-red') return 'bg-status-red';
    if (statusColor === 'status-green') return 'bg-status-green';
    return 'bg-gray-400'; 
  };

  return (
    <div className="flex flex-col space-y-5 flex-grow h-full">
      {cards.map(card => (
        <div
          key={card.id}
          className="bg-white p-5 rounded-2xl shadow-md flex flex-col flex-grow"
        >
          <div className="flex items-center space-x-4 mb-3"> 
            {card.imagePath ? (
              <img
                src={card.imagePath}
                alt={`${card.title} icon`}
                className="w-12 h-12 object-contain"
              />
            ) : (
              <span className="w-12 h-12 text-sm text-gray-400 flex items-center justify-center bg-gray-100 rounded-lg">?</span>
            )}
            <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
          </div>

          <div className="mt-auto flex flex-col">
            <p className="text-sm text-gray-600 mb-2.5">Date: {card.date}</p>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressBarBgClass(card.statusColor)}`} 
                style={{ width: `${card.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;