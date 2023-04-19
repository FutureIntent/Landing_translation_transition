import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Typography from '@components/atoms/Typography';

const DesignStage = ({ data }: any): ReactElement => (
    <section>
        <Container>
            <Box
                mt={180}
                mb={120}
                display="flex"
                alignItems="center"
                gridGap={50}
                flexDirection={{ _: 'column', tablet: 'row' }}
            >
                <Box
                    flex={1}
                    width={{ _: '100%', tablet: '50%' }}
                    maxWidth={{ _: '100%', tablet: 590 }}
                >
                    <Typography variant="h4" color="light.grey" transformText="uppercase">
                        Design stage
                    </Typography>
                    <Typography variant="h2" color="light.black" mb={20} transformText="uppercase">
                        WIREFRAMING & PROTOTYPING
                    </Typography>
                    <Typography variant="paragraph" color="light.greyDark">
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
                        style={{ maxWidth: 730 }}
                    />
                </Box>
            </Box>
        </Container>
    </section>
);

export default DesignStage;
