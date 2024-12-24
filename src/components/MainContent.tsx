// // components/MainContent.tsx
// import React from 'react';
// import GroupCard from './GroupCard';

// const MainContent: React.FC = () => {
//   const groupCards = [
//     {
//       image: '/assets/dine.png',
//       title: '5-Day AI Challenge',
//       info: 'Growth Club - Business Network - Delhi, IN',
//       link: '/profile', // Update with actual link
//     },
//     {
//       image: '/assets/dine.png',
//       title: '5-Day AI Challenge',
//       info: 'Growth Club - Business Network - Delhi, IN',
//       link: '/profile',
//     },
//     {
//       image: '/assets/dine.png',
//       title: '5-Day AI Challenge',
//       info: 'Growth Club - Business Network - Delhi, IN',
//       link: '/profile',
//     },
//     {
//       image: '/assets/dine.png',
//       title: '5-Day AI Challenge',
//       info: 'Growth Club - Business Network - Delhi, IN',
//       link: '/profile',
//     },
//     {
//       image: '/assets/dine.png',
//       title: '5-Day AI Challenge',
//       info: 'Growth Club - Business Network - Delhi, IN',
//       link: '/profile',
//     },
//     {
//       image: '/assets/dine.png',
//       title: '5-Day AI Challenge',
//       info: 'Growth Club - Business Network - Delhi, IN',
//       link: '/profile',
//     },
//     {
//       image: '/assets/dine.png',
//       title: '5-Day AI Challenge',
//       info: 'Growth Club - Business Network - Delhi, IN',
//       link: '/profile',
//     },
//     {
//       image: '/assets/dine.png',
//       title: '5-Day AI Challenge',
//       info: 'Growth Club - Business Network - Delhi, IN',
//       link: '/profile',
//     },
//   ];

//   return (
//     <div className="w-full md:w-full bg-white p-4">
//       {/* Header with Title and Search */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">EXPLORE GROUPS</h2>
//         <input
//           type="text"
//           placeholder="Search Group..."
//           className="border rounded p-2"
//         />
//       </div>

//       {/* Group Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {groupCards.map((group, index) => (
//           <GroupCard
//             key={index}
//             groupImage={group.image}
//             groupTitle={group.title}
//             groupInfo={group.info}
//             joinLink={group.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainContent;



// components/MainContent.tsx
import React from 'react';
import GroupCard from './GroupCard';

const MainContent: React.FC = () => {
  const groupCards = [
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
    {
      image: '/assets/dine.png',
      title: '5-Day AI Challenge',
      info: 'Growth Club - Business Network - Delhi, IN',
      link: '/profile',
    },
  ];

  return (
    <div className="w-2/4 md:w-full bg-white p-4 pt-10">
      {/* Taskbar */}
      <div className="flex justify-around border-b-2 border-gray-300 pb-2 mb-4">
        <button className="text-gray-600 font-semibold hover:text-customPink">
          EVENTS
        </button>
        <button className="text-customPink font-semibold border-b-2 border-customPink">
          EXPLORE GROUPS
        </button>
        <button className="text-gray-600 font-semibold hover:text-customPink">
          TRAININGS
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Group..."
          className="w-3/4 md:w-1/2 border rounded p-2"
        />
      </div>

      {/* Group Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-16">
        {groupCards.map((group, index) => (
          <GroupCard
            key={index}
            groupImage={group.image}
            groupTitle={group.title}
            groupInfo={group.info}
            joinLink={group.link}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
