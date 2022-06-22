import Footer from '@/components/Footer';
import styles from '@/styles/Layout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={styles.main_container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
