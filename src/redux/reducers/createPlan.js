import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  createdPlan: null,
  isDataReceived: false,
  error: null,
};

export const createPlan = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.createPlan.request:
    case actionTypes.createPlan.update:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.createPlan.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        createdPlan: action.body,
      };

    case actionTypes.createPlan.error:
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
