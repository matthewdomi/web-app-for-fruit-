import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-ash-900">
      <div className="container mx-auto px-4 py-2 text-center">
        <p className="text-yellow-500">
          &copy; {new Date().getFullYear()} Fruit Orange. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;