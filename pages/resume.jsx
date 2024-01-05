import React from 'react';
import Head from 'next/head';
import Ddd from '../components/PathSymbols'; // Adjust the relative path based on your project structure
import Agion from '../public/assets/projects/agion.jpg'
import Tacto from '../public/assets/projects/logo-tacto.png'
import Tra from '../public/assets/projects/transamerica.jpg'
import Dom from '../public/assets/projects/dompixel_logo.jpg'
import Modal from '../components/Modal'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';



const resume = () => {
  return (
    <>
      <div className="pt-20 ">
        <Head>
          <title>Anderson | Resume</title>
          <meta
            name='description'
            content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
          />
          <link rel='icon' href='/fav.png' />
        </Head>

        <div className='max-w-[940px] mx-auto bg-neutral-800	shadow-lg shadow-black rounded-t-lg '>
          <div className='flex flex-col'>
            <div className='h-9 rounded-t-lg bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 flex items-center justify-center'>
              <h2>Anderson da Silva Fernandes</h2>
            </div>


            <div className='flex w-full  p-4  justify-between items-center'>
              <div className='flex-none w-2/4 h-14'>
                <Ddd />
              </div>
              <div className='w-56 items-center text-white'>
                <h1 className='text-lg justify-items-center'>Experiência Profissional</h1>
                <p className='text-xs p-2 text-justify'>Atuo com o desenvolvimento de software de ponta a ponta, desde
                  o levantamento de requisitos com as partes envolvidas no projeto, prototipação,
                  codificação no lado do cliente e servidor, testes, documentação,
                  implementação, até a apresentação para o cliente final.</p>
              </div>
              <div className='flex-none w-56 justify-center items-center text-center text-white'>
                <h1 className='text-lg'>Educação</h1>
                <h5>Cursando:</h5>
                <p className='text-xs p-2 text-justify'>Engenharia de computação 10º semestre noturno</p>
                <h4>Inglês:</h4>
                <p className='text-xs p-2 text-justify'>Intermediário</p>
              </div>

            </div>
            <div className=' h-96 flex flex-row text-white p-4'>
              <div className='flex-1 '>
                <div className='flex flex-col p-4 border rounded-lg border-red-600 m-2 shadow-xl shadow-red-800'>
                  <div className='flex flex-row  justify-center items-center text-center '>
                    <div className=' w-14'>
                      <Image className=' group-hover:opacity-10 rounded-full shadow-2xl' src={Agion} alt='/' />
                    </div>
                    <div className='justify-center items-center text-center '>
                      <h1 className='text-lg'>Agion</h1>
                      <h3 className='text-xs'>Estagiário</h3>
                    </div>

                  </div>
                  <div> <p className='text-xs text-justify '>Analisa de suporte help desk
                    Reformas de equipamentos </p></div>

                </div>
              </div>
              <div className='flex-1'>
                <div className='flex flex-col p-4 border rounded-lg border-red-600 m-2 shadow-xl shadow-red-800'>
                  <div className='flex flex-row justify-center items-center text-center '>
                    <div className='w-14'>
                      <Image className=' group-hover:opacity-10 rounded-full shadow-2xl' src={Tacto} alt='/' />
                    </div>
                    <div className='justify-center items-center text-center '>
                      <h1 className='text-lg'>Tacto Sistemas</h1>
                      <h3 className='text-xs'>Analista de Sistemas</h3>
                    </div>
                  </div>
                  <div>
                    <p className='text-xs text-justify '>
                      Suporte técnico em Sistema ERP,
                      Treinar e capacitar os usuários;
                      Implantação do sistema através do SQL Server;
                      Configuração de impressoras;
                      Conceitos básicos de rede TCP/IP, DNS, Proxy;
                      Instalação, Configuração, Manutenção de softwares, sistemas operacionais e hardwares;
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex-1'>
                <div className='flex flex-col p-4 border rounded-lg border-red-600 m-2 shadow-xl shadow-red-800'>
                  <div className='flex flex-row justify-center items-center text-center '>
                    <div className='w-14'>
                      <Image className=' group-hover:opacity-10 rounded-full shadow-2xl' src={Tra} alt='/' />
                    </div>
                    <div className='justify-center items-center text-center '>
                      <h1 className='text-lg'>Transamerica Serviços</h1>
                      <h3 className='text-xs'>Office Boy</h3>
                    </div>

                  </div >
                  <div className='text-xs text-justify '>
                    <p className='text-xs'>Analisa de suporte help desk
                      Reformas de equipamentos </p></div>

                </div>
              </div>
              <div className='flex-1'>
                <div className='flex flex-col p-4 border rounded-lg border-red-600 m-2 shadow-xl shadow-red-800'>
                  <div className='flex flex-row justify-center items-center text-center '>
                    <div className='w-14'>
                      <Image className=' group-hover:opacity-10 rounded-full shadow-2xl' src={Dom} alt='/' />
                    </div>
                    <div className='justify-center items-center text-center '>
                      <h1 className='text-lg'>Dom Pixel</h1>
                      <h3 className='text-xs'>Desenvolvedor Back-end</h3>
                    </div>
                  </div>
                  <div className='text-xs text-justify '>
                    <p className='text-xs'>Trabalhei com Apis para projetos de clientes, como sistemas
                      de pesquisas de personalidade, e sistemas de matrículas de
                      cursos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='h-50 border p-4  relative text-cyan-50 bg-neutral-800 border-neutral-800 '>
            <div className='hidden sm:block  rounded-lg border border-red-600 shadow-xl shadow-red-800 h-40'>
              <p className='p-8'>
                Estou à procura de novos
                desafios profissionais buscando
                uma efetivação no mercado,
                visando o desenvolvimento de
                um todo o trabalho e claro
                gerando resultados. Conseguir
                concretizar a forma de
                possibilitar este crescimento
                qualitativo e quantitativo para a
                empresa.

              </p>
            </div>
            <p className='absolute top-0 left-7 text-red-800 italic  font-mono text-2xl bg-neutral-800 '>OBJETIVOS</p>
          </div>



          <div className='text-center py-4 text-cyan-50 shadow-lg shadow-black bg-neutral-800'>
            <div className='border-b-4 border-red-700 shadow-red-800 '>
              <h5 className='text-center underline text-[18px] py-2 my-8'>Habilidades</h5>
              <div className='flex flex-wrap '>
                <div className='w-1/2 border-r-4 border-double border-red-700 flex items-center justify-center'>
                  <span className='font-bold'>Habilidades técnicas</span>
                </div>
                <div className='w-1/2'>
                  <p className='py-2 text-left'>
                    <span className='px-2'>|</span>Full-Stack Web Developer<br />
                    <span className='px-2'>|</span> HTML, CSS <br />
                    <span className='px-2'>|</span>Javascript, Typescript <br />
                    <span className='px-2'>|</span>React.js, Vue.js  <br />
                    <span className='px-2'>|</span>Firebase, SQL, NoSQL, MySql, Redis<br />
                    <span className='px-2'>|</span>Node.js, RESTAPI <br />
                    <span className='px-2'>|</span>Tailwind <br />
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap h-80 '>
                <div className='w-1/2 border-r-4 border-double border-red-700 flex items-center justify-center'>
                  <h5 className='text-center underline text-[18px] py-2 mt-6'>Habilidades em Andamento</h5>
                </div>
                <div className='w-1/2 mt-6 text-left flex items-center'>
                  <p className=''>
                    <span className='px-2'>|</span>Java e Spring Boot Rest
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap '>
                <div className='w-1/2 border-r-4  border-double border-red-700 flex items-center justify-center'>
                  <h5 className='text-center underline text-[18px] py-2 mt-6'>Habilidades Técnicas</h5><br />
                </div>
                <div className='w-1/2 mt-6 text-left'>
                  <p className=''>
                    <span className='font-bold px-52 my-8'>Informática:</span><br />
                    <span className='px-2 '>|</span>Proficiência em
                    informática avançada <br />
                    <span className='font-bold px-52 my-8'>Hardware:</span><br />
                    <span className='px-2 '>|</span>Experiência em
                    montagem e manutenção de
                    hardware

                  </p>
                </div>
              </div>
              <div className='flex flex-wrap h-80'>
                <div className='w-1/2 border-r-4 border-double border-red-700 flex items-center justify-center'>
                  <h5 className='text-center underline text-[18px] py-2'>Escolaridade</h5>
                </div>
                <div className='w-1/2 text-left flex items-center '>
                  <p className='py-2'>
                    <span className='font-bold px-52 my-8'>Cursando:</span><br />
                    <span className='px-2'>|</span>Engenharia de computação 10º semestre noturno <br/>
                    <span className='px-2'>|</span> Unic Universidade de Cuiabá <br />
                    <span className='font-bold px-52 my-8'>Cursos:</span><br />
                    <span className='px-2'>|</span>Ingles
                    <span className='px-2'>|</span> Intermediário <br />
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap h-80'>
                <div className='w-1/2 border-r-4 border-double border-red-700 flex items-center justify-center'>
                  <h5 className='text-center underline text-[18px] py-2'>Certificações</h5>
                </div>
                <div className='w-1/2 mx-auto text-left flex items-center'>
                  <Modal />
                </div>

              </div>

              <div className='flex flex-wrap h-80'>
                <div className='w-1/2 border-r-4 border-double border-red-700 flex items-center justify-center'>
                  <h5 className='text-center underline text-[18px] py-2'>Experiencia Voluntaria</h5>
                </div>
                <div className='w-1/2 text-left flex items-center '>
                  <p className='py-2'>                 
                    <span className='px-2'>|</span>Professor de informática no projeto Siminina Digital 120horas
                   </p>
                </div>
              </div>

              <div className='flex flex-wrap h-80'>
                <div className='w-1/2 border-r-4 border-double border-red-700 flex items-center justify-center'>
                  <h5 className='text-center underline text-[18px] py-2'>Currículo</h5>
                </div>
                <div className='w-1/2 text-left flex items-center justify-center'>
                  <Link href="/Anderson.pdf" passHref>
                    <a download="Anderson_CV.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white border border-gray-500 py-2 px-4 rounded transition hover:bg-orange-500">
                      Download CV
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
