// components/Profile/ProfileSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';

const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col rounded-lg p-6 mb-4 relative">
      {/* Background Image */}
      <div className="h-40 w-full relative">
        <Image
          src="/assets/dine2.png"
          alt="Background"
          layout="fill"
          className="h-full w-full rounded-md object-cover"
        />
      </div>

      {/* Profile Image and Details */}
      <div className="flex items-center bg-white bg-opacity-0 p-4 rounded-lg relative z-10 -mt-12">
        <Image
          src="/assets/pro.png"
          alt="Profile"
          width={128}
          height={128}
          className="h-32 w-32 rounded-full border-4 border-white"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Pro Investor</h2>
          <p className="text-gray-600">Panchkula, India</p>
        </div>
        <button className="ml-auto bg-pink-500 text-white rounded-lg px-4 py-2">Share</button>
      </div>
      <p className="mt-4">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum."{' '}
        <a href="#" className="text-pink-500">
          SEE MORE
        </a>
      </p>
    </div>
  );
};

export default ProfileSection;