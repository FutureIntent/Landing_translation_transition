import { ReactElement } from 'react';

import Container from '@components/atoms/Container';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

const OtherWorks = ({ data }: any): ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const test = data;

    return (
        <Section>
            <Container>
                <Typography variant="h2" color="light.greyLight" textAlign="center">
                    Other works
                </Typography>
            </Container>
        </Section>
    );
};

export default OtherWorks;
