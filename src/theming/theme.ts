import { border } from '@theming/border';
import { Color, resolveColor } from '@theming/color';
import { font } from '@theming/font';
import * as Palette from '@theming/palette';
import { resolvePalette } from '@theming/palette';
import { layout } from '@theming/layout';

/** PRIVATE **/
const theme = {
  layout,
  border,
  font,
};

/** INTERFACES **/
export interface Theme extends Required<typeof theme> {
  color: Color
}

/** FUNCTIONS **/
export const resolveTheme = (id: Palette.ID = Palette.DEFAULT): Theme => {
  const palette = resolvePalette(id);
  const color = resolveColor(palette);

  return {
    ...theme,
    color,
  };
};
