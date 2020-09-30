import { Field } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import styles from '../../Layout/Layout.scss';
import Products from '../Products/Products';

const ProcedureType = ({ isOnChangeOption, onChangeOption }) => (
  <>
    <BlockForm>
      <h4 className={styles.title}>Тип процедури</h4>
      <div className={styles.containerProcedure}>
        <p>
          <span className={styles.redStar}>*</span>
          Оберіть тип процедури
        </p>
        <div className={styles.changeProcedure}>
          <Field
            as="select"
            name="procedureType"
            id="role"
            onChange={(e) => isOnChangeOption(e.target.value)}
          >
            <option value="a1">Срощена/допорогова закупівля</option>
            <option value="a2">Відкриті торги</option>
            <option value="a3">Відкриті торги з публікацією англійською мовою</option>
            <option value="a4">Публічні закупівлі енергосервісу</option>
            <option value="a5">Закупівля без використання електронної системи</option>
            <option value="a6">Переговорна процедура</option>
            <option value="a7">Переговорна процедура, скорочена</option>
            <option value="a8">Конкурентний діалог</option>
            <option value="a9">Конкурентний діалог з публікацією англійською мовою</option>
            <option value="a10">Укладення рамкової угоди</option>
          </Field>
          {/* eslint-disable */}
        <label>
          <Field type="checkbox" name="toggle" className={styles.toggle}/>
          <span className={styles.mLeft}>Мультилотова закупівля</span>
        </label>
        {/* eslint-enable */}
          <p className={styles.textLow}>
            Проведення закупівлі за окремими частинами (лотами) в межах єдиної процедури закупівлі
          </p>
        </div>
      </div>
      {onChangeOption === 'a1' && (
      <p>asdasd</p>
      )}
      {onChangeOption === 'a2' && (
      <p>fsdfsdfsdfs</p>
      )}
    </BlockForm>
  </>
);

Products.propTypes = {
  isOnChangeOption: PropTypes.object,
  onChangeOption: PropTypes.object,
};

export default ProcedureType;
