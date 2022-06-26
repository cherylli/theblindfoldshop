import styles from '@/styles/ProductForm.module.css';

const ProductForm = () => {
  return (
    <div className={styles.container}>
      <form>
        <fieldset className={styles.fset}>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <fieldset className={styles.fset}>
          <label>
            Description
            <input name="name" />
          </label>
        </fieldset>
        <fieldset className={styles.fset}>
          <label>
            <p>Price</p>
            <input name="name" />
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default ProductForm;
