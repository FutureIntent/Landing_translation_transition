import { props as defaultProps } from '@styled-system/should-forward-prop';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';

const Container = styled(Box)
    .withConfig({
        shouldForwardProp: (prop) => ![...defaultProps, 'fullHeight'].includes(String(prop)),
    })
    .attrs(
        ({
            fullHeight = true,
            maxWidth = '1920px',
            isHomePage = false,
        }: {
            fullHeight: boolean;
            maxWidth: string;
            isHomePage?: boolean;
        }) => ({
            fullHeight,
            maxWidth,
            isHomePage,
        }),
    )`
    height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
    margin: 0 auto;
    max-width: ${({ maxWidth }) => maxWidth};
    padding: 0 var(--container-padding-x) ;
    position: relative;
    width: 100%;

    ${({ isHomePage }) =>
        isHomePage &&
        `
        padding: 0 var(--container-nav-space) 0 var(--container-padding-x) ;

        ${mediaQueries.tablet} {
        padding: 0 var(--container-padding-x) 0 var(--container-nav-space);
    }
    `}
`;

export default Container;
