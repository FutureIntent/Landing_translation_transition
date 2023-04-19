export const getClampValue = (min: string, max: string, container = '1830px'): string =>
    `clamp(${min}, calc(${parseInt(max, 10)} / ${parseInt(container, 10)} * 100vw) , ${max})`;

export const hexToRGB = (hex: string): string => {
    if (hex.length === 3) {
        return `${parseInt(hex[1], 16)}, ${parseInt(hex[2], 16)}, ${parseInt(hex[3], 16)}`;
    }

    return `${parseInt(`${hex[1]}${hex[2]}`, 16)}, ${parseInt(`${hex[3]}${hex[4]}`, 16)}, ${parseInt(
        `${hex[5]}${hex[6]}`,
        16,
    )}`;
};

export const componentToHex = (c: number): string => {
    const hex = c.toString(16);

    return hex.length === 1 ? `0${hex}` : `${hex}`;
};

export const rgbToHex = (r: number, g: number, b: number): string =>
    `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
