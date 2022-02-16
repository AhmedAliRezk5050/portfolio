import Link from 'next/link';
import styles from './Header.module.css';
import cn from 'classnames';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={cn(styles.header__list, styles['header__list--left'])}>
          <li>
            <Link href='/'>
              <a className={styles.header__link}>AHMED ALI</a>
            </Link>
          </li>
        </ul>
        <ul className={cn(styles.header__list, styles['header__list--right'])}>
          <li>
            <Link href='/'>
              <a className={styles.header__link}>HOME</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className={styles.header__link}>PROJECTS</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className={styles.header__link}>CONNECT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
