import Image from 'next/image';
import React from 'react';
import Arte from '../public/assets/projects/industria.png'
import japa from '../public/assets/projects/japa.png'
import Types2 from '../public/assets/projects/typescript_5968381.png'
import adonis from '../public/assets/projects/adonisjs.svg'
import redis from '../public/assets/projects/redis.svg'
import rpg from '../public/assets/projects/jogo-rpg.png'
import graduado from '../public/assets/projects/graduado.png'
import sql from '../public/assets/projects/analise-de-consulta.png'
import carro from '../public/assets/projects/carro-suv.png'
import java from '../public/assets/projects/icons8-java-50.png'
import Script from '../public/assets/projects/icons8-javascript-50.png'
import Types from '../public/assets/projects/icons8-typescript-50.png'
import pdf from '../public/assets/projects/pdf.png'
import financeiro from '../public/assets/projects/fluxo-de-caixa.png'
import script from '../public/assets/projects/script.svg'
import sqldata from '../public/assets/projects/database-sql.svg'
import cache from '../public/assets/projects/cache.png'
import trader from '../public/assets/projects/trader.png'
import next from '../public/assets/projects/nextjs.svg'
import nest from '../public/assets/projects/nestjs.svg'
import docker from '../public/assets/projects/docker.svg'
import kafka from '../public/assets/projects/kafka.svg'

const projetos = [
  {
    id: 1,
    nome: 'Roleplay-api',
    url: ['https://www.typescriptlang.org/','https://adonisjs.com/', 'https://japa.dev/docs/introduction'],
    imagem: rpg,
    githubLink: 'https://github.com/Anderson2022/roleplay-api',
    imagensArte: [Types2, adonis, japa],
    descricao: 'Jogo de RPG. Implementando uma API para gerenciar mesas de RPG.',
  },
  {
    id: 2,
    nome: 'Universidade',
    imagem: graduado,
    url: ['https://www.typescriptlang.org/', 'https://adonisjs.com/', 'https://japa.dev/docs/introduction', 'https://redis.com/pt/solucoes/casos-de-uso/servico-de-mensagens/'],
    githubLink: 'https://github.com/Anderson2022/Univercidade',
    imagensArte: [Types2, adonis, japa, redis],
    descricao: 'Implementando uma API para gerenciar cadastros de novos alunos ',
  },
  {
    id: 3,
    nome: 'Aluguel',
    imagem: carro,
    url: ['https://www.typescriptlang.org/',],
    githubLink: 'https://github.com/Anderson2022/Alugueldecarros2.0',
    imagensArte: [Types2],
    descricao: 'Implementando uma API para registro de carros alugueis',
  },
  {
    id: 4,
    nome: 'Script',
    url: 'https://github.com/Anderson2022/bat.sqlsever',
    imagem: sql,
    githubLink: 'https://github.com/Anderson2022/bat.sqlsever',
    imagensArte: [script, sqldata,],
    descricao: 'Script de atualização de banco de dados',
  },
  {
    id: 5,
    nome: 'Pdf',
    imagem: pdf,
    githubLink: 'https://github.com/Anderson2022/Pdf',
    imagensArte: [pdf, Types2,],
    descricao: 'Código de implementação de pdf',
  },
  {
    id: 6,
    nome: 'Financeiro-api',
    imagem: financeiro,
    githubLink: 'https://github.com/Anderson2022/ProjetoTypesript',
    imagensArte: [Types2],
    descricao: 'Sistema financeiro de estudo em Next.js',
  },
  {
    id: 7,
    nome: 'Estudos de Cache Backend',
    imagem: cache,
    githubLink: 'https://github.com/Anderson2022/cache_studies',
    imagensArte: [Script],
    descricao: 'Api de estudos de cache no backend',
  },

  {
    id: 8,
    nome: 'Home Broker',
    imagem: trader,
    githubLink: 'https://github.com/Anderson2022/Homebroker',
    imagensArte: [next, nest, docker, kafka],
    descricao: 'Estudos de mensageria com Go, Nest, Next, Kafka, Docker ',
  },
  // Adicione mais projetos conforme necessário
];


const Projects = () => {
  return (
    <>
   
      <div className=' w-screen pt-8'>
        <div className="flex flex-wrap mt-16 md:w-screen relative">
          <div className="md:w-1/2 w-36 flex justify-center items-center">
            <div className='w-60 flex justify-center items-center'>
              <Image className="w-50 rounded-lg mx-auto drop-shadow-xl" src={Arte} alt="" />
            </div>
          </div>
          <div className='md:w-1/2 h-60  p-8 relative '>
            <h1 className=''>Back-end</h1>
            <div className='grid grid-cols-3 gap-3 inset-x-0 bottom-0 absolute mb-8 px-8 w-64 md:w-96 justify-center items-center'>
              <div className='flex flex-col items-center'>
                <Image className="w-50 rounded-lg mx-auto drop-shadow-xl" src={Script} alt="" />
                <h3 className="mt-2 text-sm">JavaScript</h3>
              </div>
              <div className='flex flex-col items-center'>
                <Image className="w-50 rounded-lg mx-auto drop-shadow-xl" src={java} alt="" />
                <h3 className="mt-2 text-sm">Java</h3>
              </div>
              <div className='flex flex-col items-center'>
                <Image className="w-50 rounded-lg mx-auto drop-shadow-xl" src={Types} alt="" />
                <h3 className="mt-2 text-sm">TypeScript</h3>
              </div>
            </div>

          </div>

        </div>

        <div className='w-screen flex justify-center items-center  '>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
            {projetos.map((projeto) => (
              <div key={projeto.id} className='shadow-lg h-56 w-72 border-8 border-opacity-25 transform transition-transform duration-300 hover:scale-105'>
                <div className='flex flex-wrap p-2'>
                  <div className='w-1/2'>
                    <div className='w-20 rounded-full flex items-center justify-center'>
                      <Image className="rounded-lg mx-auto drop-shadow-xl" src={projeto.imagem} alt="" />
                    </div>
                  </div>
                  <div className='w-1/2'>
                    {projeto.nome}
                  </div>
                </div>
                <div className='flex flex-wrap p-2'>
                  <div className='w-1/2'>
                    <a href={projeto.githubLink}>Verificar</a>
                  </div>
                  <div className='w-1/2'>
                    <div className='flex'>
                      {projeto.imagensArte.map((arte, index) => (
                        <a key={index} href={projeto.url && projeto.url[index]} target="_blank" rel="noopener noreferrer">
                          <div className='w-8 px-1 relative'>
                            <Image className="mx-auto drop-shadow-xl w-full h-full object-cover" src={arte} alt="" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='p-2'>
                  <h5>{projeto.nome}</h5>
                  <p className='text-xs'>{projeto.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
