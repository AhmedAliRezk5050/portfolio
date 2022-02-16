import Link from 'next/link';
import styles from './Project.module.css';

const Project = ({ title, imgUrl, link }) => {
  return (
    <Link href={link}>
      <a className={styles.project}>
        <div
          className={styles['project__img-wrapper']}
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(3, 7, 30, 0.5), rgba(3, 7, 30, 0.2)), url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top left',
          }}
        ></div>
        <h3 className={styles.project__title}>{title}</h3>
      </a>
    </Link>
  );
};

export default Project;
