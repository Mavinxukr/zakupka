import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPlans } from '../../../redux/actions/plans';
import { plansDataSelector, plansDataReceivedSelector } from '../../../utils/selectors';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
import WarningAttention from '../../shared/Warnings/WarningAttention/WarningAttention';
import Footer from '../../shared/Footer/Footer';
import styles from './Layout.scss';

const Layout = () => {
  const dispatch = useDispatch();
  const plans = useSelector(plansDataSelector);
  const isDataReceived = useSelector(plansDataReceivedSelector);

  useEffect(() => {
    dispatch(getPlans({}));
  }, []);

  if (!isDataReceived) {
    return <div />;
  }
  return (
    <div className={styles.section}>
      <MenuPurchaser />
      <div className={styles.container}>
        <h2>Плани закупівель </h2>
        <button type="button" className={styles.buttonGlobal}>
          <NavLink
            to="cancel_my_plan"
          >Скасувати процедуру
          </NavLink>
        </button>
        <div className={styles.titleTable}>
          <h3 className={styles.smallTitleGlobal}>Назва плану</h3>
          <h3 className={styles.smallTitleGlobal}>Планова сума закупівлі</h3>
          <h3 className={styles.smallTitleGlobal}>Початок процедури</h3>
          <h3 className={styles.smallTitleGlobal}>Статус</h3>
        </div>
        {plans.data.map((item) => {
          const d = new Date(item.start_tenderPeriod);
          // console.log(item.id);
          const itemPlans = JSON.parse(item.plans);

          // console.log('itemPlans', itemPlans);

          const options = {
            month: 'long',
            year: 'numeric',
          };
          const statusSwitch = (status) => {
            switch (status) {
              case 'scheduled':
                return <span className={styles.greenText}>Очікує підпису</span>;

              case 'complete':
                return <span className={styles.grayText}>Чернетка</span>;

              default:
                return <span className={styles.grayText}>Не має інформації про статус</span>;
            }
          };
          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.rowTable}>
                <div className={styles.flexColumnGlobal}>
                  <NavLink
                    to={`/my_plane_sales/${item.id}`}
                    exact
                    className={styles.normalBlueTextGlobal}
                  >
                    {itemPlans.budget.description}
                  </NavLink>
                  <div>
                    <span>Про компанію: </span>
                    <span className={styles.smallBoldTextGlobal}>{itemPlans.procuringEntity.identifier.legalName}</span>
                  </div>
                </div>
                <span className={styles.smallBoldTextGlobal}>{item.expected_cost}грн.</span>
                <span>{d.toLocaleDateString('uk-UA', options)}</span>
                <div>
                  {
                     statusSwitch(itemPlans.status)
                   }
                  { itemPlans.status !== 'complete' ? (
                    <WarningAttention value="необхідний ЕЦП/КЕП" classWrapper={styles.attention}>
                      <div className={styles.circleWarningGlobal}>!</div>
                    </WarningAttention>
                  ) : null }

                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
