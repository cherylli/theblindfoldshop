import ProductListItem from '@/components/admin/ProductListItem';
import { useSelector, useDispatch } from 'react-redux';
import { populateProducts } from 'redux/products.slice';
import styles from '@/styles/ProductListPage.module.css';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const productsFromState = useSelector((state) => state.products.products);

  return (
    <div className={styles.container}>
      {productsFromState?.map((product) => (
        <ProductListItem product={product} />
      ))}
      {/*This is for playmode*/}
      {/*TODO: a bug here when "Reset Products" is clicked"*/}
      {/* TODO: buggy
      <button onClick={() => dispatch(populateProducts())}>
        Reset Products
      </button>*/}
    </div>
  );
};

export default ProductListPage;
