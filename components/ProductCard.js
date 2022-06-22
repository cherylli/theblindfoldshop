import Image from 'next/image';
import { useDispatch } from 'react-redux/';
import { addToCart } from 'redux/cart.slice';
import styles from '@/styles/ProductCard.module.css';
import { formatMoney } from '@/utils/formatMoney';

const ProductCard = ({ product }) => {
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
