import { ForwardedRef, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Layout = styled.div(({ theme }) => {
  return {
    width: '100%',
    height: `calc(100% - ${theme.layout.elements.toolbarHeight}px)`,
    minHeight: theme.layout.elements.minWindowHeight,

    color: theme.color.text.zero,
    paddingTop: theme.layout.elements.toolbarHeight,
    background: theme.color.fill.zero,

    fontFamily: theme.font.family.default,
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

