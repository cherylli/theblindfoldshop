import Image from 'next/image';
import styles from '@/styles/ProductListItem.module.css';
import {deleteProduct, editProduct} from 'redux/products.slice';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import ProductForm from './ProductForm';

const ProductListItem = ({product}) => {
    const dispatch = useDispatch();
    const CollapsedView = () => {
        return (
            <div className={styles.container}>
                <div className={styles.img_container}>
                    <img className={styles.image}
                         src={product.imgUrl}
                         alt={`${product.name}-image`}
                    />
                </div>
                <div className={styles.product_name}>{product.name}</div>
                <div className={styles.action_btn_container}>
                    <button
                        className={styles.save_btn}
                        onClick={() => setIsExpanded((prev) => !prev)}
                    >
                        Edit
                    </button>
                    <button
                        className={styles.delete_btn}
                        onClick={() => dispatch(deleteProduct(product))}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    };
    const [isExpanded, setIsExpanded] = useState(false);

    const handleEditItem = ({name, price, sizes, categories, colors, imgUrl}) => {
        // if sizes or other multiselect fields are undefined that means it's not changed,
        // set it to the original value
        const updatedSizes = sizes === undefined ? product.sizes : sizes;
        const updatedCategories =
            categories === undefined ? product.categories : categories;
        const updatedColors = colors === undefined ? product.colors : colors;

        dispatch(
            editProduct({
                id: product.id,
                name,
                price,
                imgUrl,
                colors: updatedColors,
                sizes: updatedSizes,
                categories: updatedCategories,
            })
        );
        setIsExpanded(false);
    };

    return (
        <>
            {isExpanded ? (
                <div className={styles.expanded_container}>
                    <ProductForm
                        handleSubmit={handleEditItem}
                        product={product}
                        submitButtonLabel="Save"
                    />
                    <button
                        className={styles.close_btn}
                        onClick={() => setIsExpanded(false)}
                    >
                        X
                    </button>
                </div>
            ) : (
                <CollapsedView/>
            )}
        </>
    );
};

export default ProductListItem;
