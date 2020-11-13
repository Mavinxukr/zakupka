import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  tendersData: null,
  isDataReceived: false,
  error: null,
};

export const tendersType = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.tendersType.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.tendersType.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        tendersData: action.body,
      };

    case actionTypes.tendersType.error:
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
