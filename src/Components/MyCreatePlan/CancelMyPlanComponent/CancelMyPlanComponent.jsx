import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import styles from './CancelMyPlanComponent.scss';

const CancelMyPlanComponent = () => (
  <>
    <div className={styles.containerGlobal}>
      <h4 className={styles.middleTitleGlobal}>Скасування процедури</h4>
      <Formik
        validationSchema={Yup.object({
          warning: Yup.string()
            .required('Поле обов\'язкове до заповнення'),
        })}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className={styles.gridContainer}>
            <span className={styles.smallBoldTextGlobal}>
              <span className={styles.redStar}>*</span>
              Скасування плану
            </span>
            <Field
              placeholder="Опишіть причину скасування плану: наприклад (помилково створений)"
              className={styles.field}
              component="textarea"
            />
            {formik.errors.warning && formik.touched.warning && (
              <p className={styles.error}>{formik.errors.warning}</p>
            )}
            <div className={styles.buttonBlock}>
              <NavLink
                to="/my_procurement_plans"
                className={styles.buttonMainGlobal}
              >
                Почати процедуру
              </NavLink>
              <NavLink
                to="/my_procurement_plans"
                className={styles.buttonGlobal}
              >
                Відміна скасування
              </NavLink>
            </div>
          </form>
        )}
      </Formik>
    </div>
  </>
);

export default CancelMyPlanComponent;
