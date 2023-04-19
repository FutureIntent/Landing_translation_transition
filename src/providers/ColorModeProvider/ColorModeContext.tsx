import { createContext } from 'react';

export enum ColorMode {
    light = 'light',
    dark = 'dark',
}

export type ColorModeContextType = {
    colorMode: ColorMode;
    setColorMode: (ColorMode: ColorMode) => void;
};

const ColorModeContext = createContext<ColorModeContextType>({
    colorMode: ColorMode.light,
    setColorMode: () => {},
});

export default ColorModeContext;
