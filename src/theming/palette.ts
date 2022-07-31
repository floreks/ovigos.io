import { HexColor } from '@theming/color';
import dark from './dark/palette';
import light from './light/palette';

/** PRIVATE **/
const palettes: { [key: string]: Palette } = {
  Dark: dark,
  Light: light,
};

interface PaletteColor {
  [key: number]: HexColor;
}

/** TYPES **/
export type ID = keyof typeof palettes;

/** INTERFACES **/
export interface Palette {
  background: PaletteColor;
  text: PaletteColor;
  primary: PaletteColor;
  secondary: PaletteColor;
  tertiary: PaletteColor;
}

/** CONSTANTS **/
export const REGISTERED: Array<ID> = Object.keys(palettes);
export const DEFAULT: ID = 'Dark';

/** FUNCTIONS **/
export const resolvePalette = (id: ID): Palette =>  palettes[id];
