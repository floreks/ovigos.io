import { Layout, Toolbar } from '@components';
import theme from '@theming/theme';
import { ThemeProvider } from 'styled-components';

export default function Proxy() {
  const t = theme();

  return (
    <ThemeProvider theme={t}>
      <Layout>
        <Toolbar></Toolbar>
        Lorem ipsum dolor
      </Layout>
    </ThemeProvider>
  );
}
