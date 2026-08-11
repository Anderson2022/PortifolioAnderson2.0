import Head from 'next/head'
import DataEngineeringPortfolio from '../src/App'

export default function DataEngineeringPage() {
  return (
    <>
      <Head>
        <title>Anderson | Engenharia de Dados</title>
        <meta name="description" content="Projetos, experiência e estudos de Anderson em engenharia de dados." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <DataEngineeringPortfolio />
    </>
  )
}
