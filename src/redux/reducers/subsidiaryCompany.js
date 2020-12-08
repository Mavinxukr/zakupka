import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  subsidiaryData: null,
  isDataReceived: false,
  error: null,
};

export const subsidiaryCompany = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.subsidiaryCompany.request:
    case actionTypes.subsidiaryCompany.delete:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.subsidiaryCompany.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        subsidiaryData: action.body,
      };

    case actionTypes.subsidiaryCompany.error:
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
