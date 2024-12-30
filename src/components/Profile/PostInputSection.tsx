// // components/Profile/PostInputSection.tsx
// 'use client';

// import React, { useState } from 'react';

// const PostInputSection: React.FC = () => {
//   const [postContent, setPostContent] = useState('');

//   const handlePost = () => {
//     if (postContent.trim()) {
//       // Handle the post submission logic
//       console.log('Post Content:', postContent);
//       // Clear input
//       setPostContent('');
//     }
//   };

//   return (
//     <div className="bg-gray-100 rounded-lg p-4 mb-4">
//       <textarea
//         placeholder="Write Something..."
//         className="w-full bg-gray-200 text-gray-800 rounded-lg p-2 mb-2"
//         rows={3}
//         value={postContent}
//         onChange={(e) => setPostContent(e.target.value)}
//       ></textarea>
//       <button onClick={handlePost} className="bg-customPink text-white rounded-lg px-4 py-2">
//         Post
//       </button>
//     </div>
//   );
// };

// export default PostInputSection;





'use client';

import React, { useState } from 'react';

interface ApiError {
  error: string;
  code?: string;
}

const PostInputSection: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // In your client component

// const handlePost = async () => {
//   setError(null);

//   if (!title.trim() || !description.trim()) {
//     setError('Please fill in both title and description');
//     return;
//   }

//   setIsLoading(true);

//   try {
//     const response = await fetch('/api/create-post', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         title: title.trim(),
//         description: description.trim(),
//       }),
//     });

//     let data: any = null;
//     try {
//       data = await response.json();
//     } catch (parseError) {
//       console.error('Error parsing JSON:', parseError);
//     }

//     if (!response.ok) {
//       const errorData = data as ApiError;
//       throw new Error(errorData?.error || 'Failed to create post');
//     }

//     // Success
//     alert('Post created successfully!');
//     setTitle('');
//     setDescription('');

//   } catch (error: unknown) {
//     console.error('Error creating post:', error);

//     if (error instanceof Error) {
//       setError(error.message);
//     } else {
//       setError('An unexpected error occurred');
//     }
//   } finally {
//     setIsLoading(false);
//   }
// };

const handlePost = async () => {
  setError(null);

  if (!title.trim() || !description.trim()) {
    setError('Please fill in both title and description');
    return;
  }

  setIsLoading(true);

  try {
    const response = await fetch('/api/create-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title.trim(),
        description: description.trim(),
      }),
    });

    // Check if the response is ok
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create post');
    }

    // Parse the response JSON
    const data = await response.json();

    // Success
    alert('Post created successfully!');
    setTitle('');
    setDescription('');

  } catch (error) {
    console.error('Error creating post:', error);
    
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError('An unexpected error occurred');
    }
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      <input
        type="text"
        placeholder="Title"
        className="w-full bg-gray-200 text-gray-800 rounded-lg p-2 mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
      />
      
      <textarea
        placeholder="Description"
        className="w-full bg-gray-200 text-gray-800 rounded-lg p-2 mb-2"
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={isLoading}
      />
      
      <button 
        onClick={handlePost} 
        className={`bg-customPink text-white rounded-lg px-4 py-2 
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
        disabled={isLoading}
      >
        {isLoading ? 'Creating Post...' : 'Create Post'}
      </button>
    </div>
  );
};

export default PostInputSection;