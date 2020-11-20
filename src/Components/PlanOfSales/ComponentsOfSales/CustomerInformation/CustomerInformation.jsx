import React from 'react';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import styles from './CustomerInformation.scss';

const CustomerInformation = () => (
  <>
    <BlockForm>
      <span>Інформація про замовника</span>
      <div className={styles.customerInfo}>
        <p>Name</p>
        <p>3434, Україна, Вінницька область</p>
      </div>
    </BlockForm>
  </>
);

export default CustomerInformation;
