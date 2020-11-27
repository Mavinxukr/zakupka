import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  createdTender: null,
  isDataReceived: false,
  error: null,
};

export const createTender = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.createTender.request:
    case actionTypes.createTender.update:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.createTender.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        createdTender: action.body,
      };

    case actionTypes.createTender.error:
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
