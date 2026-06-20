import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Menu from './Menu'
const I18N_STORAGE_KEY = 'i18nextLng';

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ECF0F3');
  const [linkColor, setLinkColor] = useState('#fafffe');
  // Inicia como `undefined` para evitar erro de hidratação.
  const [language, setLanguage] = useState(undefined);

  useEffect(() => {
    // Rastreia o visitante uma vez por sessão para evitar múltiplas contagens.
    // Este código chama a API que salva os dados no Firebase.
    if (!sessionStorage.getItem('visitorTracked')) {
      fetch('/api/track', { method: 'POST' })
        .then(() => {
          sessionStorage.setItem('visitorTracked', 'true');
        })
        .catch(err => console.error("Falha ao rastrear visitante:", err));
    }
  }, []);

  useEffect(() => {
    // Este efeito só roda no cliente, após a montagem inicial.
    // Isso garante que a leitura do localStorage não cause erro de hidratação.
    const storedLanguage = getStoredLanguage();
    // Define o idioma do localStorage ou um padrão ('pt-BR') se nada for encontrado.
    setLanguage(storedLanguage || 'pt-BR');
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

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={shadow ? 'fixed w-full h-20  shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}
    >
      <div className='flex justify-between  items-center w-full h-full px-10 2xl:px-16 relative'> {/* Adicionado "relative" aqui */}
        <Link href='/'>
          <p className="text-4xl font-black text-gray-900 dark:text-white cursor-pointer">Anderson</p>
        </Link>
        <div className="flex justify-center items-center w-full">
          {/* Renderiza o select apenas no cliente para evitar o mismatch */}
          {language !== undefined && (
            <select
              onChange={handleSelectChange} value={language}
              className="neumorphic-select md:w-32 w-24 text-xs md:text-sm h-10 mx-auto"
            >
              <option className='h-10 text-center' value="pt-BR">Português</option>
              <option className='h-10 text-center' value="en-US">Inglês</option>
            </select>
          )}
        </div>

          <Menu linkColor="#ffffff" />
        <div
            className='md:hidden'
        >
        </div>
      </div>

    </div>
  );
};

export default Navbar;
