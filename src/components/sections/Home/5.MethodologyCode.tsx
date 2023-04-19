import Section from '@components/atoms/Section';
import Container from "@components/atoms/Container";
import Box from "@components/atoms/Box";
import Strategy from "@components/organisms/Methodology/Strategy";

const MethodologyCode = () => (
    <Section >
        <Container>
            <Box width="100vw" height="100%" display="flex" justifyContent="center" alignItems="center">
                <Strategy />
            </Box>
        </Container>
    </Section>
);

export default MethodologyCode;
