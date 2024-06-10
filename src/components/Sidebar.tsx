'use client'
import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-48 min-h-screen p-4">
      <div className="mb-4">
        <Link to="feed" smooth={true} duration={500} className="block py-2 cursor-pointer">
          Feed By
        </Link>
      </div>
      <div className="mb-4">
        <Link to="reports" smooth={true} duration={500} className="block py-2 cursor-pointer">
          Reports
        </Link>
      </div>
      <div className="mb-4">
        <Link to="competitors" smooth={true} duration={500} className="block py-2 cursor-pointer">
          Competitors
        </Link>
      </div>
      <div className="mb-4">
        <Link to="insights" smooth={true} duration={500} className="block py-2 cursor-pointer">
          Insights
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
