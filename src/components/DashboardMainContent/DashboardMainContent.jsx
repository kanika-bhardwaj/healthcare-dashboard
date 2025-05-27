import React from 'react';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

import { healthIndicators } from '../../data/healthIndicators';
import { healthStatusCardsData } from '../../data/healthStatusCardsData';
import { upcomingScheduleData } from '../../data/upcomingScheduleData';
import { activityData } from '../../data/activityData';

import { ArrowRight } from 'lucide-react';

const DashboardMainContent = () => {
  return (
    <main className="flex-1 p-6 lg:p-8 overflow-y-auto custom-scrollbar">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-card flex flex-col h-full">
            <AnatomySection indicators={healthIndicators} />
          </div>
          <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-card flex flex-col h-full">
            <div className="flex-grow">
              <HealthStatusCards cards={healthStatusCardsData} />
            </div>
            <button className="self-end mt-auto pt-4 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors duration-150">
              Details
              <ArrowRight size={16} className="ml-1.5" />
            </button>
          </div>
        </div>
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-card flex flex-col">
          <CalendarView />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-card"> 
          <ActivityFeed activityData={activityData} />
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-card"> 
          <UpcomingSchedule scheduleData={upcomingScheduleData} />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;