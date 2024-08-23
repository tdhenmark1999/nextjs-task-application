import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-200">
              Task 1
            </Link>
          </li>
          <li>
            <Link href="/task2" className="text-white hover:text-gray-200">
              Task 2
            </Link>
          </li>
          <li>
            <Link href="/task3" className="text-white hover:text-gray-200">
              Task 3
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
