import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  classification: null,
  isDataReceived: false,
  error: null,
};

export const classification = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.classification.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.classification.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        classification: action.body,
      };

    case actionTypes.classification.error:
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
