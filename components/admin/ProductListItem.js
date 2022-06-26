import Image from 'next/image';
import styles from '@/styles/ProductListItem.module.css';
import { formatMoney } from '@/utils/formatMoney';
import { deleteProduct } from 'redux/products.slice';
import { useDispatch } from 'react-redux';

const ProductListItem = ({ product }) => {
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
      <div>{product.name}</div>
      <div>{formatMoney(product.price)}</div>
      <div>
        <button
          className={styles.delete_btn}
          onClick={() => dispatch(deleteProduct(product))}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
