import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { getAllProducts } from './api/products';

export default function Home({ products }) {
  const [filter, setFilter] = useState([]);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFilter([...filter, value]);
    } else {
      setFilter(filter.filter((item) => item !== value));
    }
  };

  const handleClearFilter = () => {
    setFilter([]);
    document
      .querySelectorAll('input[type=checkbox]')
      .forEach((el) => (el.checked = false));
  };

  let filteredProducts = products;
  if (filter.length !== 0) {
    filteredProducts = products.filter((product) =>
      filter.some((f) => product.categories.includes(f))
    );
  }

  return (
    <div className={styles.container}>
      <h2>The best blindfolds in the universe</h2>
      <div className={styles.filter}>
        {/*TODO: generate these dynamically based on the data */}
        <div>
          <input
            type="checkbox"
            name="filter-men"
            value="men"
            onClick={handleFilterChange}
          />
          <label htmlFor="filter-men">Men</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-women"
            value="women"
            onClick={handleFilterChange}
          />
          <label htmlFor="filter-women">Women</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="filter-kids"
            value="kids"
            onClick={handleFilterChange}
          />
          <label htmlFor="filter-kids">Kids</label>
        </div>
        <button onClick={handleClearFilter}>Clear</button>
      </div>
      <div className={styles.products_container}>
        {filteredProducts.length === 0 && <div>No Product found.</div>}
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  //const res = await fetch(`http://localhost:3001/api/products`);
  //const products = await res.json();

  const products = await getAllProducts();

  return {
    props: { products },
    revalidate: 1,
  };
};
