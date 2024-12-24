// components/LeftSidebar.tsx
import React from 'react';
import Image from 'next/image';
import GroupListItem from './GroupListItem';


const LeftSidebar: React.FC = () => {
  const groups: Group[] = [
    {
      name: 'Group Heading 1',
      description: 'Growth Club · Business Network · Delhi, IN',
      image: '/assets/jade.png',
    },
    {
      name: 'Group Heading 2',
      description: 'Growth Club · Business Network · Delhi, IN',
      image: '/assets/jade.png',
    },
    {
      name: 'Group Heading 3',
      description: 'Growth Club · Business Network · Delhi, IN',
      image: '/assets/jade.png',
    },
    {
      name: 'Group Heading 4',
      description: 'Growth Club · Business Network · Delhi, IN',
      image: '/assets/jade.png',
    },
    {
      name: 'Group Heading 5',
      description: 'Growth Club · Business Network · Delhi, IN',
      image: '/assets/jade.png',
    },
  ];

  return (
    <div className="w-1/3 bg-white p-4 pt-6 shadow-md hidden md:block" id="left-sidebar">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-4">
        <Image
          src="/assets/rohit.png"
          alt="Profile"
          className="h-32 w-32 mb-2 rounded-full"
          width={128}
          height={128}
        />
        <div className="ml-4 text-center">
          <h2 className="text-lg font-semibold">Rohit Bhanwara</h2>
          <p className="text-gray-500">@Designer07</p>
        </div>
      </div>

      {/* Your Groups */}
      <h3 className="font-semibold mb-2">Your Groups</h3>
      <ul>
        {groups.map((group, index) => (
          <GroupListItem
            key={index}
            groupName={group.name}
            groupDescription={group.description}
            groupImage={group.image}
          />
        ))}
      </ul>
      <button className="text-pink-500 mt-2">SEE MORE</button>
    </div>
  );
};

export default LeftSidebar;