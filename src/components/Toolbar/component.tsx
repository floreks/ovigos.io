import { ThemeSwitcher } from '@components';
import { forwardRef } from 'react';
import styled from 'styled-components';

const Toolbar = styled.div(({ theme }) => {
  return {
    width: '100%',
    height: theme.layout.elements.toolbarHeight,
    position: 'fixed',
    top: 0,

    background: theme.color.fill.one,
    opacity: .85,
    transition: 'opacity 100ms ease-in',

    ':hover': {
      background: theme.color.fill.oneHover,
      opacity: 1,
    },
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
