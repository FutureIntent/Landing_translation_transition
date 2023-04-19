import {graphql, useStaticQuery} from "gatsby";
import Box from "@components/atoms/Box";
// eslint-disable-next-line import/no-extraneous-dependencies
import BackgroundImage from "gatsby-background-image";
import Container from "@components/atoms/Container";
import {getClampValue} from "@utils/helpers";
import Typography from "@components/atoms/Typography";
import Section from "@components/atoms/Section";
import styled from "styled-components";
import mediaQueries from "@theme/configs/mediaQueries";

const Wrapper = styled.div`
    height: 440px;
    width: 100%;

    ${mediaQueries.tablet} {
        height: 1080px;
    }

    .background-image {
        height: 100%;
        width: 100%;

        &:after {
            opacity: 0.5!important;
        }
    }
`;

const HeroBanner = () => {
    const data = useStaticQuery(
        graphql`
            query {
                img: file(relativePath: { eq: "OurOffice.png" }) {
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
        <Section fullScreen={false}>
            <Wrapper>
                <BackgroundImage className="background-image" fluid={bgImg}>
                    <Container>
                        <Box pl={{ _: '0', tablet: getClampValue('0px', '140px') }} pt={{ _: 130, tablet: 360 }} display="flex" alignItems="center" flexDirection="column">
                            <div>
                                <Typography variant="h4" color="light.greyDark" transformText="uppercase">Our home</Typography>

                                <Typography variant="h2" color="commons.white" transformText="uppercase">
                                    <Typography as="span" variant="h2" color="light.grey" transformText="uppercase">Where</Typography> the journey starts
                                </Typography>
                            </div>
                        </Box>
                    </Container>
                </BackgroundImage>
            </Wrapper>
        </Section>
    )
}

export default HeroBanner;
