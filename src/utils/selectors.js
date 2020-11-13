import { createSelector } from 'reselect';

export const isAuthSelector = createSelector(
  (state) => state.currentUser.isAuth,
  (isAuth) => isAuth,
);

export const currentUserDataSelector = createSelector(
  (state) => state.currentUser.currentUser,
  (currentUser) => currentUser,
);

export const tendersDataSelector = createSelector(
  (state) => state.tenders.tendersData,
  (tendersData) => tendersData,
);

export const tendersDataReceivedSelector = createSelector(
  (state) => state.tenders.isDataReceived,
  (isDataReceived) => isDataReceived,
);

export const plansDataSelector = createSelector(
  (state) => state.plans.plansData,
  (plansData) => plansData,
);

export const plansDataReceivedSelector = createSelector(
  (state) => state.plans.isDataReceived,
  (isDataReceived) => isDataReceived,
);

export const planDataSelector = createSelector(
  (state) => state.onePlan.planData,
  (planData) => planData,
);

export const planDataReceivedSelector = createSelector(
  (state) => state.onePlan.isDataReceived,
  (isDataReceived) => isDataReceived,
);

export const moneyTypeDataSelector = createSelector(
  (state) => state.moneyType.moneyData,
  (moneyData) => moneyData,
);

export const moneyTypeDataReceivedSelector = createSelector(
  (state) => state.moneyType.isDataReceived,
  (isDataReceived) => isDataReceived,
);

export const classifierCodeDataSelector = createSelector(
  (state) => state.classifierCode.classifierData,
  (classifierCodeData) => classifierCodeData,
);

export const classifierCodeDataReceivedSelector = createSelector(
  (state) => state.classifierCode.isDataReceived,
  (isDataReceived) => isDataReceived,
);

export const tendersTypeDataSelector = createSelector(
  (state) => state.tendersType.tendersData,
  (tendersData) => tendersData,
);

export const tendersTypeDataReceivedSelector = createSelector(
  (state) => state.tendersType.isDataReceived,
  (isDataReceived) => isDataReceived,
);

export const companyTypeDataSelector = createSelector(
  (state) => state.companyType.companyData,
  (companyData) => companyData,
);

export const companyTypeDataReceivedSelector = createSelector(
  (state) => state.companyType.isDataReceived,
  (isDataReceived) => isDataReceived,
);
