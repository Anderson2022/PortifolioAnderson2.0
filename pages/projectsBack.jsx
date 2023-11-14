import Image from 'next/image';
import React from 'react';
import Arte from '../public/assets/projects/industria.png'
import rpg from '../public/assets/projects/jogo-rpg.png'
import graduado from '../public/assets/projects/graduado.png'
import sql from '../public/assets/projects/analise-de-consulta.png'
import carro from '../public/assets/projects/carro-suv.png'
import java from '../public/assets/projects/icons8-java-50.png'
import Types from '../public/assets/projects/icons8-javascript-50.png'
import Script from '../public/assets/projects/icons8-typescript-50.png'
import pdf from '../public/assets/projects/pdf.png'
import financeiro from '../public/assets/projects/fluxo-de-caixa.png'



const Projects = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-8 shadow-lg ">
      </div>
      <div className=' w-screen pt-8'>
        <div className="flex flex-wrap mt-16 w-screen  relative">
          <div className="w-1/2 flex justify-center items-center">
            <div className='w-60 flex justify-center items-center'>
              <Image className="w-50 rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
            </div>
          </div>
          <div className='w-1/2 h-60  p-8 relative'>
            <h1>Back-end</h1>
            <div className='grid grid-cols-3 gap-3 inset-x-0 bottom-0 absolute mb-8 px-8  flex justify-center items-center'>
              <div className='flex flex-col items-center'>
                <Image className="w-50 rounded-lg mx-auto drop-shadow-xl" src={Script} alt="" />
                <h3 className="mt-2">JavaScript</h3>
              </div>
              <div className='flex flex-col items-center'>
                <Image className="w-50 rounded-lg mx-auto drop-shadow-xl" src={java} alt="" />
                <h3 className="mt-2">Java</h3>
              </div>
              <div className='flex flex-col items-center'>
                <Image className="w-50 rounded-lg mx-auto drop-shadow-xl" src={Types} alt="" />
                <h3 className="mt-2">TypeScript</h3>
              </div>
            </div>

          </div>

        </div>

        <div className='w-screen flex justify-center items-center  '>
          <div className='grid grid-cols-4 gap-4'>
            <div className='shadow-lg h-56 w-72 border-8 border-opacity-25 transform transition-transform duration-300 hover:scale-105'>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <div className='w-20 rounded-full flex items-center justify-center'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={rpg} alt="" />
                  </div>
                </div>
                <div className='w-1/2'>
                  Roleplay-api
                </div>
              </div>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <a href="https://github.com/Anderson2022/roleplay-api">Verificar</a>
                </div>
                <div className='w-1/2'>
                  <div className=' flex'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <h5>Jogo de rpg</h5>
                <p className='text-xs'>Implementando uma API para gerenciar mesas de RPG.</p>
              </div>
            </div>

            <div className='shadow-lg h-56 w-72 border-8 border-opacity-25 transform transition-transform duration-300 hover:scale-105'>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <div className='w-20 rounded-full flex items-center justify-center'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={graduado} alt="" />
                  </div>
                </div>
                <div className='w-1/2'>
                  Universidade
                </div>
              </div>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <a href="https://github.com/Anderson2022/Univercidade">Verificar</a>
                </div>
                <div className='w-1/2'>
                  <div className=' flex'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <h5>Sistema de cadastro</h5>
                <p className='text-xs'>Implementando uma API para gerenciar cadastros de novos alunos </p>
              </div>
            </div>

            <div className='shadow-lg h-56 w-72 border-8 border-opacity-25 transform transition-transform duration-300 hover:scale-105'>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <div className='w-20 rounded-full flex items-center justify-center'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={carro} alt="" />
                  </div>
                </div>
                <div className='w-1/2'>
                  Aluguel
                </div>
              </div>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <a href="https://github.com/Anderson2022/Alugueldecarros2.0">Verificar</a>
                </div>
                <div className='w-1/2'>
                  <div className=' flex'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <h5>Sistema de aluguel de carros</h5>
                <p className='text-xs'>Implementando uma API para registro de carros alugueis </p>
              </div>
            </div>

            <div className='shadow-lg h-56 w-72 border-8 border-opacity-25 transform transition-transform duration-300 hover:scale-105'>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <div className='w-20 rounded-full flex items-center justify-center'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={sql} alt="" />
                  </div>
                </div>
                <div className='w-1/2'>
                 Script
                </div>
              </div>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <a href="https://github.com/Anderson2022/bat.sqlsever">Verificar</a>
                </div>
                <div className='w-1/2'>
                  <div className=' flex'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <h5>Atualização</h5>
                <p className='text-xs'>Script de atualização de banco de dados</p>
              </div>
            </div>

            <div className='shadow-lg h-56 w-72 border-8 border-opacity-25 transform transition-transform duration-300 hover:scale-105'>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <div className='w-20 rounded-full flex items-center justify-center'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={pdf} alt="" />
                  </div>
                </div>
                <div className='w-1/2'>
                  Pdf
                </div>
              </div>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <a href="https://github.com/Anderson2022/Pdf">Verificar</a>
                </div>
                <div className='w-1/2'>
                  <div className=' flex'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <h5>Código de implementação de pdf</h5>
                <p className='text-xs'>Implementando uma API para gerenciar mesas de RPG.</p>
              </div>
            </div>

            <div className='shadow-lg h-56 w-72 border-8 border-opacity-25 transform transition-transform duration-300 hover:scale-105'>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <div className='w-20 rounded-full flex items-center justify-center'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={financeiro} alt="" />
                  </div>
                </div>
                <div className='w-1/2'>
                  Financeiro-api
                </div>
              </div>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <a href="https://github.com/Anderson2022/ProjetoTypesript">Verificar</a>
                </div>
                <div className='w-1/2'>
                  <div className=' flex'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <h5>Estudo</h5>
                <p className='text-xs'>Sistema financeiro de estudo em Next.js</p>
              </div>
            </div>

            <div className='shadow-lg h-56 w-72 border-8 border-opacity-25 transform transition-transform duration-300 hover:scale-105'>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <div className='w-20 rounded-full flex items-center justify-center'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                  </div>
                </div>
                <div className='w-1/2'>
                  Roleplay-api
                </div>
              </div>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <a href="http://">Verificar</a>
                </div>
                <div className='w-1/2'>
                  <div className=' flex'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <h5>Jogo de rpg</h5>
                <p className='text-xs'>Implementando uma API para gerenciar mesas de RPG.</p>
              </div>
            </div>

            <div className='shadow-lg h-56 w-72 border-8 border-opacity-25 transform transition-transform duration-300 hover:scale-105'>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <div className='w-20 rounded-full flex items-center justify-center'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                  </div>
                </div>
                <div className='w-1/2'>
                  Roleplay-api
                </div>
              </div>
              <div className='flex flex-wrap p-2'>
                <div className='w-1/2'>
                  <a href="http://">Verificar</a> 
                </div>
                <div className='w-1/2'>
                  <div className=' flex'>
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                    <Image className="rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
                  </div>
                </div>
              </div>
              <div className='p-2'>
                <h5>Jogo de rpg</h5>
                <p className='text-xs'>Implementando uma API para gerenciar mesas de RPG.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </>




  );
};

export default Projects;
