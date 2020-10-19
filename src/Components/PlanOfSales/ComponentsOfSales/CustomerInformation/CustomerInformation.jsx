import React from 'react';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import styles from '../../Layout/Layout.scss';

const CustomerInformation = () => (
  <>
    <BlockForm>
      <div className={styles.blockCustomerInfo}>
        <h4 className={styles.middleTitleGlobal}>Інформація про замовника</h4>
        <div className={styles.customerInfo}>
          <p>Name</p>
          <p>3434, Україна, Вінницька область</p>
        </div>
      </div>
    </BlockForm>
  </>
);

export default CustomerInformation;
