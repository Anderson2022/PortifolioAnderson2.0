import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Pngwing from '../public/assets/pngwing.com.png';

const Menu = ({ linkColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="dropdown w-14">
      <label tabIndex={0} className="cursor-pointer select-none">
        <button
          className={`menu${isOpen ? ' opened' : ''}`}
          aria-label="Main Menu"
          aria-expanded={isOpen}
          onClick={handleToggle}
          type="button"
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
      </label>
      {isOpen && (
        <div
          className={
            `dropdown-content rounded-lg absolute mt-5 right-0 z-[2] card card-compact w-57 p-4 shadow border-4 border-black bg-white text-black flex-col-reverse text-center 
            transition-all duration-300 ease-in-out transform 
            ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`
          }
        >
          <ul style={{ color: `#111` }} className="md:grid md:grid-cols-3 md:flex-col-reverse ml-4">
            <li className='button-89 hover:border-b text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/'>Home</Link>
            </li>
            <li className='button-89 text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/#about'>About</Link>
            </li>
            <li className='button-89 button-89 text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='button-89 hover:border-b text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/#hobby'>Hobby</Link>
            </li>
            <li className='button-89 hover:border-b text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='button-89 hover:border-b text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='button-89 hover:border-b text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/projects'>Front-end</Link>
            </li>
            <li className='button-89 hover:border-b text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/projectsBack'>Back-end</Link>
            </li>
            <li className='button-89 hover:border-b text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/movies'>Motion</Link>
            </li>
            <li className='button-89 hover:border-b text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/#contact'>Contact</Link>
            </li>
            <li className='button-89 hover:border-b text-sm font-bold tracking-wide uppercase font-mono transition-colors duration-200 hover:text-blue-600' onClick={() => setIsOpen(false)}>
              <Link href='/test'>Visitantes</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
