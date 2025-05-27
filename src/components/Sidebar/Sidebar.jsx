import React from 'react';
import { LayoutDashboard, History, CalendarDays, ListChecks, BarChart2, TestTube2, MessageSquare, HelpCircle, Settings, ChevronDown } from 'lucide-react';

const iconMap = {
  DashboardIcon: LayoutDashboard,
  HistoryIcon: History,
  CalendarIcon: CalendarDays,
  AppointmentsIcon: ListChecks,
  StatisticsIcon: BarChart2,
  TestsIcon: TestTube2,
  ChatIcon: MessageSquare,
  SupportIcon: HelpCircle,
  SettingsIcon: Settings,
};

const Sidebar = ({ navLinks }) => {
  return (
    <div className="w-64 bg-white text-brand-text p-5 flex flex-col shadow-lg"> 
      <div className="text-2xl font-bold text-brand-blue mb-10">
        Healthcare.
      </div>

      <h3 className="text-sm text-gray-500 font-semibold mb-3 uppercase">General</h3>
      <nav className="flex-grow">
        <ul>
          {navLinks.map((link) => {
            const IconComponent = iconMap[link.icon];
            return (
              <li key={link.id} className="mb-1">
                <a
                  href="#" 
                  className={`flex items-center py-2.5 px-4 rounded-lg transition-colors duration-200 ease-in-out
                    ${link.active 
                      ? 'bg-brand-blue-light text-brand-blue font-semibold' 
                      : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'
                    }`}
                >
                  {IconComponent && <IconComponent size={20} className="mr-3" />}
                  <span>{link.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;