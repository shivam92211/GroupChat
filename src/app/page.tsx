// app/page.tsx
'use client'; // Ensure client-side rendering

import React from 'react';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import MainContent from '../components/MainContent';

const HomePage: React.FC = () => {


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">


      {/* Main Flex Container */}
      <div className="flex flex-1 pt-16"> {/* pt-16 to compensate for fixed header height */}
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <MainContent />

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;