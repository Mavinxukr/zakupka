import { createSelector } from 'reselect';

export const isAuthSelector = createSelector(
  (state) => state.currentUser.isAuth,
  (isAuth) => isAuth
);

export const currentUserDataSelector = createSelector(
  (state) => state.currentUser.currentUser,
  (currentUser) => currentUser
);

export const currentUserReceivedSelector = createSelector(
  (state) => state.currentUser.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const tendersDataSelector = createSelector(
  (state) => state.tenders.tendersData,
  (tendersData) => tendersData
);

export const tendersDataReceivedSelector = createSelector(
  (state) => state.tenders.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const plansDataSelector = createSelector(
  (state) => state.plans.plansData,
  (plansData) => plansData
);

export const plansDataReceivedSelector = createSelector(
  (state) => state.plans.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const planDataSelector = createSelector(
  (state) => state.onePlan.planData,
  (planData) => planData
);

export const planDataReceivedSelector = createSelector(
  (state) => state.onePlan.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const moneyTypeDataSelector = createSelector(
  (state) => state.moneyType.moneyData,
  (moneyData) => moneyData
);

export const moneyTypeDataReceivedSelector = createSelector(
  (state) => state.moneyType.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const classificationSelector = createSelector(
  (state) => state.classification.classification,
  (classification) => classification
);

export const classificationDataReceivedSelector = createSelector(
  (state) => state.classification.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const classifierCodeDataSelector = createSelector(
  (state) => state.classifierCode.classifierData,
  (classifierCodeData) => classifierCodeData
);

export const classifierCodeDataReceivedSelector = createSelector(
  (state) => state.classifierCode.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const tendersTypeDataSelector = createSelector(
  (state) => state.tendersType.tendersData,
  (tendersData) => tendersData
);

export const tendersTypeDataReceivedSelector = createSelector(
  (state) => state.tendersType.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const companyTypeDataSelector = createSelector(
  (state) => state.companyType.companyData,
  (companyData) => companyData
);

export const companyTypeDataReceivedSelector = createSelector(
  (state) => state.companyType.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const regionsDataSelector = createSelector(
  (state) => state.regions.regionsData,
  (regionsData) => regionsData
);

export const regionsDataReceivedSelector = createSelector(
  (state) => state.regions.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const countryDataSelector = createSelector(
  (state) => state.getIdentifier.countryData,
  (countryData) => countryData
);

export const countryDataReceivedSelector = createSelector(
  (state) => state.getIdentifier.isCountyDataReceived,
  (isDataReceived) => isDataReceived
);

export const createPlanSelector = createSelector(
  (state) => state.createPlan.createdPlan,
  (createdPlan) => createdPlan
);

export const createPlanReceivedSelector = createSelector(
  (state) => state.createPlan.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const createTenderSelector = createSelector(
  (state) => state.createTender.createdTender,
  (createdPlan) => createdPlan
);

export const createTenderReceivedSelector = createSelector(
  (state) => state.createTender.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const plansByCompanySelector = createSelector(
  (state) => state.plansByCompany.myPlansData,
  (myPlansData) => myPlansData
);

export const plansByCompanyReceivedSelector = createSelector(
  (state) => state.plansByCompany.isDataReceived,
  (isDataReceived) => isDataReceived
);

export const getPlanSelector = createSelector(
  (state) => state.getPlan.planUpdate,
  (planUpdate) => planUpdate
);

export const getPlanReceivedSelector = createSelector(
  (state) => state.getPlan.isDataReceived,
  (isDataReceived) => isDataReceived
);
