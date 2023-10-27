import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
import Link from 'next/link';

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
    <div ref={dropdownRef} className="dropdown ">
      <label onClick={handleToggle} tabIndex={0} className="text-4xl font-black text-gray-900 dark:text-white">
        Menu
      </label>
      {isOpen && (
        <div className="dropdown-content  rounded-lg absolute mt-5  right-0 z-[2] card card-compact w-57 p-4 shadow bg-stone-700 text-primary-content flex-col-reverse">
          <ul style={{ color: `${linkColor}` }} className="md:grid md:grid-cols-3 md:flex-col-reverse ml-4">
            <li className='button-89 hover:border-b text-sm'>
              <Link href='/'>Home</Link>
              
            </li>
            <li className='button-89 text-sm'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='button-89 button-89 text-sm' >
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='button-89 hover:border-b text-sm'>
              <Link href='/#hobby'>Hobby</Link>
            </li>
            <li className='button-89 hover:border-b text-sm'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='button-89 hover:border-b text-sm'>
              <Link href='/404'>Resume</Link>
            </li>
            <li className='button-89 hover:border-b text-sm'>
              <Link href='/projects'>Front-end</Link>
            </li>
            <li className='button-89 hover:border-b text-sm'>
              <Link href='/404'>Motion</Link>
            </li>
            <li className='button-89 hover:border-b text-sm'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
