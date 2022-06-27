import Image from 'next/image';
import styles from '@/styles/Nav.module.css';
import Link from 'next/link';
import { isAdmin } from '../config';

const Nav = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.logo_container}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <ul className={styles.nav_ul}>
        {isAdmin && (
          <>
            <li>
              <Link href="/admin/add-product">➕Add Blindfolds</Link>
            </li>
            <li>
              <Link href="/admin/product-list">🖊️Edit Blindfolds</Link>
            </li>
          </>
        )}
        <li>
          <Link href="/cart">🛒Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
