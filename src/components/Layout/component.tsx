import { ForwardedRef, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Layout = styled.div(({ theme }) => {
  console.log(theme);
  return {
    width: '100%',
    height: 'calc(100% - 56px)',
    minHeight: '600px',

    color: 'white',
    paddingTop: '56px',
    background: theme.background[800],
  };
});

function Ref({ children, ...props }: LayoutProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element {
  return (
    <Layout ref={ref} {...props}>
      {children}
    </Layout>
  );
}

export default forwardRef(Ref);

