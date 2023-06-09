/* eslint-disable prefer-destructuring */

export type Device = typeof deviceList[number];

export const deviceList = [
    'mobile',
    'mobileM',
    'mobileL',
    'tablet',
    'tabletL',
    'laptopS',
    'laptop',
    'desktop',
    'xxl',
] as const;

type BreakpointsProp = Array<string> & { [key in Device]: string };

const breakpoints = [
    '320px',
    '360px',
    '568px',
    '768px',
    '1024px',
    '1140px',
    '1366px',
    '1680px',
    '1920px',
] as BreakpointsProp;

breakpoints.mobile = breakpoints[0];
breakpoints.mobileM = breakpoints[1];
breakpoints.mobileL = breakpoints[2];
breakpoints.tablet = breakpoints[3]; // tablet
breakpoints.tabletL = breakpoints[4]; // small_desk
breakpoints.laptopS = breakpoints[5];
breakpoints.laptop = breakpoints[6]; // desktop
breakpoints.desktop = breakpoints[7];
breakpoints.xxl = breakpoints[8];

export default breakpoints;
