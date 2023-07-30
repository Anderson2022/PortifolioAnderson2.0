import Image from 'next/image';
import React from 'react';
import Adobe from '../public/assets/skills/effects.png';
import Css from '../public/assets/skills/premiere.png';
import Javascript from '../public/assets/skills/lightroom.png';
import ReactImg from '../public/assets/skills/photos.png';
import i18next from 'i18next';


const Hobby = () => {
  return (
    <div id='hobby' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Hobby
          {i18next.t('Hobby')}
        </p>
        <h2 className='py-4'> {i18next.t('HobbyTitle')}</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Adobe} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3> {i18next.t('HobbyText1')}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='84px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3> {i18next.t('HobbyText2')}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3> {i18next.t('HobbyText3')}</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3> {i18next.t('HobbyText4')}</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hobby;
