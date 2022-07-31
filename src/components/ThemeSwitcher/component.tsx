import PaletteContext from '@contexts/PaletteContext';
import * as Palette from '@theming/palette';
import { forwardRef, useContext } from 'react';
import styled from 'styled-components';

const ThemeSwitcher = styled.div(() => {
  return {
    display: 'flex',

    gap: 8,
    padding: 4,

    color: 'white',

    '> p': {
      border: '1px solid black',
    },
  };
});

function Ref(): JSX.Element {
  const { setPalette } = useContext(PaletteContext);

  return (
    <ThemeSwitcher>
      {Palette.REGISTERED.map(theme => (
        <p key={theme} onClick={() => setPalette(theme)}>{ theme }</p>
      ))}
    </ThemeSwitcher>
  );
}

export default forwardRef(Ref);

