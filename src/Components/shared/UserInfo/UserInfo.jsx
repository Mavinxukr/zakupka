import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'js-cookie';
import styles from './UserInfo.scss';
import { currentUserDataSelector } from '../../../utils/selectors';
import { getCurrentUser } from '../../../redux/actions/currentUser';

const UserInfo = () => {
  const dispatch = useDispatch();
  const userData = useSelector(currentUserDataSelector);

  useEffect(() => {
    dispatch(getCurrentUser({}, cookies.get('tokenProzorro')));
  }, []);

  console.log(userData);
  return (
    <>
      <div className={styles.gridBlockGlobal}>
        <span className={styles.normalBoldTextGlobal}>Інформація про замовника</span>
        <div className={styles.userInfo}>
          <p>{userData?.user?.name || "Ім'я"} {userData?.user?.surname || 'Призвіще'}</p>
          <p>{userData?.user?.email || 'Email'}</p>
          <p>{userData?.user?.phone || 'Номер телефону'}</p>
        </div>
      </div>
      <div className={styles.gridBlockGlobal}>
        <span className={styles.normalBoldTextGlobal}>Контакти</span>
        <span>{userData?.company?.country || ' держава'},{userData?.company?.address || ' адреса'},{userData?.company?.post_code || ' поштовий код'}</span>
      </div>
    </>
  );
};

export default UserInfo;
