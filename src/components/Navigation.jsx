import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white">
            DeLo Tools
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
              aria-label="toggle menu"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                ) : (
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.5 6a.75.75 0 01.75-.75h14a.75.75 0 010 1.5h-14A.75.75 0 012.5 6zm0 4a.75.75 0 01.75-.75h14a.75.75 0 010 1.5h-14a.75.75 0 01-.75-.75zm.75 3.25a.75.75 0 100 1.5h14a.75.75 0 100-1.5h-14z" />
                )}
              </svg>
            </button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
            <div className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <Link to="/base64-decoder" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Base64 Decoder
              </Link>
              <Link to="/json-formatter" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                JSON Formatter
              </Link>
              <Link to="/jwt-decoder" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                JWT Decoder
              </Link>
              <Link to="/unescape-n-format" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Unescape & Format
              </Link>
              <Link to="/sql-formatter" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                SQL Formatter
              </Link>
              <Link to="/hash-generator" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Hash Generator
              </Link>
              <Link to="/random-data-generator" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                Random Data Generator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}