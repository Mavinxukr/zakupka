import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  planData: null,
  isDataReceived: false,
  error: null,
};

export const moneyType = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.moneyType.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.moneyType.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        planData: action.body,
      };

    case actionTypes.moneyType.error:
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
