import Image from 'next/image';
import { useDispatch } from 'react-redux';
import styles from '@/styles/CartItem.module.css';
import { formatMoney } from '@/utils/formatMoney';
import {
  incrementProductQuantity,
  decrementProductQuantity,
  removeFromCart,
} from 'redux/cart.slice';

const CartItem = ({ product }) => {
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
      <div className={styles.quantity_container}>
        <button
          className={styles.cart_btn}
          onClick={() => dispatch(decrementProductQuantity(product))}
        >
          -
        </button>
        <div>{product.quantity}</div>
        <button
          className={styles.cart_btn}
          onClick={() => dispatch(incrementProductQuantity(product))}
        >
          +
        </button>
      </div>
      <div>{formatMoney(product.price * product.quantity)}</div>
      <div>
        <button
          className={styles.cart_btn}
          onClick={() => dispatch(removeFromCart(product))}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default CartItem;
