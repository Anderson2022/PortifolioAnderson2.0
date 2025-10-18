import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaFacebook, FaBlenderPhone } from 'react-icons/fa';
import { i18n } from '../translate/i18n'
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto px-10 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            {i18n.t('titles')}
           <span className='text-[#5651e5]'> Anderson</span>
          </h1>
          <h1 className='py-2 text-gray-700'> {i18n.t('description')}</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            {i18n.t('text')}
          </p>
          <div className='flex flex-wrap items-center justify-center gap-4 w-full max-w-lg m-auto p-4 sm:p-0'>
            <a
              href='https://www.linkedin.com/in/anderson-silva-346255160/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-orange-500 hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>

            </a>
            <a
              href='https://www.facebook.com/Salgadoed'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-orange-500 hover:scale-110 ease-in duration-300'>
                <FaFacebook />
              </div>
            </a>
            
            <a
              href='https://github.com/Anderson2022'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-orange-500 hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-orange-500 hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-orange-500 hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
            <Link href='/test'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-orange-500 hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
            <a
          href='https://api.whatsapp.com/send?phone=+55+5565996321128&text=Ol%C3%A1%2C+Anderson+Silva'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-orange-500 hover:scale-110 ease-in duration-300'>
                <FaBlenderPhone />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
