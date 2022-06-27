import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from '@/styles/ProductForm.module.css';
import { useState } from 'react';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 100) {
    errors.name = 'Must be 100 characters or less';
  }
  if (!values.price) {
    errors.price = 'Required';
  }
  return errors;
};

const ProductForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(1);

  const handlePriceChange = (value) => {
    if (Number(value) > 0 && Number(value) <= 2000) {
      setPrice(value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add A Blindfold</h1>

      <Formik
        initialValues={{ name, price }}
        validate={validate}
        onSubmit={(values) =>
          handleSubmit({
            name: values.name,
            price: values.price,
          })
        }
      >
        {() => (
          <Form className={styles.form_container}>
            <fieldset className={styles.fset}>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" />
              <ErrorMessage
                component="div"
                name="name"
                className={styles.feedback_invalid}
              />
            </fieldset>
            <fieldset className={styles.fset}>
              <label htmlFor="price">Price</label>
              <Field id="price" name="price" />
              <ErrorMessage
                component="div"
                name="price"
                className={styles.feedback_invalid}
              />
            </fieldset>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
