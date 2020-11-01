import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import Slogan from '../components/slogan';
import Acerca from '../components/acerca';
import Tecnologias from '../components/tecnologias';
import Proyectos from '../components/proyectos';

export default function Home() {
  return (
    <>
      <Head>
        <title>Santiago Arcila - Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slogan id="#home" />
      <Acerca />
      <Tecnologias />
      <Proyectos />
    </>
  );
}
