import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="width-full bg-gradient-to-r from-indigo-900 to-blue-700">
      <ul className="flex justify-evenly p-5 font-bold text-lg">
        <li className="hover:border-b-2 border-gray-400">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-cyan-300' : 'text-pink-300'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-300 lg:p-0`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="hover:border-b-2 border-gray-400">
          <NavLink
            to={'./about'}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-cyan-300' : 'text-pink-300'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-300 lg:p-0`
            }
          >
            About
          </NavLink>
        </li>
        <li className="hover:border-b-2 border-gray-400">
          <NavLink
            to={'./contact'}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-cyan-300' : 'text-pink-300'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-300 lg:p-0`
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="hover:border-b-2 border-gray-400">
          <NavLink
            to={'./github'}
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-cyan-300' : 'text-pink-300'
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-300 lg:p-0`
            }
          >
            Github
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
