import { Layout, Toolbar } from '@components';
import PaletteContext from '@contexts/PaletteContext';
import theme, { defaultPaletteID } from '@theming/theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function Proxy() {
  const [ palette, setPalette ] = useState(defaultPaletteID);
  const t = theme(palette);

  console.log(palette);

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      <ThemeProvider theme={t}>
        <Layout>
          <Toolbar></Toolbar>
          Lorem ipsum dolor
        </Layout>
      </ThemeProvider>
    </PaletteContext.Provider>
  );
}
