import { ThemeSwitcher } from '@components';
import { forwardRef } from 'react';
import styled from 'styled-components';

const Toolbar = styled.div(({ theme }) => {
  return {
    width: '100%',
    minHeight: theme.layout.elements.toolbarHeight,
    position: 'sticky',
    top: 0,

    background: theme.color.fill.one,
    opacity: .95,
    boxShadow: theme.effect.shadow.default,
  };
});

function Ref(): JSX.Element {
  return (
    <Toolbar>
      <ThemeSwitcher />
    </Toolbar>
  );
}

export default forwardRef(Ref);
