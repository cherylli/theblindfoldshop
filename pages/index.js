import ProductCard from '@/components/ProductCard';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Home.module.css';
import { getAllProducts } from './api/products';
import LogRocket from 'logrocket';
import { populateProducts } from 'redux/products.slice';

export default function Home({ products }) {
  LogRocket.init('f5mjid/theblindfoldshop-dev');

  const [filter, setFilter] = useState([]);
  const dispatch = useDispatch();
  const productsFromState = useSelector((state) => state.products.products);

  useEffect(() => {
    // load products into states

    if (productsFromState.length === 0) {
      dispatch(populateProducts(products));
    }
  }, [dispatch, products, productsFromState.length]);

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

  let filteredProducts = productsFromState;
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
        {filteredProducts.length === 0 && (
          <div>
            <p>No Product found.</p>
            {/*This is for playmode*/}
            <button onClick={() => dispatch(populateProducts(products))}>
              Reset Products
            </button>
          </div>
        )}
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
