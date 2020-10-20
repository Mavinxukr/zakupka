import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  planData: null,
  isDataReceived: false,
  error: null,
};

export const onePlan = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.onePlan.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.onePlan.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        planData: action.body,
      };

    case actionTypes.onePlan.error:
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
