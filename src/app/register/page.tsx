'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to register');
      }

      const data = await response.json();
      setSuccessMessage('User registered successfully!');
      console.log('User registered:', data);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleRegister = () => {
    console.log('Google register clicked');
    // Add your Google register logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className="absolute top-8 left-8">
        <Image
          src="/your-logo.png" // Replace with your logo path
          alt="Company Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="flex flex-1">
        {/* Left Section - Image */}
        <div className="hidden lg:flex w-1/2 relative">
          <Image
            src="/assets/dine2.png" // Update with appropriate background image
            alt="Register Background"
            layout="fill"
            objectFit="cover"
            className="rounded-r-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-r-3xl" />
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-bold mb-4">Join Us!</h2>
            <p className="text-xl">Create your account to get started</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Sign Up</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
              {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <button
                onClick={handleGoogleRegister}
                className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FcGoogle className="h-5 w-5 mr-2" />
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
