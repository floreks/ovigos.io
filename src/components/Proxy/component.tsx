import { Layout, Toolbar } from '@components';
import PaletteContext from '@contexts/PaletteContext';
import * as Palette from '@theming/palette';
import { resolveTheme } from '@theming/theme';
import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyled = createGlobalStyle(({ theme }) => ({
  'div#root': {
    height: '100vh',
    overflow: 'hidden',
  },

  '::-webkit-scrollbar': {
    width: '12px',
    height: '12px',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.color.scrollbar.thumb,
    borderRadius: theme.border.radius.large,
  },

  '::-webkit-scrollbar-track': {
    background: 'transparent',
  },
}));

export default function Proxy() {
  const [ palette, setPalette ] = useState(Palette.DEFAULT);

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      <ThemeProvider theme={resolveTheme(palette)}>
        <GlobalStyled />
        <Layout>
          <Toolbar></Toolbar>
          <div style={{ width: '95%', minHeight: '90%', border: '2px solid gray', borderRadius: '12px' }}></div>
          <div style={{ width: '95%', minHeight: '90%', border: '2px solid gray', borderRadius: '12px' }}></div>
        </Layout>
      </ThemeProvider>
    </PaletteContext.Provider>
  );
}
