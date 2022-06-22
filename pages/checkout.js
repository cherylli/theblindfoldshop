import Link from 'next/link';
import styles from '@/styles/CheckoutPage.module.css';

const CheckoutPage = () => {
  return (
    <div className={styles.container}>
      <div>Thank you for buying blindfolds from theblindfoldshop.com.au</div>
      <button>
        <Link href="/">Buy Again</Link>
      </button>
    </div>
  );
};

export default CheckoutPage;
