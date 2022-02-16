import Head from 'next/head';
import ConnectSection from '../components/ConnectSection/ConnectSection';
import IntroSection from '../components/IntroSection/IntroSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmed Ali - Front End Web Developer</title>
        <meta
          name='description'
          content='Ahmed Ali - Front End Web Developer Portfolio'
        />
      </Head>
      <IntroSection />
      <ProjectsSection />
      <ConnectSection />
    </>
  );
}
