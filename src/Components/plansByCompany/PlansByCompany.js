import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'js-cookie';
import { NavLink } from 'react-router-dom';
import styles from './PlansByCompany.scss';
import { plansByCompanyReceivedSelector, plansByCompanySelector } from '../../utils/selectors';
import { plansByCompany } from '../../redux/actions/plansByCompany';
import Spinner from '../shared/Spinner';
import WarningAttention from '../shared/Warnings/WarningAttention/WarningAttention';
import Paginate from '../shared/Paginate/Paginate';

const PlansByCompany = () => {
  const dispatch = useDispatch();
  const plansData = useSelector(plansByCompanySelector);
  const isDataReceived = useSelector(plansByCompanyReceivedSelector);

  useEffect(() => {
    dispatch(plansByCompany({}, cookies.get('tokenProzorro')));
  }, []);

  if (!isDataReceived) {
    return <Spinner />;
  }

  console.log(isDataReceived, plansData);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>Мої плани закупівель </h2>
        <div className={styles.titleTable}>
          <h3 className={styles.smallTitleGlobal}>Назва плану</h3>
          <h3 className={styles.smallTitleGlobal}>Планова сума закупівлі</h3>
          <h3 className={styles.smallTitleGlobal}>Початок процедури</h3>
          <h3 className={styles.smallTitleGlobal}>Статус</h3>
        </div>
        {plansData.data.data.map((item) => {
          const d = new Date(item.start_tenderPeriod);
          const itemPlans = JSON.parse(item.plans);
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
                    <span
                      className={styles.smallBoldTextGlobal}
                    >{itemPlans.procuringEntity.identifier.legalName}
                    </span>
                  </div>
                </div>
                <span className={styles.smallBoldTextGlobal}>{item.expected_cost}грн.</span>
                <span>{d.toLocaleDateString('uk-UA', options)}</span>
                <div>
                  {
                    statusSwitch(itemPlans.status)
                  }
                  {itemPlans.status !== 'complete' ? (
                    <WarningAttention value="необхідний ЕЦП/КЕП" classWrapper={styles.attention}>
                      <div className={styles.circleWarningGlobal}>!</div>
                    </WarningAttention>
                  ) : null}

                </div>
              </div>
              <NavLink
                to="cancel_my_plan"
                className={styles.buttonMainGlobal}
              >
                Змінити план
              </NavLink>
              <NavLink
                to="cancel_my_plan"
                className={styles.buttonGlobal}
              >
                Скасувати процедуру
              </NavLink>
            </div>
          );
        })}
        <Paginate />
      </div>
    </div>
  );
};

export default PlansByCompany;
