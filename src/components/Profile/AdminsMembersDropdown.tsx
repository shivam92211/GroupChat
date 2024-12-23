// components/Profile/AdminsMembersDropdown.tsx
'use client';

import React, { useState } from 'react';

const AdminsMembersDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const admins = ['Akhil Kumar', 'Sumit Sharma'];
  const members = [
    'Raman Kumar',
    'Ajay Sharma',
    'Alok Yadav',
    'Ravi Kumar',
    'Ajay Sharma',
    'Alok Yadav',
    'Ravi Kumar',
    'Ajay Sharma',
    'Alok Yadav',
    'Ravi Kumar',
  ];

  return (
    <div className="md:hidden mb-4">
      <button
        id="dropdown-button"
        className="bg-pink-500 text-white rounded-lg px-4 py-2 w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        Admins &amp; Members
      </button>
      {isOpen && (
        <div id="dropdown-menu" className="bg-white rounded-lg shadow-md mt-2">
          <div className="p-4">
            <h3 className="font-semibold mb-2">Admins</h3>
            <ul className="list-disc pl-5">
              {admins.map((admin, index) => (
                <li key={index}>{admin}</li>
              ))}
            </ul>
            <h3 className="font-semibold mt-4 mb-2">
              Members <span className="text-gray-400">(200+)</span>
            </h3>
            <ul className="list-disc pl-5">
              {members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminsMembersDropdown;