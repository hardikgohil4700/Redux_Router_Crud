import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-800 text-white p-4">
      <nav className="flex items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">
          <Link to="/">Employee Form</Link>
        </h1>
        <ul className="flex space-x-4 mx-auto">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>

          <li>
            <Link to="/view-data" className="hover:underline">View Data</Link>
          </li>

          <li>
            <Link to="/employeeView/:id" className="hover:underline">EmployeeView</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
