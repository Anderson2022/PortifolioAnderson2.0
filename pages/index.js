import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Hobby from '../components/Hobby'
import AmbientCanvas from '../src/components/AmbientCanvas'

export default function Home() {
  return (
    <div className="portfolio-home relative min-h-screen bg-base font-body text-ink antialiased">
      <Head>
        <title>Anderson | Full Stack Developer</title>
        <meta name="description" content="Portfólio de Anderson, desenvolvedor full stack e engenheiro de dados." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <AmbientCanvas />
      <main className="relative z-10">
      <Main />
      <About />
      <Skills />
      <Hobby />
      <Projects />
      <Contact />
      </main>
    </div>
  )
}
