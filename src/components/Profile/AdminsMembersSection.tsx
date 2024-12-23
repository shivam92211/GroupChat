// components/Profile/AdminsMembersSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';

const AdminsMembersSection: React.FC = () => {
  const admins = [
    {
      name: 'Rohan',
      description: 'Growth Club· Business Network · Delhi, IN',
      image: '/assets/jade.png',
    },
    {
      name: 'Rohan',
      description: 'Growth Club· Business Network · Delhi, IN',
      image: '/assets/jade.png',
    },
  ];

  const members = [
    // Repeat the same member for demonstration
    ...Array(10).fill({
      name: 'Rohan',
      description: 'Growth Club· Business Network · Delhi, IN',
      image: '/assets/jade.png',
    }),
  ];

  return (
    <div className="hidden md:block md:w-1/3 md:bg-white md:p-4 md:rounded-lg md:shadow-md md:ml-4">
      <h3 className="font-semibold mb-2">Admins</h3>
      <ul className="list-disc pl-5">
        {admins.map((admin, index) => (
          <li key={index}>
            <div className="flex items-center gap-3">
              <Image
                src={admin.image}
                alt="Admin"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{admin.name}</h4>
                <p className="text-sm text-gray-500">{admin.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="font-semibold mt-4 mb-2">
        Members <span className="text-gray-400">(200+)</span>
      </h3>
      <ul className="list-disc pl-5 space-y-1">
        {members.map((member, index) => (
          <li key={index}>
            <div className="flex items-center gap-3">
              <Image
                src={member.image}
                alt="Member"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminsMembersSection;