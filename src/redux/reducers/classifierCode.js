import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  classifierData: null,
  isDataReceived: false,
  error: null,
};

export const classifierCode = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.classifierCode.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.classifierCode.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        classifierData: action.body,
      };

    case actionTypes.classifierCode.error:
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
