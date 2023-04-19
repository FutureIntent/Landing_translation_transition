import { cloneElement, ReactElement } from 'react';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    ${mediaQueries.tablet} {
        flex-direction: row;
    }
`;

const MethodologyTab = ({
    poster,
    heading,
    text,
}: {
    poster: ReactElement;
    heading: string;
    text: string;
}) => (
    <Wrapper>
        {cloneElement(poster, {
            style: { flex: 1, aspectRatio: '735 / 374' },
        })}
        <Box width={{ _: '100%', tablet: '40%' }} maxWidth={{ _: '435px', xxl: '40%' }}>
            <Typography as="p" variant="accent" color="commons.white" mb="1rem">
                {heading}
            </Typography>
            <Typography variant="paragraph" color="light.grey">
                {text}
            </Typography>
        </Box>
    </Wrapper>
);

export default MethodologyTab;
