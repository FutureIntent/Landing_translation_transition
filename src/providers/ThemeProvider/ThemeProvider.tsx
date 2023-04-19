import { ReactElement, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import theme from '@theme/configs';

import ColorModeProvider from '../ColorModeProvider';

const ThemeProvider = ({ children }: { children: ReactNode }): ReactElement => (
    <ColorModeProvider>
        {(colorMode) => (
            <StyledThemeProvider theme={{ ...theme, mode: colorMode }}>
                <>{children}</>
            </StyledThemeProvider>
        )}
    </ColorModeProvider>
);

export default ThemeProvider;
