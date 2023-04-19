import styled from 'styled-components';
import { zIndex, ZIndexProps } from 'styled-system';

const Section = styled.section.attrs(
    ({ fullScreen = true, ...rest }: ZIndexProps & { fullScreen: boolean }) => ({
        fullScreen,
        ...rest,
    }),
)<ZIndexProps & { fullScreen: boolean }>`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: ${({ fullScreen }) => (fullScreen ? '100vh' : 'auto')};
    position: relative;
    width: 100vw;
    ${zIndex};
`;

export default Section;
