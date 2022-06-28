import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from '@/styles/ProductForm.module.css';
import * as Yup from 'yup';
import MultiSelectField from './MultiSelectField';
import { arrayToSelectOptions } from '@/utils/arrayToSelectOptions';
import Select from 'react-select';

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

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, 'Must be 100 characters or less.')
    .required('Required'),

  price: Yup.number()
    .min(0.01, 'Must be greater than $0.01')
    .max(2000, 'Must be less than $2000')
    .required('Required'),
});

const ProductForm = ({ handleSubmit }) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className={styles.container}>
      <h1>Add A Blindfold</h1>

      <Formik
        initialValues={{ name: '', price: 1, dessert: '' }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit({
            name: values.name,
            price: values.price,
          });
        }}
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
            <fieldset className={styles.fset}>
              <MultiSelectField options={options} />
            </fieldset>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
