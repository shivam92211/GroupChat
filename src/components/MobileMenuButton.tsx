// components/MobileMenuButton.tsx
import React from 'react';

interface MobileMenuButtonProps {
  onClick: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 md:hidden">
      <button
        onClick={onClick}
        className="bg-pink-500 text-white rounded-full p-3 hover:bg-pink-600 transition"
        aria-label="Open Menu"
      >
        Menu
      </button>
    </div>
  );
};

export default MobileMenuButton;