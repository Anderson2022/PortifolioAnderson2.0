import Head from 'next/head'
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa'

export default function ContactPage(){return <div className="contact-page">
  <Head><title>Contato | Anderson Fernandes</title><meta name="description" content="Entre em contato com Anderson Fernandes para projetos e oportunidades." /></Head>
  <main className="contact-shell">
    <header className="contact-heading"><p>CONTATO / CANAL DIRETO</p><h1>Vamos conversar<br/>sobre o seu <em>projeto.</em></h1><span>Para oportunidades, projetos freelance ou colaborações, envie uma mensagem. Responderei assim que possível.</span></header>
    <section className="contact-layout">
      <aside>
        <div className="contact-availability"><i/> DISPONÍVEL PARA NOVOS PROJETOS</div>
        <div className="contact-channels">
          <a href="mailto:andersonsfernandes@hotmail.com"><Mail/><div><span>E-MAIL</span><b>andersonsfernandes@hotmail.com</b></div><ArrowUpRight/></a>
          <a href="tel:+5565992803826"><Phone/><div><span>TELEFONE</span><b>(65) 99280-3826</b></div><ArrowUpRight/></a>
          <a href="https://api.whatsapp.com/send?phone=+55+5565992803826&text=Olá%2C+Anderson+Silva" target="_blank" rel="noreferrer"><MessageCircle/><div><span>WHATSAPP</span><b>Iniciar conversa</b></div><ArrowUpRight/></a>
          <a href="https://www.linkedin.com/in/anderson-silva-346255160/" target="_blank" rel="noreferrer"><FaLinkedinIn/><div><span>LINKEDIN</span><b>Conectar profissionalmente</b></div><ArrowUpRight/></a>
        </div>
        <div className="contact-meta"><p><MapPin/> Cuiabá, Mato Grosso</p><p><Clock/> Horário comercial · GMT-4</p></div>
      </aside>
      <form action="https://getform.io/f/775ba89d-a79d-4e21-ab04-7a1030679546" method="POST">
        <div className="contact-form-head"><span>ENVIE UMA MENSAGEM</span><b>01 — 05</b></div>
        <label>Seu nome<input name="name" type="text" placeholder="Como posso chamar você?" required/></label>
        <label>Seu e-mail<input name="email" type="email" placeholder="voce@email.com" required/></label>
        <label>Assunto<select name="subject" defaultValue=""><option value="" disabled>Selecione um assunto</option><option>Projeto freelance</option><option>Oportunidade profissional</option><option>Parceria</option><option>Outro assunto</option></select></label>
        <label>Mensagem<textarea name="message" rows="6" placeholder="Conte brevemente sobre o que você precisa..." required/></label>
        <button type="submit">Enviar mensagem <ArrowUpRight size={18}/></button>
      </form>
    </section>
  </main>
  <footer className="contact-footer"><div className="contact-shell"><span>ANDERSON.DEV / CONTATO</span><span>CUIABÁ · BRASIL</span><span>© {new Date().getFullYear()}</span></div></footer>
  </div>}
