// components/RightSidebar.tsx
import React from 'react';
import GroupListItem from './GroupListItem';

interface Group {
  name: string;
  description: string;
  image: string;
}

const RightSidebar: React.FC = () => {
  const joinedGroups: Group[] = [
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
    // Add more groups as needed
  ];

  return (
    <div className="w-1/4 bg-white p-4 shadow-md hidden lg:block" id="right-sidebar">
      <h3 className="font-semibold mb-2">Groups You Joined</h3>
      <ul>
        {joinedGroups.map((group, index) => (
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

export default RightSidebar;