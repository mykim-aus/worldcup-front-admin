import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LanguageState {
  lang: string;
}

const initialState: LanguageState = {
  lang: 'Language',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLangState: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLangState } = languageSlice.actions;

export default languageSlice.reducer;
