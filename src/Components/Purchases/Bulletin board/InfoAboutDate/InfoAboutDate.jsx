import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './InfoAboutDate.scss';
import { getPlanReceivedSelector, getPlanSelector } from '../../../../utils/selectors';
import Spinner from '../../../shared/Spinner';
import { getPlan } from '../../../../redux/actions/getPlan';
import BlockForm from '../../../shared/BlockForm/BlockForm';

const InfoAboutCustomer = () => {
  const dispatch = useDispatch();
  const dataPlan = useSelector(getPlanSelector);
  const isReceived = useSelector(getPlanReceivedSelector);
  const id = useHistory().location.pathname.split('/')[2];

  useEffect(() => {
    dispatch(getPlan({}, id));
  }, []);

  if (!isReceived) {
    return <Spinner />;
  }

  const info = JSON.parse(dataPlan.plans);
  console.log('dataPlan', dataPlan);
  console.log('info', info);
  return (
    <>
      <BlockForm>
        <h2 className={styles.middleTitleGlobal}>Інформація про замовника</h2>
        <div className={styles.containerInfo}>
          <ul className={styles.names}>
            <li className={styles.normalBoldTextGlobal}>Назва:</li>
            <li className={styles.normalBoldTextGlobal}>Код ЄДРПОУ:</li>
            <li className={styles.normalBoldTextGlobal}>Веб сайт:</li>
            <li className={styles.normalBoldTextGlobal}>Адреса:</li>
          </ul>
          <ul className={styles.description}>
            <li className={styles.smallTextGlobal}>{dataPlan.customer_legalName || 'не вказано'}</li>
            <li className={styles.smallTextGlobal}>{dataPlan.customer_edrpo || 'не вказано'}</li>
            <li className={styles.smallTextGlobal}>{info.owner || 'не вказано'}</li>
            <li className={styles.smallTextGlobal}>
              {`${info.procuringEntity.address.countryName}, ${info.procuringEntity.address.postalCode}, ${info.procuringEntity.address.region},`}
            </li>
          </ul>
        </div>
      </BlockForm>
      <BlockForm>
        <h2 className={styles.middleTitleGlobal}>Про закупівлю</h2>
        <div className={styles.containerInfo}>
          <ul className={styles.names}>
            <li className={styles.normalBoldTextGlobal}>Очікувана вартість:</li>
            <li className={styles.normalBoldTextGlobal}>Код ЄДРПОУ:</li>
            <li className={styles.normalBoldTextGlobal}>Веб сайт:</li>
            <li className={styles.normalBoldTextGlobal}>Адреса:</li>
          </ul>
          <ul className={styles.description}>
            <li className={styles.smallTextGlobal}>{info.procuringEntity.identifier.legalName}</li>
            <li className={styles.smallTextGlobal}>32368086</li>
            <li className={styles.smallTextGlobal}>Не вказано</li>
            <li className={styles.smallTextGlobal}>
              {`${info.procuringEntity.address.countryName}, ${info.procuringEntity.address.postalCode}, ${info.procuringEntity.address.region},`}
            </li>
          </ul>
        </div>
      </BlockForm>
      <BlockForm>
        <h2 className={styles.middleTitleGlobal}>Важливі дати</h2>
        <div className={styles.containerInfo}>
          <ul className={styles.names}>
            <li className={styles.normalBoldTextGlobal}>Назва:</li>
            <li className={styles.normalBoldTextGlobal}>Код ЄДРПОУ:</li>
            <li className={styles.normalBoldTextGlobal}>Веб сайт:</li>
            <li className={styles.normalBoldTextGlobal}>Адреса:</li>
          </ul>
          <ul className={styles.description}>
            <li className={styles.smallTextGlobal}>{info.procuringEntity.identifier.legalName}</li>
            <li className={styles.smallTextGlobal}>32368086</li>
            <li className={styles.smallTextGlobal}>Не вказано</li>
            <li className={styles.smallTextGlobal}>
              {`${info.procuringEntity.address.countryName}, ${info.procuringEntity.address.postalCode}, ${info.procuringEntity.address.region},`}
            </li>
          </ul>
        </div>
      </BlockForm>
      <BlockForm>
        <h2 className={styles.middleTitleGlobal}>Список позицій</h2>
        <div className={styles.containerInfo}>
          <ul className={styles.names}>
            <li className={styles.normalBoldTextGlobal}>Назва:</li>
            <li className={styles.normalBoldTextGlobal}>Код ЄДРПОУ:</li>
            <li className={styles.normalBoldTextGlobal}>Веб сайт:</li>
            <li className={styles.normalBoldTextGlobal}>Адреса:</li>
          </ul>
          <ul className={styles.description}>
            <li className={styles.smallTextGlobal}>{info.procuringEntity.identifier.legalName}</li>
            <li className={styles.smallTextGlobal}>32368086</li>
            <li className={styles.smallTextGlobal}>Не вказано</li>
            <li className={styles.smallTextGlobal}>
              {`${info.procuringEntity.address.countryName}, ${info.procuringEntity.address.postalCode}, ${info.procuringEntity.address.region},`}
            </li>
          </ul>
        </div>
      </BlockForm>
      <BlockForm>
        <h2 className={styles.middleTitleGlobal}>Документи закупівлі</h2>
        <div className={styles.containerInfo}>
          <ul className={styles.names}>
            <li className={styles.normalBoldTextGlobal}>Назва:</li>
            <li className={styles.normalBoldTextGlobal}>Код ЄДРПОУ:</li>
            <li className={styles.normalBoldTextGlobal}>Веб сайт:</li>
            <li className={styles.normalBoldTextGlobal}>Адреса:</li>
          </ul>
          <ul className={styles.description}>
            <li className={styles.smallTextGlobal}>{info.procuringEntity.identifier.legalName}</li>
            <li className={styles.smallTextGlobal}>32368086</li>
            <li className={styles.smallTextGlobal}>Не вказано</li>
            <li className={styles.smallTextGlobal}>
              {`${info.procuringEntity.address.countryName}, ${info.procuringEntity.address.postalCode}, ${info.procuringEntity.address.region},`}
            </li>
          </ul>
        </div>
      </BlockForm>
    </>
  );
};

export default InfoAboutCustomer;
