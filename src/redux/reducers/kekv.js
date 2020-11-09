import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  KEKVData: null,
  isDataReceived: false,
  error: null,
};

export const kekv = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.kekv.request:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.kekv.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        KEKVData: action.body,
      };

    case actionTypes.kekv.error:
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
