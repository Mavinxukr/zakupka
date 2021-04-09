import {
  createSlice,
  createAction
} from '@reduxjs/toolkit';

const initialState = {
  registrationError: null,
}

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registrationFailure: (state, { payload }) => ({ ...state, registrationError: payload }),
    registrationFailureDelete: (state) => ({ ...state, registrationError: null }),
  }
})

export const registrationRequest = createAction('REGISTRATION', (payload) => ({
  payload
}));

export const {
  registrationFailure,
  registrationFailureDelete
} = registrationSlice.actions

export default registrationSlice.reducer