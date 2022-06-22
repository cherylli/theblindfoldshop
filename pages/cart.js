import CartItem from '@/components/CartItem';
import { formatMoney } from '@/utils/formatMoney';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from 'redux/cart.slice';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const cart = useSelector((state) => state.cart.products);

  const getTotalPrice = () =>
    cart.reduce((acc, product) => acc + product.quantity * product.price, 0);

  const dispatch = useDispatch();

  return (
    <div className={styles.cart_container}>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </>
      )}
      <div className={styles.total_div}>
        Total: {formatMoney(getTotalPrice())}
      </div>
      <button className={styles.checkout_btn}>
        <Link href="/checkout">
          <a onClick={() => dispatch(clearCart())}>Checkout</a>
        </Link>
      </button>
      {/*
        <button
        className={styles.checkout_btn}
        onClick={() => dispatch(clearCart())}
      >
        Clear cart
      </button>
        */}
    </div>
  );
};

export default CartPage;
