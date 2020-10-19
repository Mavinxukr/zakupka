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
