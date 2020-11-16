import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  regionsData: null,
  isDataReceived: false,
  error: null,
};

export const regions = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.regions.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.regions.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        regionsData: action.body,
      };

    case actionTypes.regions.error:
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
