import { useDispatch } from 'react-redux';
import ProductForm from '@/components/admin/ProductForm';
import { addProduct } from 'redux/products.slice';

const AddProductPage = () => {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: Math.floor(Math.random() * 100000).toString(),
        name: 'Purple Blindfold',
        color: ['purple'],
        image: 'bf3.jpg',
        categories: ['women'],
        sizes: ['M'],
        price: 25.4,
      })
    );
  };

  return (
    <div>
      <ProductForm />
      <button onClick={handleAddProduct}>Add A Blindfold</button>
    </div>
  );
};

export default AddProductPage;
