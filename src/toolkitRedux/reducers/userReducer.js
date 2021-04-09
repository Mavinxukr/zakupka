import {
  createSlice,
  createAction
} from '@reduxjs/toolkit';

const initialState = {
  userLoading: false,
  currentUser: null,
  userError: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRequest: (state) => ({ ...state, userLoading: true }),
    userFailure: (state, { payload }) => ({ ...state, userLoading: false, userError: payload }),
    userFailureDelete: (state) => ({ ...state, userError: null }),
    userSuccess: (state, { payload }) => ({ ...state, currentUser: payload, userLoading: false, userError: null }),
    logoutUser: () => ({ ...initialState }),
  }
});

export const fetchUser = createAction('FETCH_USER', (payload) => ({
  payload
}));

export const fetchUserToken = createAction('FETCH_USER_TOKEN');

export default userSlice.reducer;

export const {
  logoutUser,
  userRequest,
  userFailure,
  userSuccess,
  userFailureDelete
} = userSlice.actions;


