import Image from 'next/image';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_social_media}>
          <Image
            src="/images/socialmedia/icons8-facebook.svg"
            alt="Facebook Icon"
            width={40}
            height={40}
          />
          <Image
            src="/images/socialmedia/icons8-instagram.svg"
            alt="Instagram Icon"
            width={40}
            height={40}
          />
          <Image
            src="/images/socialmedia/icons8-twitter.svg"
            alt="Twitter Icon"
            width={40}
            height={40}
          />
          <Image
            src="/images/socialmedia/icons8-youtube.svg"
            alt="Youtube Icon"
            width={45}
            height={45}
          />
        </div>
        <div className={styles.copyright_text}>
          &copy; Copyright {new Date().getFullYear()}, TheBlindfoldShop
        </div>
      </div>
    </>
  );
};

export default Footer;
