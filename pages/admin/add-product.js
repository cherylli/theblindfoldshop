import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import ProductForm from '@/components/admin/ProductForm';
import styles from '@/styles/AddProductPage.module.css';
import {addProduct} from 'redux/products.slice';
import data from '../api/products/data.json';

const AddProductPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const randomImages = data.images;

    const handleAddProduct = ({name, price, sizes, categories, colors, imgUrl}) => {
        dispatch(
            addProduct({
                id: Math.floor(Math.random() * 100000).toString(),
                name: name === '' ? 'New Blindfold' : name,
                price: price === '' ? 20.0 : price,
                colors: colors ? colors : [],
                //image: randomImages[Math.floor(Math.random() * randomImages.length)],
                imgUrl,
                categories: categories ? categories : [],
                sizes: sizes ? sizes : [],
            })
        );
        router.push('/');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Add A Blindfold</h1>
            <ProductForm handleSubmit={handleAddProduct} submitButtonLabel="Add"/>
        </div>
    );
};

export default AddProductPage;
