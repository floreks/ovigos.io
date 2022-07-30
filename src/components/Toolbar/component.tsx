import { forwardRef } from 'react';
import styled from 'styled-components';

const Toolbar = styled.div(({ theme }) => {
  console.log(theme);
  return {
    width: '100%',
    height: '56px',
    position: 'fixed',
    top: 0,

    background: theme.background[600],
    opacity: .85,
    transition: 'opacity 100ms ease-in',

    ':hover': {
      background: theme.background[550],
      opacity: 1,
    },
  };
});

function Ref(): JSX.Element {
  return (<Toolbar></Toolbar>);
}

export default forwardRef(Ref);
