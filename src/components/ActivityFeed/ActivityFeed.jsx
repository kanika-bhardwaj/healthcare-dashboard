import React from 'react';

const ActivityFeed = ({ activityData }) => {
  if (!activityData || !activityData.days) {
    return <div className="p-4 text-red-500">Activity data is missing or invalid.</div>;
  }
  const { summaryText, days } = activityData;

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Activity</h2>
        <p className="text-sm text-gray-500">{summaryText}</p>
      </div>

      <div className="flex-grow flex flex-col justify-end h-56">
        
        <div className="grid grid-cols-7 gap-x-3 sm:gap-x-4 items-end flex-grow px-2">
          {days.map((dayData, dayIndex) => (
            <div key={dayIndex} className="flex justify-center items-end space-x-1 h-full w-full relative"> 
              {dayData.bars.map((bar, barIndex) => (
                <div
                  key={barIndex}
                  className={`w-1/3 rounded-t-md ${bar.heightClass} ${bar.colorClass} opacity-75 hover:opacity-100 transition-opacity`}
                  title={`Bar ${barIndex + 1} on ${dayData.dayLabel}`}
                >
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-x-3 sm:gap-x-4 mt-2 px-2">
          {days.map((dayData, index) => (
            <div key={index} className="text-center">
              <span className="text-xs text-gray-500">{dayData.dayLabel}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;