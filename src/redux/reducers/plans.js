import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  plansData: null,
  isDataReceived: false,
  error: null,
};

export const plans = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.plans.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.plans.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        plansData: action.body,
      };

    case actionTypes.plans.error:
      return {
        ...state,
        isFetch: false,
        isDataReceived: false,
        error: action.error,
      };

    default:
      return state;
  }
};
