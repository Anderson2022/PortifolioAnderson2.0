import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Film, Layers, Palette } from 'lucide-react'

const skills = [['HTML','/assets/skills/html.png'],['CSS','/assets/skills/css.png'],['JavaScript','/assets/skills/javascript.png'],['React','/assets/skills/react.png'],['Tailwind','/assets/skills/tailwind.png'],['Adonis.js','/assets/skills/adonis.png'],['GitHub','/assets/skills/github1.png'],['Next.js','/assets/skills/nextjs.png'],['PHP','/assets/skills/php.png'],['MySQL','/assets/skills/mysql.png'],['Node.js','/assets/skills/node.png'],['Redis','/assets/skills/redis.png']]
const hobbies = [['After Effects','Motion design','/assets/skills/effects.png'],['Premiere Pro','Edição de vídeo','/assets/skills/premiere.png'],['Lightroom 5','Tratamento de imagem','/assets/skills/lightroom.png'],['Photoshop','Composição visual','/assets/skills/photos.png']]

export default function SkillsPage(){return <div className="skills-page"><Head><title>Tech & Criatividade | Anderson Silva</title></Head><main className="skills-shell">
  <section className="skills-code"><header><div><span>SKILLS</span><h2>Minha caixa de ferramentas</h2></div><p>Tecnologias que utilizo para transformar regras de negócio em produtos digitais.</p></header><div className="skills-wall">{skills.map(([name,image],index)=><article key={name}><span>{String(index+1).padStart(2,'0')}</span><Image src={image} alt="" width={48} height={48} objectFit="contain"/><h3>{name}</h3><small>{index > 7 ? 'BACK-END' : 'WEB'}</small></article>)}</div></section>
  <section className="skills-creative"><header><span>HOBBY / LABORATÓRIO CRIATIVO</span><h2>Além do código</h2><p>Imagem, edição e movimento desenvolvem meu olhar para detalhe, ritmo e experiência.</p></header><div>{hobbies.map(([name,type,image],index)=><article key={name}><div><Image src={image} alt="" width={64} height={64} objectFit="contain"/></div><span>0{index+1}</span><h3>{name}</h3><p>{type}</p>{index===0?<Film/>:index===1?<Layers/>:<Palette/>}</article>)}</div></section>
  <section className="skills-next"><p>PRONTO PARA VER NA PRÁTICA?</p><h2>Explore os projetos onde essa combinação ganha forma.</h2><Link href="/projects"><a>Ver projetos <ArrowRight size={18}/></a></Link></section>
  </main></div>}
