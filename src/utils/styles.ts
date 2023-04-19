import { ColorModes } from '@providers/ColorModeProvider';

import { Theme } from '@theme/configs';
import type { Device } from '@theme/configs/breakpoints';
import { deviceList } from '@theme/configs/breakpoints';
import mediaQueries from '@theme/configs/mediaQueries';

type ResponsiveValue = string | number | null;

export const mediaQuery = (device: Device): string => mediaQueries?.[device] || mediaQueries.mobile;

export const responsiveStyleFactory = (
    breakpointsValue: { _: ResponsiveValue } & { [key in Device]?: ResponsiveValue },
): ResponsiveValue[] => {
    const styles = [breakpointsValue._];

    deviceList.forEach((device: Device) => {
        const value: ResponsiveValue = breakpointsValue[device] || null;
        styles.push(value);
    });

    return styles;
};

interface ColorVariantProps {
    color: ColorModes;
    theme: Theme;
}

export const colorVariant = ({ color, theme }: ColorVariantProps): string => {
    if (!color) {
        return `color: ${theme.colors.light.black};`;
    }

    let colorToSplit: string;

    if (typeof color === 'string') {
        colorToSplit = color;
    } else {
        colorToSplit = color[theme.mode];
    }

    if (!colorToSplit.includes('.')) {
        return `color: ${colorToSplit};`;
    }

    let colorNameKey: keyof Theme['colors'];
    let variantKey: keyof Theme['colors'][typeof colorNameKey];

    // eslint-disable-next-line prefer-const
    [colorNameKey, variantKey] = colorToSplit.split('.') as [
        keyof Theme['colors'],
        keyof Theme['colors'][typeof colorNameKey],
    ];

    return theme.colors[colorNameKey][variantKey];
};
