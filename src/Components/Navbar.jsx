import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiStockFill } from "react-icons/ri";

const ToggleSwitch = ({ isDarkTheme, toggleTheme }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox hidden"
        checked={isDarkTheme}
        onChange={toggleTheme}
      />
      <label
        htmlFor="toggle"
        className={`toggle-label relative inline-block h-6 w-12 rounded-full bg-gray-300 cursor-pointer ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-400'}`}
      >
        <span className="toggle-inner absolute left-0 w-full h-full rounded-full bg-white shadow-inner"></span>
        <span className={`toggle-switch absolute inset-y-0 left-0 w-6 h-6 rounded-full bg-indigo-600 shadow-md ${isDarkTheme ? 'transform translate-x-full bg-gray-800' : ''}`}></span>
      </label>
    </div>
  );
};

const Navbar = ({ isDarkTheme, toggleTheme }) => {
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkTheme]);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-indigo-700 text-white hover:bg-indigo-800 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-indigo-500 hover:text-white rounded-md px-3 py-2';

  const navbarClass = isDarkTheme ? 'bg-gray-900' : 'bg-blue-400';
  const textColorClass = isDarkTheme ? 'text-white' : 'text-gray-800';

  return (
    <nav className={`${navbarClass} m-0 p-0`}>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <RiStockFill  className={`h-12 w-auto pb-2 rounded-3xl ${textColorClass}`} />
              <span className={`hidden md:block ${textColorClass} text-2xl font-bold ml-2 p-5`}>
                Candlestick Chart
              </span>
            </NavLink>
            <div className='md:ml-auto flex items-center'>
              <div className='flex space-x-5 py-5 '>
                <NavLink to='/' className={linkClass}>
                  <div className='my-2 sm:my-auto'>Home</div>
                </NavLink>
                <NavLink to='/daychart' className={linkClass}>
                  Day Chart
                </NavLink>
                <NavLink to='/hourchart' className={linkClass}>
                  Hour Chart
                </NavLink>
                <NavLink to='/chart' className={linkClass}>
                  5 min Chart
                </NavLink>
                <div className="my-2">
                  <ToggleSwitch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
