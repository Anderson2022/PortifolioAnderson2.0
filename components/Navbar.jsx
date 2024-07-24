import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Menu from './Menu'
const I18N_STORAGE_KEY = 'i18nextLng';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ECF0F3');
  const [linkColor, setLinkColor] = useState('#fafffe');
  const [language, setLanguage] = useState('');


  useEffect(() => {
    const storedLanguage = getStoredLanguage();
    setLanguage(storedLanguage || 'default_language_value');
  }, []);

  const getStoredLanguage = () => {
    // Check if localStorage is available (browser context)
    if (typeof window !== 'undefined') {
      return localStorage.getItem(I18N_STORAGE_KEY);
    }
    return null;
  };

  const handleSelectChange = event => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    // Check if localStorage is available (browser context)
    if (typeof window !== 'undefined') {
      localStorage.setItem(I18N_STORAGE_KEY, selectedLanguage);
      window.location = window.location;
    }
  }

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 relative'> {/* Adicionado "relative" aqui */}
        <Link href='/'>
          <a>
            <p className="text-4xl font-black text-gray-900 dark:text-white">Anderson</p>
          </a>

        </Link>
        <div className="flex justify-center items-center w-full">
          <select
            onChange={handleSelectChange} value={language}
            className="hover:text-white border border-gray-800
     hover:bg-gray-900 focus:ring-4 dark:text-white font-medium 
      rounded-lg text-center dark:border-gray-600
        dark:text-black-400
          dark:hover:bg-gray-600
           dark:focus:ring-gray-800
           md:w-32 w-20 text-xs
           md:text-sm bg-black text-white
           appearance-none justify-center
           justify-items-center
           h-10 mx-auto"
          >
            <option className='h-10 text-center' value="pt-BR">Português</option>
            <option className='h-10 text-center' value="en-US">Inglês</option>
          </select>
        </div>

        <div>
          <Menu linkColor="#ffffff" />
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >

          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
