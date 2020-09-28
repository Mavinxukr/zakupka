import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import styles from './InputFormik.scss';

const InputFormik = ({ formikProps, classNameWrapperr, classNameWrapperrLabel }) => (
  <div className={cx(styles.wrapper, classNameWrapperr)}>
    {formikProps.label && (
    <label
      htmlFor={formikProps.name}
      className={cx(styles.label, classNameWrapperrLabel)}
    >
      {formikProps.label}
    </label>
    )}
    <Input formikProps={formikProps} />
    {formikProps.touched[formikProps.name] && formikProps.errors[formikProps.name] && (
    <p className={styles.errorText}>{formikProps.errors[formikProps.name]}</p>
    )}
  </div>
);

InputFormik.propTypes = {
  formikProps: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
    label: PropTypes.string,
    name: PropTypes.string,
  }),
  classNameWrapperr: PropTypes.string,
  classNameWrapperrLabel: PropTypes.string,
};

export default InputFormik;
