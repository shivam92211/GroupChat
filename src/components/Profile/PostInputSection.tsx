// components/Profile/PostInputSection.tsx
'use client';

import React, { useState } from 'react';

const PostInputSection: React.FC = () => {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    if (postContent.trim()) {
      // Handle the post submission logic
      console.log('Post Content:', postContent);
      // Clear input
      setPostContent('');
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      <textarea
        placeholder="Write Something..."
        className="w-full bg-gray-200 text-gray-800 rounded-lg p-2 mb-2"
        rows={3}
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      ></textarea>
      <button onClick={handlePost} className="bg-pink-500 text-white rounded-lg px-4 py-2">
        Post
      </button>
    </div>
  );
};

export default PostInputSection;