import ProductListItem from '@/components/admin/ProductListItem';
import { useSelector, useDispatch } from 'react-redux';
import styles from '@/styles/ProductListPage.module.css';

const ProductListPage = () => {
  const productsFromState = useSelector((state) => state.products.products);

  return (
    <div className={styles.container}>
      {productsFromState?.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductListPage;
