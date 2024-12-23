// components/MobileSidebar.tsx
import React from 'react';
import GroupListItem from './GroupListItem';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const yourGroups = [
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
    // Add additional groups as needed
  ];

  const joinedGroups = yourGroups; // For simplicity, using the same list

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white w-3/4 h-full p-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-red-500 absolute top-4 right-4"
          aria-label="Close Menu"
        >
          Close
        </button>

        {/* Menu Title */}
        <h3 className="font-semibold mb-2">Menu</h3>

        {/* Your Groups */}
        <h4 className="font-semibold mt-4">Your Groups</h4>
        <ul>
          {yourGroups.map((group, index) => (
            <GroupListItem
              key={index}
              groupName={group.name}
              groupDescription={group.description}
              groupImage={group.image}
            />
          ))}
        </ul>

        {/* Groups You Joined */}
        <h4 className="font-semibold mt-4">Groups You Joined</h4>
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
      </div>
    </div>
  );
};

export default MobileSidebar;