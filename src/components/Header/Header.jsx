import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = ({ userData }) => {
  return (
    <header className="h-20 bg-white shadow-subtle flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center bg-brand-gray-light rounded-lg px-4 py-2 w-1/3 lg:w-1/4">
        <Search size={20} className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none text-sm text-gray-700 w-full"
          readOnly
        />
      </div>

      <div className="flex items-center space-x-6">
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
          <Bell size={22} />
        </button>
        
        <div className="flex items-center space-x-3">
          <img
            src={'/images/user-avatar.png'}
            alt={userData.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-800">{userData.name}</span>
        </div>

        <button className="bg-brand-blue text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-brand-blue-dark transition-colors">
          <Plus size={18} className="mr-1" />
          Add
        </button>
      </div>
    </header>
  );
};

export default Header;
