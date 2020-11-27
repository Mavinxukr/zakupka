import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isFetch: false,
  editUserData: null,
  isDataReceived: false,
  error: null,
};

export const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.editUser.request:
    case actionTypes.editUser.update:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.editUser.success:
      return {
        ...state,
        isFetch: false,
        isDataReceived: true,
        editUserData: action.body,
      };

    case actionTypes.editUser.error:
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
