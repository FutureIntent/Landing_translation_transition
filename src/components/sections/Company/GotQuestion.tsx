import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Form from '@components/atoms/Form/Form';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import ActionButton from '@components/molecules/ActionButton';

const GotQuestion = () => (
    <Section fullScreen={false}>
        <Container maxWidth="1520px">
            <Box
                display="flex"
                flexDirection={{ _: 'column', tablet: 'row' }}
                gridGap={120}
                mb="calc(180px + var(--footer-height))"
            >
                <Box width={{ _: '100%', tablet: '50%' }}>
                    <Typography variant="h2" color="commons.white" transformText="uppercase">
                        Want to join us?
                    </Typography>
                    <Typography as="p" variant="accent" color="light.grey" mb={30}>
                        Browse available positions here:
                    </Typography>
                    <ActionButton label="Advertimo career" to="/careers" withArrow />
                </Box>
                <Box width={{ _: '100%', tablet: '50%' }}>
                    <Typography
                        variant="h2"
                        color="commons.white"
                        transformText="uppercase"
                        mb={25}
                    >
                        Got questions?
                    </Typography>
                    <Form />
                </Box>
            </Box>
        </Container>
    </Section>
);

export default GotQuestion;
