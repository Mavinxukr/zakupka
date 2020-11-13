import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  companyData: null,
  isDataReceived: false,
  error: null,
};

export const companyType = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.companyType.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.companyType.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        companyData: action.body,
      };

    case actionTypes.companyType.error:
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
