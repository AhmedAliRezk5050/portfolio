import styles from './IntroSection.module.css';

const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <h1 className={styles.introSection__title}>Hello, my name is Ahmed.</h1>
      <p className={styles.introSection__description}>I am a MERN developer.</p>
    </section>
  );
};

export default IntroSection;
