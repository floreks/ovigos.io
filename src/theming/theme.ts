import { default as defaultPalette } from './default/palette';
import { default as nanoPalette } from './nano/palette';

export type PaletteIdentifier = 'Default' | 'Nano';
type PaletteColor = { [key: number]: string };
type Palette = { [key in keyof typeof defaultPalette]: PaletteColor };

const identifierToPalette: { [key in PaletteIdentifier]: Palette } = {
  Default: defaultPalette,
  Nano: nanoPalette,
};

const spacing = {
  xsmall: 2,
  small: 4,
  medium: 8,
  large: 16,
  xlarge: 32,
};

const borderRadius = {
  small: 2,
  medium: 3,
  large: 6,
};

const fontSize = {
  caption: '10px',
  body: '12px',
  subtitle: '14px',
  title: '16px',
};

const theme = {
  spacing,
  borderRadius,
  fontSize,
};

const fillColor = (palette: Palette) => ({
  fillZero: palette.background[950],
  fillZeroHover: palette.background[900],
  fillOne: palette.background[850],
  fillOneHover: palette.background[800],
});

export const defaultPaletteID: PaletteIdentifier = 'Default';

export type Theme = typeof theme & Palette;

export default (id: PaletteIdentifier = 'Default'): Theme => {
  const palette = identifierToPalette[id];
  const color = {
    ...fillColor(palette),
  };

  return {
    ...theme,
    ...palette,
    ...color,
  };
};
