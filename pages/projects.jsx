import Image from 'next/image';
import React from 'react';
import Loteria from '../public/assets/loetria.png'

const Projects = () => {
  return (
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 "> 
    
      <div className="grid gap-4 mt-16">
        <div className="relative group">
          <Image className="h-auto max-w-full rounded-lg" src="../public/assets/Arte.png" alt="" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex flex-col items-center m-8">{/* Use a classe 'text-center' para centralizar o conteúdo */}
              <h3>Arte decoração</h3>
              <div className='flex items-center m-8'>
                <Image src="/assets/vue.png" alt="" className="w-6 h-6 " />
                <h6>Vue.js</h6>
              </div>
              <a
                href='https://arte-decor-tapecaria-vue.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Visitar
                </button> 
                </a>
            </div>

           
          </div>
        </div>

        <div className="relative group">
          {/* <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" /> */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
        </div>

        <div className="relative group">
          {/* <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" /> */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
        </div>
      </div>
      <div className="grid gap-4 mt-16">
        
        <div className="relative group ">
          <Image className="h-auto  rounded-lg h-full" src="../public/assets/fix.png" alt="" />
          <div className="absolute inset-0  h-auto bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center">
              <h3>DevFlix</h3>
              <div className="flex flex-col items-center m-8">
                <p>Em Desenvolvimento</p>
                <Image src="/assets/vue.png" alt="" className="w-6 h-6" />
                <h6>Vue.js</h6>
              </div>
              <a
                href='https://developer-flix.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Visitar
                </button>
                </a>
            </div>
          </div>
        </div>

        

        
        <div className="relative group">
          {/* <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" /> */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
        </div>
        
        <div className="relative group">
          {/* <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" /> */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
        </div>
      </div>
      <div className="grid gap-4 mt-16">
        
        <div className="relative group ">
          <Image className="h-auto  rounded-lg h-full" src="../public/assets/porti.png" alt="" />
          <div className="absolute inset-0  h-auto bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center">
              <h3>Loteria</h3>
              <div className="flex flex-col items-center m-8">
                <p>Em Desenvolvimento</p>
                <Image src="/assets/vue.png" alt="" className="w-6 h-6" />
                <h6>Vue.js</h6>
              </div>
              <a
                href='https://andersonportifolio.netlify.app'
                target='_blank'
                rel='noreferrer'
              >
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Visitar
                </button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          {/* <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" /> */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
        </div>
        
        <div className="relative group">
          {/* <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" /> */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
        </div>
      </div>
      <div className="grid gap-4 mt-16">
        
        <div className="relative group ">
          <div className="h-auto  rounded-lg h-full" src="" alt="">{netflixImg}</div>
          <div className="absolute inset-0  h-auto bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-center">
              <h3>Loteria</h3>
              <div className="flex flex-col items-center m-8">
                <p>Em Desenvolvimento</p>
                <Image src="/assets/vue.png" alt="" className="w-6 h-6" />
                <h6>Vue.js</h6>
              </div>
              <a
                href='https://jade-pithivier-081acd.netlify.app'
                target='_blank'
                rel='noreferrer'
              >
              <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Visitar
                </button>
                </a>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          {/* <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" /> */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
        </div>
        
        <div className="relative group">
          {/* <Image className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" /> */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
