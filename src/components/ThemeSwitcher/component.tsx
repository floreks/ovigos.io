import PaletteContext from '@contexts/PaletteContext';
import * as Palette from '@theming/palette';
import { forwardRef, useContext } from 'react';
import styled from 'styled-components';

const ThemeSwitcher = styled.div(( ) => {
  return {
    display: 'flex',

    gap: 8,
    padding: 4,

    '> p': {
      // padding: theme.layout.spacing.small,
      // backgroundColor: theme.color.fill.two,
      // borderRadius: theme.border.radius.medium,
      // borderWidth: theme.border.width.medium,
      // borderColor: theme.color.border.zero,
      // borderStyle: 'solid',
      cursor: 'pointer',
    },
  };
});

function Ref(): JSX.Element {
  const { setPalette } = useContext(PaletteContext);

  return (
    <ThemeSwitcher>
      {Palette.REGISTERED.map(theme => (
        <p key={theme} onClick={() => setPalette(theme)}></p>
      ))}
    </ThemeSwitcher>
  );
}

export default forwardRef(Ref);

