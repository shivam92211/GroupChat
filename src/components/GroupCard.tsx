// components/GroupCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GroupCardProps {
  groupImage: string;
  groupTitle: string;
  groupInfo: string;
  joinLink?: string;
}

const GroupCard: React.FC<GroupCardProps> = ({
  groupImage,
  groupTitle,
  groupInfo,
  joinLink = '#',
}) => {
  return (
    <div className="bg-gray-200 p-4 rounded shadow">
      <Image
        src={groupImage}
        alt={`${groupTitle} Image`}
        className="w-full h-32 object-cover rounded"
        width={400}
        height={128}
      />
      <h3 className="font-semibold mt-2">{groupTitle}</h3>
      <p className="text-gray-500">{groupInfo}</p>
      <Link href={joinLink} passHref>
        <button className="bg-pink-500 text-white rounded p-2 mt-2 hover:bg-pink-600 transition">
          Join Group
        </button>
      </Link>
    </div>
  );
};

export default GroupCard;