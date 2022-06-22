import ProductCard from '@/components/ProductCard';
import styles from '../styles/Home.module.css';
import { getAllProducts } from './api/products';

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <h2>The best blindfolds in the universe</h2>
      <div className={styles.products_container}>
        {products.length === 0 && <div>No Product found.</div>}
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  //const res = await fetch(`http://localhost:3001/api/products`);
  //const products = await res.json();

  const products = getAllProducts();

  return {
    props: { products },
    revalidate: 1,
  };
};
