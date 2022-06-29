import Select from 'react-select';
import styles from '@/styles/MultiSelectField.module.css';

const MultiSelectField = ({ options, form, field, defaultValue }) => {
  const onChange = (options) => {
    form.setFieldValue(
      field.name,
      options.map((item) => item.value)
    );
  };

  const getValue = () => {
    if (options) {
      return options.find((option) => option.value === field.value);
    } else {
      return [];
    }
  };

  const customStyles = {};

  return (
    <Select
      className={styles.input}
      styles={customStyles}
      instanceId={field.name}
      name={field.name}
      isMulti
      value={getValue()}
      options={options}
      defaultValue={defaultValue ? defaultValue : []}
      onChange={onChange}
    />
  );
};

export default MultiSelectField;
