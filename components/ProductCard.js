import Image from 'next/image';
import { useDispatch } from 'react-redux/';
import { addToCart } from 'redux/cart.slice';
import styles from '@/styles/ProductCard.module.css';
import { formatMoney } from '@/utils/formatMoney';
import { isUsingLocalJsonData } from '../config';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const imagePath = isUsingLocalJsonData
    ? product.imgUrl
    : product.image.data.attributes.url;

  return (
    <div className={styles.container}>
      <div className={styles.product_name}>{product.name}</div>
      <div className={styles.img_container}>
        <img className={styles.image}
          src={imagePath}
          alt={`${product.name}-image`}
        />
      </div>

      <div className={styles.price}>{formatMoney(product.price)}</div>
      <div
        className={styles.add_to_cart_btn}
        onClick={() => dispatch(addToCart(product))}
      >
        ADD TO CART
      </div>
    </div>
  );
};

export default ProductCard;
