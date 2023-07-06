import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    background: string;
    color: string;
    primaryColor: string;
    secondaryColor: string;
  }
}
