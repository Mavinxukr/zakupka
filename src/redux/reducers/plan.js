import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  id: null,
  planData: null,
  isDataReceived: false,
  error: null,
};

export const plan = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.plan.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.plan.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        planData: action.body,
      };

    case actionTypes.plan.error:
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
