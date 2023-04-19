import { ReactElement, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

import ThemeProvider from '@providers/ThemeProvider';

import GlobalStyle from '@theme/GlobalStyles';
import SEO from '@theme/SEO';

import Header from '@components/templates/Header';

type LayoutProps = {
    children: ReactNode;
};

const Main = styled.main`
    min-height: calc(100vh - (var(--header-height) + var(--footer-height)));
`;

const Layout = ({ children }: LayoutProps): ReactElement => (
    <ThemeProvider>
        <>
            <GlobalStyle />
            <SEO />

            <Main>{children}</Main>
        </>
    </ThemeProvider>
);

export default Layout;