import { Theme } from '../theming/theme';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {
  }
}
