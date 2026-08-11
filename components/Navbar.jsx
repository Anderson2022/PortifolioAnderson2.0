import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { i18n } from '../translate/i18n';

const NAV_ITEMS = [
  { label: 'Home', href: '/#home', tag: 'START', step: '01' },
  { label: 'Sobre', href: '/#about', tag: 'PROFILE', step: '02' },
  { label: 'Skills', href: '/#skills', tag: 'STACK', step: '03' },
  { label: 'Hobby', href: '/#hobby', tag: 'CREATIVE', step: '04' },
  { label: 'Projetos', href: '/#projects', tag: 'WORK', step: '05' },
  { label: 'Currículo', href: '/resume', tag: 'RESUME', step: '06' },
  { label: 'Front-end', href: '/projects', tag: 'INTERFACES', step: '07' },
  { label: 'Back-end', href: '/projectsBack', tag: 'SERVICES', step: '08' },
  { label: 'Dados', href: '/data-engineering', tag: 'PIPELINE', step: '09' },
  { label: 'Contato', href: '/#contact', tag: 'CONNECT', step: '10' },
];

const I18N_STORAGE_KEY = 'i18nextLng';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState();

  useEffect(() => {
    const storedLanguage = localStorage.getItem(I18N_STORAGE_KEY) || 'pt-BR';
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);
    window.dispatchEvent(new Event('portfolio-language-change'));
    if (!sessionStorage.getItem('visitorTracked')) {
      fetch('/api/track', { method: 'POST' })
        .then(() => sessionStorage.setItem('visitorTracked', 'true'))
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const close = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [menuOpen]);

  const changeLanguage = (event) => {
    const nextLanguage = event.target.value;
    localStorage.setItem(I18N_STORAGE_KEY, nextLanguage);
    setLanguage(nextLanguage);
    i18n.changeLanguage(nextLanguage);
    window.dispatchEvent(new Event('portfolio-language-change'));
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto mt-3 max-w-[1300px] px-5 md:px-10">
          <div className="neu flex h-14 items-center justify-between px-5 md:px-8">
            <Link href="/">
              <a className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal to-tealdark text-xs font-bold text-white shadow-md">A</span>
                <span className="font-mono text-sm tracking-wider text-ink">anderson<span className="text-muted">.dev</span></span>
              </a>
            </Link>

            <nav className="hidden items-center gap-3 xl:flex">
              {NAV_ITEMS.map((item) => (
                <Link href={item.href} key={item.href}>
                  <a className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-teal">{item.label}</a>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {language && (
                <select value={language} onChange={changeLanguage} aria-label="Idioma" className="neu-inset-sm hidden h-8 border-0 px-2 font-mono text-[9px] text-ink outline-none sm:block">
                  <option value="pt-BR">PT</option>
                  <option value="en-US">EN</option>
                </select>
              )}
              <a href="https://github.com/Anderson2022" target="_blank" rel="noreferrer" aria-label="GitHub" className="neu-btn hidden h-8 w-8 items-center justify-center text-muted hover:text-teal sm:flex">
                <FaGithub size={15} />
              </a>
              <button onClick={() => setMenuOpen(true)} aria-label="Abrir menu" className="neu-btn flex h-9 w-9 items-center justify-center text-ink xl:hidden">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-1 max-w-[1300px] px-5 md:px-10">
          <div className="neu-progress-track h-1 overflow-hidden"><div className="neu-progress-bar h-full w-1/3" /></div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-base/80 p-4 backdrop-blur-md xl:hidden" onClick={() => setMenuOpen(false)}>
            <motion.div initial={{ scale: .92, opacity: 0, y: 12 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: .92, opacity: 0, y: 12 }} className="neu max-h-[85vh] w-full max-w-md overflow-y-auto p-6" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center justify-between border-b border-deepest pb-4">
                <div><span className="block font-mono text-xs text-ink">Navegação</span><span className="font-mono text-[9px] uppercase tracking-widest text-faint">Portfólio Anderson</span></div>
                <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu" className="neu-btn flex h-8 w-8 items-center justify-center text-muted"><X size={16} /></button>
              </div>
              <div className="mt-5 space-y-2.5">
                {NAV_ITEMS.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <a onClick={() => setMenuOpen(false)} className="neu-btn flex w-full items-center justify-between p-3.5 text-left">
                      <span className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-deep font-mono text-xs font-bold text-muted">{item.step}</span><span><strong className="block font-display text-sm text-ink">{item.label}</strong><small className="font-mono text-[9px] tracking-wider text-faint">{item.tag}</small></span></span>
                    </a>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
