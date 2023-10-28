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
  const [navBg, setNavBg] = useState('#414242');
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
      // style={{ backgroundColor: `${navBg}` }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 relative'> {/* Adicionado "relative" aqui */}
        <Link href='/'>
          <a>
            <p className="text-4xl font-black text-gray-900 dark:text-white">Anderson</p>
          </a>

        </Link>
        <select
          onChange={handleSelectChange} value={language}
          className="dark:text-white hover:text-black border border-gray-800 hover:bg-gray-900 focus:ring-4 dark:text-white dark:text-white font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black-400 hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          style={{
            fontSize: '12px',
            padding: '4px',
            width: '7.8rem',
            height: '2.0rem',
            backgroundColor: '#414242',
            color: 'white',
            textAlignLast: 'center', // Alinha o texto horizontalmente no centro
            appearance: 'none', // Remove a aparência padrão do seletor
          }}
        >
          <option style={{ textAlign: 'center' }} value="pt-BR">Português</option>
          <option style={{ textAlign: 'center' }} value="en-US">Inglês</option>
        </select>
        <div>
          <Menu linkColor="#ffffff" />
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >

        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  Andeson
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#hobby'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Hobby
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/404'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/front/projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Front-end
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/anderson-silva-346255160/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
                <Link href='/Front/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
