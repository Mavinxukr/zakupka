import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'js-cookie';
import * as Yup from 'yup';
import styles from './UserCompanyRoom.scss';
import { editCurrentUser } from '../../../../redux/actions/currentUser';
import { currentUserReceivedSelector } from '../../../../utils/selectors';
import Spinner from '../../../shared/Spinner';
import LayoutSmall from '../../../../Layout/LayoutSmall/LayoutSmall';

const UserCompanyRoom = () => {
  const dispatch = useDispatch();
  const isReserved = useSelector(currentUserReceivedSelector);

  // if (!isReserved) {
  //   return <Spinner />;
  // }

  const nameCustomer = {
    name: '',
    surname: '',
    role: 1,
    name_customer: 'поставщик',
  };

  return (
    <LayoutSmall>
      <Formik
        initialValues={nameCustomer}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Поле не може бути пустим'),
          surname: Yup.string()
            .required('Поле не може бути пустим'),
        })}
        onSubmit={(values) => {
          dispatch(editCurrentUser({}, cookies.get('tokenProzorro'),
            {
              ...values,
              role: +values.role,
              name_customer: +values.role === 1 ? 'поставщик' : 'закупщик',
            }));
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.containerGlobal}>
              <h1>Змінити дані користувача</h1>
              <p className={styles.middleTitleGlobal}>Ім&apos;я</p>
              <Field
                type="text"
                name="name"
                className={styles.inputGlobal}
                placeholder="Введіть ім'я"
              />
              <ErrorMessage name="name" component="span" className={styles.errorGlobal} />

              <p className={styles.middleTitleGlobal}>Прізвище</p>
              <Field
                type="text"
                name="surname"
                className={styles.inputGlobal}
                placeholder="Введіть прізвище"
              />
              <ErrorMessage name="surname" component="span" className={styles.errorGlobal} />

              <p className={styles.middleTitleGlobal}>Тип користувача</p>
              <Field as="select" name="role" className={styles.inputGlobal}>
                <option value="1">Постачальник</option>
                <option value="2">Замовник</option>
              </Field>

              <button
                type="submit"
                className={styles.buttonMainGlobal}
              >
                Зберегти
              </button>
            </div>
          </form>
        )}
      </Formik>
    </LayoutSmall>
  );
};

export default UserCompanyRoom;
