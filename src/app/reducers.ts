import { api } from '@/app/api';

import theme from './theme/services/theme.slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  theme,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
