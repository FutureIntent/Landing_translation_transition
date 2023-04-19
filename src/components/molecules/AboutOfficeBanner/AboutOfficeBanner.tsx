import { ReactNode } from 'react';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

const AboutOfficeBanner = ({
    preTitle,
    title,
    description,
    reverse = false,
    children,
}: {
    preTitle: string;
    title: string;
    description: string | ReactNode;
    reverse?: boolean;
    children: ReactNode;
}) => (
    <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        flexDirection={reverse ? 'row-reverse' : 'row'}
        flexWrap={{ _: 'wrap', tablet: 'nowrap' }}
    >
        <Box
            width={{ _: '100%', tablet: '40%' }}
            pl={{ _: 0, tablet: reverse ? 30 : 0 }}
            pr={{ _: 0, tablet: reverse ? 0 : 30 }}
            mb={{ _: 90, tablet: 0 }}
        >
            <Typography variant="h4" color="light.grey" transformText="uppercase">
                {preTitle}
            </Typography>
            <Typography variant="h2" color="commons.white" transformText="uppercase">
                {title}
            </Typography>
            <Typography variant="paragraph" color="light.grey" mt={10}>
                {description}
            </Typography>
        </Box>
        <Box width={{ _: '100%', tablet: '60%' }}>{children}</Box>
    </Box>
);

export default AboutOfficeBanner;
