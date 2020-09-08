import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  tendersData: null,
  isDataReceived: false,
  error: null,
};

export const tenders = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.tenders.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.tenders.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        tendersData: action.body,
      };

    case actionTypes.tenders.error:
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
