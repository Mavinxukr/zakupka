import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  myPlansData: null,
  isDataReceived: false,
  error: null,
};

export const plansByCompany = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.plansByCompany.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.plansByCompany.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        myPlansData: action.body,
      };

    case actionTypes.plansByCompany.error:
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
