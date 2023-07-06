import { RootState } from '@/app/store';

export const selectTheme = (state: RootState) => state.theme.theme;
