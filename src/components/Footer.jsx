// Footer.jsx
import React from 'react';

// Custom SVG Icon
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white p-4 text-center text-sm text-red-500 border-t border-gray-200">
      <div className="flex items-center justify-center">
        <InfoIcon />
        <span className="ml-2">
          Check the Email address that is attached to your KRA Pin for easier Password reset and tax filing.
        </span>
      </div>
      <div className="mt-2 text-gray-500">
        © {new Date().getFullYear()} Online Cyber. All rights reserved.
      </div>
    </footer>
  );
}