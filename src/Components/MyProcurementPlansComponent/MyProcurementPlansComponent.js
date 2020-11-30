import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'js-cookie';
import styles from './MyProcurementPlansComponent.scss';
import { plansByCompanyReceivedSelector, plansByCompanySelector } from '../../utils/selectors';
import { getPlansByCompany } from '../../redux/actions/getPlansByCompanyAction';

const MyProcurementPlansComponent = () => {
  const dispatch = useDispatch();
  const plansData = useSelector(plansByCompanySelector);
  const isDataReceived = useSelector(plansByCompanyReceivedSelector);

  useEffect(() => {
    dispatch(getPlansByCompany({}, cookies.get('tokenProzorro')));
  }, []);

  if (!isDataReceived) {
    return <div />;
  }

  console.log(isDataReceived, plansData);

  return (
    <div className={styles.containerGlobal}>
      <h2>Boo</h2>
    </div>
  );
};

export default MyProcurementPlansComponent;
