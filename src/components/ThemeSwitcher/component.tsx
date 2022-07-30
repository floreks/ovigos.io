import PaletteContext from '@contexts/PaletteContext';
import { PaletteIdentifier } from '@theming/theme';
import { ForwardedRef, forwardRef, useContext } from 'react';
import styled from 'styled-components';

interface ThemeSwitcherProps {
  values?: Array<PaletteIdentifier>;
}

const ThemeSwitcher = styled.div(() => {
  return {
    display: 'flex',
    maxWidth: '200px',
    width: '150px',

    gap: 8,
    padding: 4,

    color: 'white',

    '> p': {
      border: '1px solid black',
    },
  };
});

function Ref({ values, ...props }: ThemeSwitcherProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element {
  const { setPalette } = useContext(PaletteContext);
  const themes = values || ['Default', 'Nano'] as Array<PaletteIdentifier>;

  return (
    <ThemeSwitcher
      ref={ref}
      {...props}
    >
      {themes.map(theme => (
        <p key={theme} onClick={() => setPalette(theme)}>{ theme }</p>
      ))}
    </ThemeSwitcher>
  );
}

export default forwardRef(Ref);

