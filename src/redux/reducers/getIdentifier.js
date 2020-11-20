import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  countryData: null,
  isCountyDataReceived: false,
  error: null,
};

export const getIdentifier = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.country.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.country.success:
      return {
        ...state,
        isFetch: false,
        isCountyDataReceived: true,
        countryData: action.body,
      };

    case actionTypes.country.error:
      return {
        ...state,
        isFetch: false,
        isCountyDataReceived: false,
        error: action.error,
      };

    default:
      return state;
  }
};
