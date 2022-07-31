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
  zeroHover: palette.background[700],
  one: palette.background[750],
  oneHover: palette.background[600],
  two: palette.background[550],
  twoHover: palette.background[500],
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
  zero: palette.text[100],
  zeroHover: palette.background[50],
  zeroDisabled: palette.background[650],
  one: palette.background[300],
  oneHover: palette.background[200],
  oneDisabled: palette.background[850],
  two: palette.background[400],
  twoHover: palette.background[300],
  twoDisabled: palette.background[850],
});

interface Border {
  zero: HexColor;
  zeroHover: HexColor;
  one: HexColor;
  oneHover: HexColor;
  two: HexColor;
  twoHover: HexColor;
}

const border = (palette: Palette): Border => ({
  zero: palette.background[700],
  zeroHover: palette.background[750],
  one: palette.background[650],
  oneHover: palette.background[600],
  two: palette.background[550],
  twoHover: palette.background[500],
});

interface Scrollbar {
  thumb: HexColor;
}

const scrollbar = (palette: Palette): Scrollbar => ({
  thumb: palette.tertiary[200],
});

/** TYPES **/
export type HexColor = string;

/** INTERFACES **/
export interface Color {
  fill: Fill;
  text: Text;
  border: Border;
  scrollbar: Scrollbar;
}

/** FUNCTIONS **/
export const resolveColor = (palette: Palette): Color  => ({
  fill: fill(palette),
  text: text(palette),
  border: border(palette),
  scrollbar: scrollbar(palette),
});
