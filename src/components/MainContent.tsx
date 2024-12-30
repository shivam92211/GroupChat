// // // components/MainContent.tsx
// // import React from 'react';
// // import GroupCard from './GroupCard';

// // const MainContent: React.FC = () => {
// //   const groupCards = [
// //     {
// //       image: '/assets/dine.png',
// //       title: '5-Day AI Challenge',
// //       info: 'Growth Club - Business Network - Delhi, IN',
// //       link: '/profile', // Update with actual link
// //     },
// //     {
// //       image: '/assets/dine.png',
// //       title: '5-Day AI Challenge',
// //       info: 'Growth Club - Business Network - Delhi, IN',
// //       link: '/profile',
// //     },
// //     {
// //       image: '/assets/dine.png',
// //       title: '5-Day AI Challenge',
// //       info: 'Growth Club - Business Network - Delhi, IN',
// //       link: '/profile',
// //     },
// //     {
// //       image: '/assets/dine.png',
// //       title: '5-Day AI Challenge',
// //       info: 'Growth Club - Business Network - Delhi, IN',
// //       link: '/profile',
// //     },
// //     {
// //       image: '/assets/dine.png',
// //       title: '5-Day AI Challenge',
// //       info: 'Growth Club - Business Network - Delhi, IN',
// //       link: '/profile',
// //     },
// //     {
// //       image: '/assets/dine.png',
// //       title: '5-Day AI Challenge',
// //       info: 'Growth Club - Business Network - Delhi, IN',
// //       link: '/profile',
// //     },
// //     {
// //       image: '/assets/dine.png',
// //       title: '5-Day AI Challenge',
// //       info: 'Growth Club - Business Network - Delhi, IN',
// //       link: '/profile',
// //     },
// //     {
// //       image: '/assets/dine.png',
// //       title: '5-Day AI Challenge',
// //       info: 'Growth Club - Business Network - Delhi, IN',
// //       link: '/profile',
// //     },
// //   ];

// //   return (
// //     <div className="w-full md:w-full bg-white p-4">
// //       {/* Header with Title and Search */}
// //       <div className="flex justify-between items-center mb-4">
// //         <h2 className="text-xl font-semibold">EXPLORE GROUPS</h2>
// //         <input
// //           type="text"
// //           placeholder="Search Group..."
// //           className="border rounded p-2"
// //         />
// //       </div>

// //       {/* Group Cards Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //         {groupCards.map((group, index) => (
// //           <GroupCard
// //             key={index}
// //             groupImage={group.image}
// //             groupTitle={group.title}
// //             groupInfo={group.info}
// //             joinLink={group.link}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MainContent;



// // components/MainContent.tsx
// import React from 'react';
// import GroupCard from './GroupCard';

// const MainContent: React.FC = () => {
//   const groupCards = [
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
//     <div className="w-full md:w-full bg-white p-4 pt-10">
//       {/* Taskbar */}
//       <div className="flex justify-around border-b-2 border-gray-300 pb-2 mb-4">
//         <button className="text-gray-600 font-semibold hover:text-customPink">
//           EVENTS
//         </button>
//         <button className="text-customPink font-semibold border-b-2 border-customPink">
//           EXPLORE GROUPS
//         </button>
//         <button className="text-gray-600 font-semibold hover:text-customPink">
//           TRAININGS
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search Group..."
//           className="w-3/4 md:w-1/2 border rounded p-2"
//         />
//       </div>

//       {/* Group Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-16">
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





import React, { useState } from "react";
import GroupCard from "./GroupCard";

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("groups");

  const groupCards = [
    {
      image: "/assets/dine.png",
      title: "5-Day AI Challenge",
      info: "Growth Club - Business Network - Delhi, IN",
      link: "/profile",
    },
    {
      image: "/assets/dine.png",
      title: "5-Day AI Challenge",
      info: "Growth Club - Business Network - Delhi, IN",
      link: "/profile",
    },
  ];

  const eventCards = [
    {
      image: "/assets/dine.png",
      title: "AI Workshop",
      info: "Growth Club - Business Network - Delhi, IN",
      date: "Dec 9, 7:00 PM",
    },
  ];

  const trainingCards = [
    {
      image: "/assets/dine.png",
      title: "Machine Learning Bootcamp",
      info: "Growth Club - Business Network - Delhi, IN",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "events":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-16">
            {eventCards.map((event, index) => (
              <div key={index} className="card">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.info}</p>
                <p>{event.date}</p>
              </div>
            ))}
          </div>
        );
      case "groups":
        return (
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
        );
      case "trainings":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-16">
            {trainingCards.map((training, index) => (
              <div key={index} className="card">
                <img src={training.image} alt={training.title} />
                <h3>{training.title}</h3>
                <p>{training.info}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full md:w-full bg-white p-4 pt-10">
      {/* Taskbar */}
      <div className="flex justify-around border-b-2 border-gray-300 pb-2 mb-4">
        <button
          className={`font-semibold ${
            activeTab === "events" ? "text-customPink border-b-2 border-customPink" : "text-gray-600 hover:text-customPink"
          }`}
          onClick={() => setActiveTab("events")}
        >
          EVENTS
        </button>
        <button
          className={`font-semibold ${
            activeTab === "groups" ? "text-customPink border-b-2 border-customPink" : "text-gray-600 hover:text-customPink"
          }`}
          onClick={() => setActiveTab("groups")}
        >
          EXPLORE GROUPS
        </button>
        <button
          className={`font-semibold ${
            activeTab === "trainings" ? "text-customPink border-b-2 border-customPink" : "text-gray-600 hover:text-customPink"
          }`}
          onClick={() => setActiveTab("trainings")}
        >
          TRAININGS
        </button>
      </div>

      {/* Render Active Content */}
      {renderContent()}
    </div>
  );
};

export default MainContent;
