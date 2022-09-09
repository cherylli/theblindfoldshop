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
        <img className={styles.image}
          src={product.imgUrl}
          alt={`${product.name}-image`}
        />
      </div>
      <div className={styles.product_name}>{product.name}</div>
      <div className={styles.price}>{formatMoney(product.price)}</div>
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
      <div className={styles.price_subtotal}>
        {formatMoney(product.price * product.quantity)}
      </div>
      <div className={styles.delete_btn_container}>
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
