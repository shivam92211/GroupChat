// app/profile/page.tsx
'use client';

import React from 'react';
import ProfileSection from '@/components/Profile/ProfileSection';
import AdminsMembersDropdown from '@/components/Profile/AdminsMembersDropdown';
import PostInputSection from '@/components/Profile/PostInputSection';
import PostsSection from '@/components/Profile/PostsSection';
import AdminsMembersSection from '@/components/Profile/AdminsMembersSection';

const ProfilePage: React.FC = () => {
  return (
    <div className="mx-auto px-8 p-4 bg-white bg-opacity-90">
      {/* Profile Section */}
      <ProfileSection />

      {/* Dashboard Section */}
      <div className="flex flex-col md:flex-row">
        {/* Admins and Members Dropdown for Small Screens */}
        <AdminsMembersDropdown />

        {/* Post Input and Posts Section */}
        <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow-md">
          <PostInputSection />
          <PostsSection />
        </div>

        {/* Admins and Members Section for Larger Screens */}
        <AdminsMembersSection />
      </div>
    </div>
  );
};

export default ProfilePage;