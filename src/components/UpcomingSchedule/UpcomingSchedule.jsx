import React from 'react';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';

const UpcomingSchedule = ({ scheduleData }) => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold text-brand-text mb-5">The Upcoming Schedule</h2>
      <div className="flex-grow space-y-6"> 
        {scheduleData.map(group => (
          <div key={group.dayGroup}>
            <h3 className="text-sm font-medium text-gray-500 mb-3">{group.dayGroup}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.appointments.map(appt => (
                <SimpleAppointmentCard
                  key={appt.id}
                  title={appt.title}
                  time={appt.time}
                  iconName={appt.iconName}
                  iconColorClass={appt.iconColorClass}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;