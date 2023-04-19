import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Typography from '@components/atoms/Typography';

const Business = ({ data }: any): ReactElement => (
    <section>
        <Container>
            <Box
                mt={180}
                mb={120}
                gridGap={65}
                display="flex"
                alignItems="center"
                flexDirection={{ _: 'column', tablet: 'row' }}
            >
                <Box flex={1} width={{ _: '100%', tablet: '50%' }} maxWidth={590}>
                    <Typography variant="h4" color="light.grey">
                        Business
                    </Typography>
                    <Typography variant="h2" color="commons.white" mb={20}>
                        RESEARCH & ANALYSIS
                    </Typography>
                    <Typography variant="paragraph" color="light.grey">
                        {data.primary.description.text}
                    </Typography>
                </Box>

                <Box
                    flex={1}
                    width={{ _: '100%', tablet: '50%' }}
                    display="flex"
                    justifyContent="center"
                >
                    <GatsbyImage
                        alt={data.primary.wireframe.alt}
                        image={data.primary.wireframe.gatsbyImageData}
                    />
                </Box>
            </Box>
        </Container>
    </section>
);

export default Business;
