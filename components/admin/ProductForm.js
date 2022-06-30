import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from '@/styles/ProductForm.module.css';
import * as Yup from 'yup';
import MultiSelectField from './MultiSelectField';
import { arrayToSelectOptions } from '@/utils/arrayToSelectOptions';
import { getAllCategories } from 'pages/api/products/properties/categories';
import { useEffect, useState } from 'react';
import { getAllSizes } from 'pages/api/products/properties/sizes';
import { getAllColors } from 'pages/api/products/properties/colors';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, 'Must be 100 characters or less.')
    .required('Required'),

  price: Yup.number()
    .typeError('Price must be a number')
    .min(0.01, 'Must be greater than $0.01')
    .max(2000, 'Must be less than $2000')
    .required('Required'),
});

const ProductForm = ({ handleSubmit, product, submitButtonLabel }) => {
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  const initialValues = product
    ? { name: product.name, price: product.price }
    : { name: '', price: 1 };

  useEffect(() => {
    const getAllCategoriesFromAPI = async () => {
      const allCategories = await getAllCategories();
      const allSizes = await getAllSizes();
      const allColors = await getAllColors();
      setCategories(arrayToSelectOptions(allCategories));
      setSizes(arrayToSelectOptions(allSizes));
      setColors(arrayToSelectOptions(allColors));
    };
    getAllCategoriesFromAPI();
  }, []);

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit({
            name: values.name,
            price: values.price,
            categories: values.categories,
            colors: values.colors,
            sizes: values.sizes,
          });
        }}
      >
        {(form, field) => (
          <Form className={styles.form_container}>
            <fieldset className={styles.fset}>
              <label htmlFor="name" className={styles.input_label}>
                Product Name
              </label>
              <Field
                id="name"
                name="name"
                className={styles.input}
                autoComplete="off"
              />
              <div className={styles.feedback_container}>
                <ErrorMessage
                  component="div"
                  name="name"
                  className={styles.feedback_invalid}
                />
              </div>
            </fieldset>
            <fieldset className={styles.fset}>
              <label htmlFor="price" className={styles.input_label}>
                Price
              </label>
              <Field id="price" name="price" className={styles.input} />
              <div className={styles.feedback_container}>
                <ErrorMessage
                  component="div"
                  name="price"
                  className={styles.feedback_invalid}
                />
              </div>
            </fieldset>
            <fieldset className={styles.fset}>
              <label htmlFor="categories" className={styles.input_label}>
                Categories
              </label>
              <Field
                id="categories"
                name="categories"
                component={MultiSelectField}
                options={categories}
                defaultValue={
                  product ? arrayToSelectOptions(product.categories) : []
                }
              />
            </fieldset>
            <fieldset className={styles.fset}>
              <label htmlFor="colors" className={styles.input_label}>
                Colors
              </label>
              <Field
                id="colors"
                name="colors"
                component={MultiSelectField}
                options={colors}
                defaultValue={
                  product ? arrayToSelectOptions(product.colors) : []
                }
              />
            </fieldset>
            <fieldset className={styles.fset}>
              <label htmlFor="sizes" className={styles.input_label}>
                Sizes
              </label>
              <Field
                id="sizes"
                name="sizes"
                component={MultiSelectField}
                options={sizes}
                defaultValue={
                  product ? arrayToSelectOptions(product.sizes) : []
                }
              />
            </fieldset>

            <button type="submit" className={styles.submit_btn}>
              {submitButtonLabel || 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
