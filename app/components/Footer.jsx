import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-purple-700 text-white py-1">
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold">
          &copy; {currentYear} Bitroot. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Made with ❤️ by Swami & Friends
        </p>
      </div>
    </footer>
  );
};
