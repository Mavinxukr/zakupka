import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Input.scss';

const Input = ({
  formikProps: {
    type,
    values,
    handleChange,
    classNameWrapper,
    handleBlur,
    id,
    name,
    placeholder,
    touched,
    errors,
  },
}) => {
  const classNameForInput = cx(classNameWrapper);

  return (
    <div className={styles.inputWrapper}>
      {(touched[name] && errors[name]) && (
        <span className={styles.errorLine} />
      )}
      <input
        type={type}
        value={values[name]}
        onChange={(e) => {
          handleChange(e);
        }}
        onBlur={handleBlur}
        className={classNameForInput}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  formikProps: PropTypes.shape({
    type: PropTypes.string,
    classNameWrapper: PropTypes.string,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    touched: PropTypes.object,
    errors: PropTypes.object,
    values: PropTypes.object,
  }),
};

export default Input;
