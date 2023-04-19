import { useMemo, ReactElement, ReactNode, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import ColorModeContext, { ColorMode } from './ColorModeContext';

export const THEME = 'theme';
export const AUTO_MODE = 'auto';

export type ColorModes =
    | string
    | {
          [keyof in ColorMode]: string;
      };

type ColorModeProviderProps = {
    children: (color: ColorMode) => ReactNode;
};

const ColorModeProvider = ({ children }: ColorModeProviderProps): ReactElement => {
    const [cookies, setCookie] = useCookies([THEME]);
    const [colorMode, setColorModeState] = useState<ColorMode>(ColorMode.light);

    const mediaQuery = useMemo(
        () =>
            typeof window !== 'undefined'
                ? window.matchMedia('(prefers-color-scheme: light)')
                : undefined,
        [],
    );

    const setColorMode = (newColorMode: ColorMode) => {
        if (cookies[THEME] !== AUTO_MODE) {
            setCookie(THEME, newColorMode);
        }
        setColorModeState(newColorMode);
    };

    const resolveThemeQuery = () => {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                setColorMode(ColorMode.light);
            } else {
                setColorMode(ColorMode.dark);
            }
        }
    };

    useEffect(() => {
        if (cookies.theme) {
            if (cookies.theme === AUTO_MODE) {
                resolveThemeQuery();
                mediaQuery?.addEventListener('change', resolveThemeQuery);
            } else {
                setColorMode(cookies.theme as ColorMode);
                mediaQuery?.removeEventListener('change', resolveThemeQuery);
            }
        }

        return () => mediaQuery?.removeEventListener('change', resolveThemeQuery);
    }, [cookies.theme]);

    return (
        <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
            {children(colorMode)}
        </ColorModeContext.Provider>
    );
};

export default ColorModeProvider;
