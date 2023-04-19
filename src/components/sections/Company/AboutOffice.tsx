import { StaticImage } from 'gatsby-plugin-image';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Section from '@components/atoms/Section';

import AboutOfficeBanner from '@components/molecules/AboutOfficeBanner';

const AboutOffice = () => (
    <Section fullScreen={false}>
        <Container maxWidth="1520px">
            <Box mb={120}>
                <AboutOfficeBanner
                    preTitle="EST. 2018"
                    title="Advertimo"
                    description={
                        <>
                            We are the company that works in IT industry. We create our own
                            high-quality solutions and also share our expertise for our third-party
                            clients and partners.
                            <br />
                            <br />
                            But first of all, Advertimo is the team of inspired and talented
                            visionaries, strategists, developers and user experience designers.
                        </>
                    }
                >
                    <StaticImage
                        src="../../../assets/images/company/advertimo_office.png"
                        alt="advertimo office"
                    />
                </AboutOfficeBanner>
            </Box>
            <Box mb={180}>
                <AboutOfficeBanner
                    reverse
                    preTitle="Located in Riga, Latvia"
                    title="Working with west & east"
                    description="We decided to expand our competence outside our local projects to unleash our passion to create and launch more possible projects, by exploring new horizons and using our experience, knowledge and data to create high quality products for our third-party partners. We strongly believe it will help our team grow and also give an excellent result to our customers. One of our main aims is to make Advertimo a quality standard for entire industry. "
                >
                    <StaticImage
                        src="../../../assets/images/company/riga_overview.png"
                        alt="Riga overview"
                    />
                </AboutOfficeBanner>
            </Box>
        </Container>
    </Section>
);

export default AboutOffice;
