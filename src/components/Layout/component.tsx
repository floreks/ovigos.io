import { ForwardedRef, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Layout = styled.div(({ theme }) => {
  return {
    width: '100%',
    height: '100vh',
    overflow: 'overlay',

    color: theme.color.text.zero,
    backgroundColor: theme.color.fill.zero,

    fontFamily: theme.font.family.default,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.layout.spacing.large,
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

