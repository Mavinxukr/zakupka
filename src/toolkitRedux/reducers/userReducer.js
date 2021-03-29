import {
  createSlice,
  createAction
} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: null,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoading: (state) => ({ ...state, loading: true }),
    userError: (state, { payload }) => ({ ...state, loading: false, error: payload }),
    setUser: (state, { payload }) => ({ ...state, user: payload, loading: false, error: null }),
    logoutUser: () => ({ ...initialState }),
  }
});

export const fetchUser = createAction('FETCH_USER', (payload) => ({
  payload
}));

export const fetchUserToken = createAction('FETCH_USER_TOKEN');

export default userSlice.reducer;

export const { setUser, userError, userLoading, logoutUser } = userSlice.actions;


