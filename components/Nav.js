import Image from 'next/image';
import styles from '@/styles/Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.logo_container}>
        <Image src="/images/logo.png" layout="fill" objectFit="contain" />
      </div>
      <ul className={styles.nav_ul}>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
