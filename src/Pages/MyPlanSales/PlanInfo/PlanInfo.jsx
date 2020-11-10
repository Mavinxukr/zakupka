import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import styles from './PlanInfo.scss';
import { planDataReceivedSelector, planDataSelector } from '../../../utils/selectors';
import { getOnePlan } from '../../../redux/actions/onePlan';

const PlanInfo = () => {
  const dispatch = useDispatch();
  const plan = useSelector(planDataSelector);
  const isDataReceived = useSelector(planDataReceivedSelector);
  const paramas = useParams();
  const id = paramas.id;

  useEffect(() => {
    dispatch(getOnePlan({}, id));
  }, []);

  if (!isDataReceived) {
    return <div />;
  }

  // console.log('plan', plan);
  const obj = JSON.parse(plan.plans);
  // console.log('obj', obj);
  return (
    <>
      <Header />
      <div className={styles.containerGlobal}>
        <h3 className={styles.middleTitleGlobal}>Інформація про замовника</h3>
        <div className={styles.gridBlock}>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>{obj.procuringEntity.identifier.legalName}</span>
          <span className={styles.smallBoldTextGlobal}>Адреса</span>
          <span>{`
          ${obj.procuringEntity?.address?.countryName},
          ${obj.procuringEntity?.address?.region} 
          ${obj.procuringEntity?.address?.postalCode},
          ${obj.procuringEntity?.address?.streetAddress},
          `}
          </span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
        </div>
        <h3 className={styles.middleTitleGlobal}>Інформація про замовника</h3>
        <div className={styles.gridBlock}>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
        </div>
        <h3 className={styles.middleTitleGlobal}>Інформація про замовника</h3>
        <div className={styles.gridBlock}>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
        </div>
        <h3 className={styles.middleTitleGlobal}>Інформація про замовника</h3>
        <div className={styles.gridBlock}>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
          <span className={styles.smallBoldTextGlobal}>Найменування замовника</span>
          <span>name</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlanInfo;
