import { createSlice } from '@reduxjs/toolkit';

import storage from '@/lib/storage/storage.lib';

type ThemeState = {
  readonly theme: 'dark' | 'light';
};

const initialState: ThemeState = {
  theme: 'light',
};

const slice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    enableDarkMode(state) {
      state.theme = 'dark';
    },
    enableLightMode(state) {
      state.theme = 'light';
    },
  },
});

export const themeActions = slice.actions;

export default slice.reducer;
