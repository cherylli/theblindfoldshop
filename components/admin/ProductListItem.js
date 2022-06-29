import Image from 'next/image';
import styles from '@/styles/ProductListItem.module.css';
import { deleteProduct, editProduct } from 'redux/products.slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductListItem = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handlePriceChange = (value) => {
    if (Number(value) > 0 && Number(value) <= 2000) {
      setPrice(value);
    }
  };

  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image
          src={`/images/products/${product.image}`}
          alt={`${product.name}-image`}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <input
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.input}
        value={price}
        onChange={(e) => handlePriceChange(e.target.value)}
      />
      <div className={styles.action_btn_container}>
        <button
          className={styles.save_btn}
          onClick={() => dispatch(editProduct({ id: product.id, name, price }))}
        >
          Save
        </button>
        <button
          className={styles.delete_btn}
          onClick={() => dispatch(deleteProduct(product))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
