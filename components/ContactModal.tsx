import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Mail, User, Briefcase } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Projeto Web Customizado');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0b0f19]/85 backdrop-blur-xl transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto p-6 sm:p-10">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[80px] pointer-events-none rounded-full" />

        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-gray-400 hover:text-white border border-white/10 shadow-xl transition-all active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Iniciar Projeto ou Contato
                </h2>
                <p className="text-sm text-gray-400">
                  Preencha o formulário abaixo para orçamentos ou parcerias.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" /> Seu Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Anderson Silva"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" /> Seu E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contato@empresa.com"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Assunto do Contato
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                >
                  <option value="Projeto Web Customizado">Desenvolvimento Web Customizado (Vue/React)</option>
                  <option value="Suporte e Melhorias">Suporte & Evolução de Projeto Existente</option>
                  <option value="Oportunidade Profissional">Oportunidade Profissional / Contratação</option>
                  <option value="Outros Assuntos">Outros Assuntos</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Mensagem Detalhada
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte um pouco sobre suas metas, prazos ou ideias..."
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando mensagem...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem Agora</span>
                    <Send className="w-4 h-4 text-cyan-200" />
                  </>
                )}
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center py-12 px-4">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10">
              <CheckCircle2 className="w-12 h-12 animate-bounce" />
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-2">Mensagem Enviada!</h3>
            <p className="text-gray-300 max-w-md mx-auto mb-8 leading-relaxed">
              Obrigado pelo contato, <strong className="text-cyan-400">{name}</strong>. Recebi suas informações e retornarei em breve no e-mail fornecido.
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all"
            >
              Fechar Janela
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactModal;
