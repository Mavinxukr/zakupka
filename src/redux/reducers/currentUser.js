import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  currentUser: null,
  isDataReceived: false,
  error: null,
};

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.currentUser.request:
    case actionTypes.currentUser.update:
    case actionTypes.currentUser.delete:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.currentUser.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        currentUser: action.body,
      };

    case actionTypes.currentUser.error:
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
