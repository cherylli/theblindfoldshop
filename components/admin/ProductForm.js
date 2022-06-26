import { Formik } from 'formik';
import styles from '@/styles/ProductForm.module.css';
import { useState } from 'react';

const ProductForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(1);

  const handlePriceChange = (value) => {
    if (Number(value) > 0 && Number(value) <= 2000) {
      setPrice(value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add A Blindfold</h1>
      <div className={styles.container}>
        <form>
          <fieldset className={styles.fset}>
            <label>
              <p>Name</p>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </fieldset>
          <fieldset className={styles.fset}>
            <label>
              <p>Price ($1-$2000)</p>
              <input
                type="number"
                value={price}
                max="1000"
                onChange={(e) => handlePriceChange(e.target.value)}
                name="price"
              />
            </label>
          </fieldset>
        </form>
        <button onClick={() => handleSubmit(name, price)}>Add</button>
      </div>
    </div>
  );
};

export default ProductForm;
