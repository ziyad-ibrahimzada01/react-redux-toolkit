import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    password: ''
  },
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    submitForm: (state) => {
      console.log('Form Data:', state);
    }
  }
});

export const { updateForm, submitForm } = formSlice.actions;

export default formSlice.reducer;
