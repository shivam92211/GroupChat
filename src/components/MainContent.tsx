// components/MainContent.tsx
import React from 'react';
import GroupCard from './GroupCard';

const MainContent: React.FC = () => {
  const groupCards = [
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile', // Update with actual link
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
  ];

  return (
    <div className="w-full md:w-full bg-white p-4">
      {/* Header with Title and Search */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">EXPLORE GROUPS</h2>
        <input
          type="text"
          placeholder="Search Group..."
          className="border rounded p-2"
        />
      </div>

      {/* Group Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groupCards.map((group, index) => (
          <GroupCard
            key={index}
            groupImage={group.image}
            groupTitle={group.title}
            groupInfo={group.info}
            joinLink={group.link}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;