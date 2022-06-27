import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import ProductForm from '@/components/admin/ProductForm';
import styles from '@/styles/AddProductPage.module.css';
import { addProduct } from 'redux/products.slice';
import data from '../api/products/data.json';

const AddProductPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const randomImages = data.images;

  const handleAddProduct = ({ name, price }) => {
    dispatch(
      addProduct({
        id: Math.floor(Math.random() * 100000).toString(),
        name: name === '' ? 'New Blindfold' : name,
        color: ['purple'],
        image: randomImages[Math.floor(Math.random() * randomImages.length)],
        categories: ['women'],
        sizes: ['M'],
        price: price === '' ? 20.0 : price,
      })
    );
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <ProductForm handleSubmit={handleAddProduct} />
    </div>
  );
};

export default AddProductPage;
