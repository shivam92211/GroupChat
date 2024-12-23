// components/Profile/PostsSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';

const PostsSection: React.FC = () => {
  const posts = [
    {
      id: 1,
      authorName: 'Rohit Bhandwada',
      timeAgo: '5 minutes ago',
      profileImage: '/assets/jade.png',
      postImage: '/assets/dine2.png',
      content:
        'The term "dummy" has several meanings depending on the context. In general terms, a dummy is a person or thing that serves as a substitute or placeholder in traditional areas.',
      likes: 455,
    },
    // Add more posts as needed
  ];

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg p-4 mb-4 shadow-md">
          <div className="flex flex-col mb-2">
            <div className="flex items-center gap-3 pb-2">
              <Image
                src={post.profileImage}
                alt="Profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{post.authorName}</h4>
                <p className="text-sm text-gray-500">{post.timeAgo}</p>
              </div>
            </div>
            <Image
              src={post.postImage}
              alt="Post"
              width={600}
              height={240}
              className="h-40 w-full rounded-lg object-cover"
            />
            <div className="ml-4">
              <p className="mt-1 ml-0">
                {post.content}{' '}
                <a href="#" className="text-pink-500">
                  SEE MORE
                </a>
              </p>
            </div>
            <div className="flex ml-4 mt-1 ">
              <Image src="/assets/Vector.svg" alt="like" width={16} height={16} className="mr-2" />
              <p className="text-sm">{post.likes} Likes</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostsSection;