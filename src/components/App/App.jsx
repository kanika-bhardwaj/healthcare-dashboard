import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import DashboardMainContent from '../DashboardMainContent/DashboardMainContent';

import { navLinks } from '../../data/navLinks';
import { userData } from '../../data/userData';

function App() {
  return (
    <div className="flex h-screen bg-brand-gray-light overflow-hidden">
      <Sidebar navLinks={navLinks} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userData={userData} />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;