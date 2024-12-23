// components/GroupListItem.tsx
import React from 'react';
import Image from 'next/image';

interface GroupListItemProps {
  groupName: string;
  groupDescription: string;
  groupImage: string;
}

const GroupListItem: React.FC<GroupListItemProps> = ({
  groupName,
  groupDescription,
  groupImage,
}) => {
  return (
    <li className="flex items-center mb-2">
      <Image
        src={groupImage}
        alt={groupName}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="ml-2">
        <h4 className="font-semibold">{groupName}</h4>
        <p className="text-gray-500 text-sm">{groupDescription}</p>
      </div>
    </li>
  );
};

export default GroupListItem;