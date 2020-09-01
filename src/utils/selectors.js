import { createSelector } from 'reselect';

export const isAuthSelector = createSelector(
  (state) => state.currentUser.isAuth,
  (isAuth) => isAuth,
);

export const currentUserDataSelector = createSelector(
  (state) => state.currentUser.currentUser,
  (currentUser) => currentUser,
);
