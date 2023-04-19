import Container from "@components/atoms/Container";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Typography from "@components/atoms/Typography";
import Box from "@components/atoms/Box";
import styled from "styled-components";

const SectionCustom = styled.section`
    display: flex;
    flex-direction: column;
`;

const HeroBanner = () => {
    const data = useStaticQuery(
        graphql`
            query {
                img: file(relativePath: { eq: "works/works_bg.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );
    const bgImg = data.img.childImageSharp.fluid || null;

    return (
        <SectionCustom>
            <BackgroundImage className="background-image" fluid={bgImg} style={{ width: '100%'}}>
                <Container>
                    <Box pl={{ _: '0', laptop: "12rem" }}>
                        <Typography variant="h1" color="commons.white" mt={200} mb={340} transformText="uppercase">
                            <Typography as="span" variant="h1" color="light.grey" transformText="uppercase">
                                OUR{' '}
                            </Typography>
                            Works
                        </Typography>
                    </Box>
                </Container>
            </BackgroundImage>
        </SectionCustom>
    )
}

export default HeroBanner;
