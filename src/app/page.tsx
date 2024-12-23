// app/page.tsx
'use client'; // Ensure client-side rendering

import React from 'react';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import MainContent from '../components/MainContent';

const HomePage: React.FC = () => {
  const handleAddGroup = () => {
    // Logic to handle adding a group (e.g., open a modal)
    console.log('Add Group button clicked');
  };

  const handleCreateGroup = () => {
    // Logic to handle creating a group (e.g., navigate to create group page)
    console.log('Create Group button clicked');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header
        logoText="MyApp"
        navLinks={[
          { name: 'Home', href: '/' },
          { name: 'My Groups', href: '/my-groups' },
          { name: 'About', href: '/about' },
        ]}
        groupCount={19}
        onAddGroup={handleAddGroup}
        onCreateGroup={handleCreateGroup}
      />

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