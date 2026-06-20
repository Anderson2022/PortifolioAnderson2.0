export const ContactSection = () => {
  return (
    <>
      <div className="bg-slate-50 py-20 text-center border-t border-slate-200">
        <div className="max-w-md mx-auto px-6">
          <div className="text-4xl font-semibold tracking-tight mb-4 text-slate-900">Vamos construir algo incrível juntos?</div>
          <p className="text-slate-600 mb-10">Estou aberto para colaborações, freelance e novas oportunidades em projetos backend desafiadores.</p>
          
          <a 
            href="mailto:seuemail@exemplo.com" 
            className="inline-flex items-center gap-x-4 group px-10 py-5 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-900 text-lg font-medium hover:brightness-110 transition-all active:scale-95"
          >
            ENVIAR EMAIL 
            <span className="text-xl group-active:rotate-45 transition-transform">→</span>
          </a>
        </div>
      </div>

      <footer className="py-8 text-center text-xs text-slate-500 font-mono border-t border-slate-200 bg-slate-50">
        FEITO COM TAILWIND + REACT + NEOMORPHISM + 3D SHADOWS • 2025
      </footer>
    </>
  );
};
