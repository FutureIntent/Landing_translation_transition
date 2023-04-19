import { ReactNode } from 'react';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import Behance from '@components/molecules/Icons/Behance';
import LinkedInStroked from '@components/molecules/Icons/LinkedInStroked';

type Links = {
    behance?: string;
    linkedIn?: string;
};

const SpecialistCard = ({
    position,
    name,
    links,
    children,
}: {
    position: string;
    name: string;
    links?: Links;
    children: ReactNode;
}) => (
    <Box width={{ _: 240, tablet: 406, laptopS: 435 }}>
        <>
            {children}
            <Typography variant="h3" color="commons.white" mt={15}>
                {position}
            </Typography>
            <Typography variant="h4" color="light.greyLight" mt={5}>
                {name}
            </Typography>
            <Box display="flex" gridGap={10} mt={20}>
                {links?.behance && <Behance size="large3" />}
                {links?.linkedIn && <LinkedInStroked size="large3" />}
            </Box>
        </>
    </Box>
);

export default SpecialistCard;
