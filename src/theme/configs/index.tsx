import type { Theme as StyledSystemTheme } from 'styled-system';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import breakpoints from './breakpoints';
import colors from './colors';
import mediaQueries from './mediaQueries';
import shadows from './shadows';
import space from './space';
import zIndices from './zIndices';

export interface Theme extends StyledSystemTheme {
    mode: ColorMode;
    colors: typeof colors;
    zIndices: typeof zIndices;
    space: typeof space;
    mediaQueries: typeof mediaQueries;
    shadows: typeof shadows;
}

const theme: Theme = {
    mode: ColorMode.light,
    colors,
    breakpoints,
    space,
    mediaQueries,
    zIndices,
    shadows,
};

export default theme;
