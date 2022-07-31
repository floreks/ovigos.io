import { Palette } from '@theming/palette';

/** PRIVATE **/
interface Fill {
  zero: HexColor;
  zeroHover: HexColor;
  one: HexColor;
  oneHover: HexColor;
  two: HexColor;
  twoHover: HexColor;
}

const fill = (palette: Palette): Fill => ({
  zero: palette.background[850],
  zeroHover: palette.background[800],
  one: palette.background[750],
  oneHover: palette.background[700],
  two: palette.background[650],
  twoHover: palette.background[600],
});

interface Text {
  zero: HexColor;
  zeroHover: HexColor;
  zeroDisabled: HexColor;
  one: HexColor;
  oneHover: HexColor;
  oneDisabled: HexColor;
  two: HexColor;
  twoHover: HexColor;
  twoDisabled: HexColor;
}

const text = (palette: Palette): Text => ({
  zero: palette.text[200],
  zeroHover: palette.background[100],
  zeroDisabled: palette.background[650],
  one: palette.background[300],
  oneHover: palette.background[200],
  oneDisabled: palette.background[850],
  two: palette.background[400],
  twoHover: palette.background[300],
  twoDisabled: palette.background[850],
});

/** TYPES **/
export type HexColor = string;

/** INTERFACES **/
export interface Color {
  fill: Fill;
  text: Text;
}

/** FUNCTIONS **/
export const resolveColor = (palette: Palette): Color  => ({
  fill: fill(palette),
  text: text(palette),
});
