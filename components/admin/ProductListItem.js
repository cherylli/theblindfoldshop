import Image from 'next/image';
import styles from '@/styles/ProductListItem.module.css';
import { deleteProduct, editProduct } from 'redux/products.slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ProductForm from './ProductForm';

const ProductListItem = ({ product }) => {
  const CollapsedView = () => {
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
        <div className={styles.product_name}>{product.name}</div>
        <div className={styles.action_btn_container}>
          <button
            className={styles.save_btn}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Edit
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
  const [isExpanded, setIsExpanded] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      {isExpanded ? (
        <div className={styles.expanded_container}>
          <ProductForm />
          <button
            className={styles.close_btn}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            X
          </button>
        </div>
      ) : (
        <CollapsedView />
      )}
    </>

    /*<div className={styles.container}>
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
  </div>*/
  );
};

export default ProductListItem;
