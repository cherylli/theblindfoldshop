import Image from 'next/image';
import styles from '@/styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image
          src={`/images/products/${product.image}`}
          objectFit="contain"
          layout="fill"
        />
      </div>

      <div>{product.name}</div>
    </div>
  );
};

export default ProductCard;
