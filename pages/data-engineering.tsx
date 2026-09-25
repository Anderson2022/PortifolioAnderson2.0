import Head from 'next/head'
import DataEngineeringPortfolio from '../src/App'

export default function DataEngineeringPage() {
  return (
    <>
      <Head>
        <title>Anderson Fernandes | Engenharia de Dados</title>
        <meta name="description" content="Jornada, arquitetura, projetos e estudos de Anderson Fernandes em Engenharia de Dados." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <DataEngineeringPortfolio />
    </>
  )
}
