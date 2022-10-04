import styles from './ConnectSection.module.css';

const ConnectSection = () => {
  return (
    <section className={styles.connectSection}>
      <h2 className={styles.connectSection__title}>CONNECT</h2>
      <nav>
        <ul className={styles.connectSection__list}>
          <li>
            <a
              href='https://github.com/AhmedAliRezk5050'
              className={styles.connectSection__link}
            >
              <svg className={styles.connectSection__icon}>
                <use xlinkHref='/icons/sprite.svg#icon-github'></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/ahmed-ali-bb5197184/'
              className={styles.connectSection__link}
            >
              <svg className={styles.connectSection__icon}>
                <use xlinkHref='/icons/sprite.svg#icon-linkedin'></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href='https://drive.google.com/file/d/13iWaTGO9brL2O10sSRb3nZNJTTEUcpJy/view?usp=sharing'
              className={styles.connectSection__link}
            >
              <svg className={styles.connectSection__icon}>
                <use xlinkHref='/icons/sprite.svg#icon-file-pdf'></use>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default ConnectSection;
