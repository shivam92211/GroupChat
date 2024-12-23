// components/Header.tsx
'use client'; // Ensure this component is client-side

import React, { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

interface HeaderProps {
  logoText?: string;
  navLinks?: Array<{ name: string; href: string }>;
  groupCount?: number;
  onAddGroup?: () => void;
  onCreateGroup?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  logoText = 'LOGO',
  navLinks = [
    { name: 'Home', href: '/' },
    { name: 'My Groups', href: '/groups' },
  ],
  groupCount = 19,
  onAddGroup,
  onCreateGroup,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu when the Esc key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">{logoText}</div>

      {/* Navigation Links - Hidden on small screens */}
      <nav className="hidden md:flex items-center space-x-4">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-700 hover:text-gray-900"
          >
            {link.name}
          </Link>
        ))}
        <span className="text-gray-500">{groupCount} Groups</span>
      </nav>

      {/* Action Buttons - Hidden on small screens */}
      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={onAddGroup}
          className="bg-pink-100 rounded-full p-2 hover:bg-pink-200 transition"
          aria-label="Add Group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <button
          onClick={onCreateGroup}
          className="bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-600 transition"
        >
          Create Group
        </button>
      </div>

      {/* Mobile Menu Button - Visible on small screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
          aria-label="Open Menu"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <Transition show={isMenuOpen} as={Fragment}>
        {/* Overlay */}
        <Transition.Child
          as="div"
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide-in Menu */}
        <Transition.Child
          as="div"
          enter="transition transform duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition transform duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-lg z-50 p-6 overflow-y-auto"
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
              aria-label="Close Menu"
            >
              {/* Close (X) Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="mt-8 flex flex-col space-y-4">
            {/* Navigation Links */}
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 text-lg"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
            <span className="text-gray-500">{groupCount} Groups</span>

            {/* Divider */}
            <hr className="my-4" />

            {/* Action Buttons */}
            <button
              onClick={() => {
                if (onAddGroup) {
                  onAddGroup();
                }
                setIsMenuOpen(false);
              }}
              className="bg-pink-100 rounded-full p-2 hover:bg-pink-200 transition flex items-center justify-center"
              aria-label="Add Group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button
              onClick={() => {
                if (onCreateGroup) {
                  onCreateGroup();
                }
                setIsMenuOpen(false);
              }}
              className="bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-600 transition"
            >
              Create Group
            </button>
          </div>
        </Transition.Child>
      </Transition>
    </header>
  );
};

export default Header;