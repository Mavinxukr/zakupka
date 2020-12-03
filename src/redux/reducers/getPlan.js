import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  planUpdate: null,
  isDataReceived: false,
  error: null,
};

export const getPlan = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getPlan.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.getPlan.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        planUpdate: action.body,
      };

    case actionTypes.getPlan.error:
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
