import { Layout, Toolbar } from '@components';
import PaletteContext from '@contexts/PaletteContext';
import * as Palette from '@theming/palette';
import { resolveTheme } from '@theming/theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function Proxy() {
  const [ palette, setPalette ] = useState(Palette.DEFAULT);

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      <ThemeProvider theme={resolveTheme(palette)}>
        <Layout>
          <Toolbar></Toolbar>
          Lorem ipsum dolor
        </Layout>
      </ThemeProvider>
    </PaletteContext.Provider>
  );
}
