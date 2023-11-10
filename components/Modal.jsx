import Image from 'next/image';
import { useState } from 'react';
import javaScript from '../public/assets/projects/javaScript.png'
import modelagem from '../public/assets/projects/modelagem.png'
import api from '../public/assets/projects/api.png'
import java from '../public/assets/projects/java.png'
import node from '../public/assets/projects/node.png'
import sockt from '../public/assets/projects/sockt.png'
import geral from '../public/assets/projects/geral.png'
import adonis from '../public/assets/projects/adonis.jpg'

const Modal = () => {
  const [modalOpen, setModalOpen] = useState({
    smallModal: false,
    mediumModal: false,
    largeModal: false,
    extraLargeModal: false,
    defaultModal: false,
  });
  const aluraCertificateUrl = 'https://cursos.alura.com.br/degree/certificate/01bfcaf9-0b4b-400c-9e98-1c3bc7aac2c2?lang=pt_BR';
  const aluraCertificateModelagen = 'https://cursos.alura.com.br/degree/certificate/84120564-1ce4-4e45-bcb6-85709f3ba913?lang=pt_BR';
  const aluraCertificateapi = 'https://cursos.alura.com.br/degree/certificate/5716d8e9-b820-4b70-bf85-810488d3c959?lang=pt_BR';
  const aluraCertificateJAva = 'https://cursos.alura.com.br/degree/certificate/a8a1794c-bd5d-495d-ad4f-c42521bd259b?lang=pt_BR';
  const aluraCertificateWeb = 'https://cursos.alura.com.br/certificate/4d158869-fc1b-488d-aa79-712ceae64e89?lang=pt_BR';
  const aluraCertificateNode = 'https://cursos.alura.com.br/certificate/40b8fef6-97f2-4715-b409-fbb8eb250d11?lang=pt_BR';
  const aluraCertificateGeral = 'https://cursos.alura.com.br/user/andersonsfernandes/fullCertificate/21b55d661079e6ca5382d605eb168143';
  const aluraCertificateAdonis = 'https://udemy-certificate.s3.amazonaws.com/image/UC-eed8dd0b-0f0f-4183-a660-4ceac8560979.jpg';




  const toggleModal = (modalName) => {
    setModalOpen((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  const closeModal = (modalName) => {
    setModalOpen((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  return (
    <>
      <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4 items-center justify-center w-full">
        <button
          className="m-3 h-12 w-32 rounded-lg  flex justify-center items-center shadow-md font-damion focus:outline-none text-gray-600 hover:shadow-xl hover:text-gray-200 transition duration-500"
          type="button"
          onClick={() => toggleModal('defaultModal')}
        >
          Ver
        </button>
      </div>


      <div
        id="default-modal"
        tabIndex="-1"
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ${modalOpen.defaultModal ? 'block' : 'hidden'
          } w-full max-w-2xl p-4 overflow-x-hidden overflow-y-auto h-[calc(90%-1rem)] max-h-full bg-white rounded-lg shadow dark:bg-gray-700`}
      >
        {/* Default Modal Content */}
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Certificados
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
            onClick={() => closeModal('defaultModal')}
          >
            {/* Default Modal Close Button */}
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

        </div>
        <div className='grid grid-cols-3 gap-3 text-black'>
          <div className="card">
            <div className="bg">
              <Image className='w-full' src={javaScript} alt='Sunset in the mountains' /> 

                <div className="px-6 py-4">
               
                <p class="text-gray-700 text-base">
                  
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-6 pt-4 pb-2">
                  <a href={aluraCertificateUrl} target="_blank" rel="noopener noreferrer">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#certificado</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="blob">dfgfds</div>
          </div>
          <div className="card">
            <div className="bg">
              <Image className='w-full' src={modelagem} alt='Sunset in the mountains' />

              <div className="px-6 py-4">

                <p class="text-gray-700 text-base">

                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-6 pt-4 pb-2">
                  <a href={aluraCertificateModelagen} target="_blank" rel="noopener noreferrer">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#certificado</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="blob">dfgfds</div>
          </div>
          <div className="card">
            <div className="bg">
              <Image className='w-full' src={api} alt='Sunset in the mountains' />

              <div className="px-6 py-4">

                <p class="text-gray-700 text-base">

                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-6 pt-4 pb-2">
                  <a href={aluraCertificateapi} target="_blank" rel="noopener noreferrer">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#certificado</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="blob">dfgfds</div>
          </div>   
          <div className="card">
            <div className="bg">
              <Image className='w-full' src={java} alt='Sunset in the mountains' />

              <div className="px-6 py-4">

                <p class="text-gray-700 text-base">

                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-6 pt-4 pb-2">
                  <a href={aluraCertificateJAva} target="_blank" rel="noopener noreferrer">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#certificado</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="blob">dfgfds</div>
          </div>
          <div className="card">
            <div className="bg">
              <Image className='w-full' src={node} alt='Sunset in the mountains' />

              <div className="px-6 py-4">

                <p class="text-gray-700 text-base">

                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-6 pt-4 pb-2">
                  <a href={aluraCertificateNode} target="_blank" rel="noopener noreferrer">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#certificado</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="blob">dfgfds</div>
          </div>
          <div className="card">
            <div className="bg">
              <Image className='w-full' src={sockt} alt='Sunset in the mountains' />

              <div className="px-6 py-4">

                <p class="text-gray-700 text-base">

                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-6 pt-4 pb-2">
                  <a href={aluraCertificateWeb} target="_blank" rel="noopener noreferrer">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#certificado</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="blob">dfgfds</div>
          </div>
          <div className="card">
            <div className="bg h-96">
              <Image className='w-full' src={geral} alt='Sunset in the mountains' />

              <div className="px-6 py-4 h-20">

                <p class="text-gray-700 text-base">

                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-6 pt-4 pb-2">
                  <a href={aluraCertificateGeral} target="_blank" rel="noopener noreferrer">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#certificado</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="blob">dfgfds</div>
          </div>

          <div className="card">
            <div className="bg">
              <Image className='w-full' src={adonis} alt='Sunset in the mountains' />

              <div className="px-6 py-4">

                <p class="text-gray-700 text-base">

                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-6 pt-4 pb-2">
                  <a href={aluraCertificateAdonis} target="_blank" rel="noopener noreferrer">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#certificado</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="blob">dfgfds</div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Modal;
