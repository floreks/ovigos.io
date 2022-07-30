import { defaultPaletteID, PaletteIdentifier } from '@theming/theme';
import { createContext, Dispatch } from 'react';

const PaletteContext = createContext<{ palette: PaletteIdentifier, setPalette: Dispatch<PaletteIdentifier> }>({
  palette: defaultPaletteID,
  setPalette: () => {},
});

export default PaletteContext;
