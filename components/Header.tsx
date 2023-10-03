import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-ash-900">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a href="/" className="text-yellow-500 hover:text-white font-bold">
          Fruit Orange
        </a>
        <div className="flex items-center">
          <button
            className="block lg:hidden text-yellow-500 hover:text-white focus:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.293 5.293L12 12.586l-7.293-7.293-1.414 1.414L10.586 14H3v2h7.586l-5.293 5.293 1.414 1.414L12 17.414l7.293 7.293 1.414-1.414L13.414 16H21v-2h-7.586l5.293-5.293-1.414-1.414z"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                ></path>
              )}
            </svg>
          </button>
          <ul
            className={`${isMenuOpen ? 'block' : 'hidden'
              } lg:flex space-x-4 mt-4 lg:mt-0 bg-ash-900`}
          >
            <li>
              <a
                href="/"
                className="text-yellow-500 hover:text-white"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-yellow-500 hover:text-white"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-yellow-500 hover:text-white"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;