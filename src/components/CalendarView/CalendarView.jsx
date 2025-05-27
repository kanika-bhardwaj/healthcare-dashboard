import React from 'react';
import { ChevronLeft, ChevronRight, Dumbbell } from 'lucide-react';
import { weeklyCalendarData, appointmentDetails as appointmentDetailsData } from '../../data/calendarData';

const detailIconMap = {
  DumbbellIcon: Dumbbell,
};

const CalendarView = () => {
  const { monthYear, days } = weeklyCalendarData;

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{monthYear}</h2>
        <div className="flex items-center space-x-1">
          <button className="p-2 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700">
            <ChevronLeft size={22} />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-x-1 sm:gap-x-2 md:gap-x-3 flex-grow mb-6">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className={`flex flex-col items-center space-y-2 ${day.isSelected ? 'bg-blue-50 rounded-xl p-2 pt-3 -mt-2 pb-3' : 'pt-3 pb-1'}`}>
            <span className={`text-xs font-medium ${day.isSelected ? 'text-blue-600' : 'text-gray-500'}`}>{day.dayName}</span>
            <span className={`text-xl font-bold ${day.isSelected ? 'text-blue-700' : 'text-gray-700'}`}>{day.dateNumber}</span>
            
            <div className="mt-3 w-full flex flex-col space-y-1.5 items-center flex-grow justify-around">
              {day.timeSlots.map((slot, slotIndex) => {
                let slotClasses = "w-full text-center text-xs font-medium py-1.5 rounded-md ";
                let slotContent = slot.display;

                if (slot.type === 'booked') {
                  slotClasses += "bg-brand-blue-dark text-white"; 
                  slotContent = slot.appointmentText || slot.display;
                } else if (slot.type === 'booked-wide') {
                  slotClasses += "bg-brand-blue-dark text-white py-2 sm:py-1.5 px-1"; 
                  slotContent = slot.appointmentText || slot.display;
                } else if (slot.type === 'available') {
                  slotClasses += "text-gray-400"; 
                } else if (slot.type === 'empty-dash') {
                  slotClasses += "text-gray-400"; 
                } else { 
                  slotClasses += "text-transparent"; 
                  slotContent = "00:00"; 
                }
                return (
                  <div key={slotIndex} className={slotClasses}> 
                    {slotContent}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-auto">
        {appointmentDetailsData.map(appt => {
          const IconComponent = detailIconMap[appt.iconName];
          return (
            <div 
              key={appt.id} 
              className={`p-5 rounded-2xl flex items-start space-x-4 shadow-lg ${appt.bgColor}`}
            >
              {appt.imagePath ? (
                <div className={`p-2 rounded-lg ${appt.iconBgColor || 'bg-opacity-20 bg-black'}`}>
                  <img 
                    src={appt.imagePath} 
                    alt={`${appt.type} icon`} 
                    className="w-6 h-6 object-contain"
                  />
                </div>
              ) : IconComponent ? (
                <div className={`p-2 rounded-lg ${appt.iconBgColor || 'bg-opacity-20 bg-black'}`}>
                  <IconComponent size={24} className={appt.iconColor} />
                </div>
              ) : null}
              
              <div className="flex flex-col">
                <h4 className={`text-lg font-bold ${appt.textColor}`}>{appt.type}</h4>
                <p className={`text-sm ${appt.textColor} opacity-90`}>{appt.time}</p>
                <p className={`text-sm font-medium ${appt.textColor} opacity-95 mt-1`}>{appt.doctor}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;