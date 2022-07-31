import * as Palette from '@theming/palette';
import { createContext, Dispatch } from 'react';

const PaletteContext = createContext<{ palette: Palette.ID, setPalette: Dispatch<Palette.ID> }>({
  palette: Palette.DEFAULT,
  setPalette: () => {},
});

export default PaletteContext;
