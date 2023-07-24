import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Quem eu sou</h2>
          <p className='py-2 text-gray-600'>
            Eu estou me especializando na criação de aplicativos de interface do usuário de front-end responsivos para dispositivos móveis que se conectam com APIs e outras tecnologias de back-end. Sou apaixonado por aprender novas tecnologias e entendo que há mais de uma maneira de realizar uma tarefa.Como desenvolvedor júnior focado no backend, tenho me dedicado principalmente à criação de APIs utilizando tecnologias como Node.js, Adonis.js,  e Prisma.js. Meu conhecimento é mais proficiente nesse âmbito, e estou sempre buscando aprimorar minhas habilidades nessa área.

            Além disso, tenho uma habilidade essencial: a capacidade de aprender rapidamente. Isso me permite adquirir novas pilhas de tecnologia conforme necessário para enfrentar desafios futuros.

          </p>
          <p className='py-2 text-gray-600'>
            Acredito firmemente que ser um grande desenvolvedor não se resume a dominar apenas uma linguagem específica, mas sim em saber escolher a melhor ferramenta para cada trabalho. Minha mentalidade é sempre estar aberto a aprender e aplicar soluções adequadas para entregar produtos de alta qualidade

            Tenho experiência em trabalhar diretamente com clientes e levar wireframes simulados até os aplicativos implantados. No meu tempo livre coloco em pratica o hobi em motion design.job.

          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Confira alguns dos meus últimos projetos.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          {/* <Image src={AboutImg} className='rounded-xl' alt='/' /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
