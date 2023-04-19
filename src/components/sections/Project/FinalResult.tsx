import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ReactElement } from 'react';
import styled from 'styled-components';

import colors from '@theme/configs/colors';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Typography from '@components/atoms/Typography';

import Achievments from '@components/molecules/Icons/Achievments';
import Check from '@components/molecules/Icons/Check';
import WorksDone from '@components/molecules/Icons/WorksDone';

const CustomContainer = styled(Container)`
    padding-bottom: 400px;
    padding-top: 140px;
    position: relative;
    top: 0;

    ${mediaQueries.tablet} {
        padding-bottom: 70%;
    }
`;

const CustomSection = styled.section`
    position: relative;
`;

const GreenCheck = styled(Check)`
    background-color: ${({ theme }) => theme.colors.light.success};
    border-radius: 50%;
    box-shadow: 0 6px 16px rgba(43, 233, 187, 0.4);
    margin-right: 10px;
    padding: 5px;
`;

const FinalResult = ({ data, worksDone, achievements }: any): ReactElement => {
    const { isTablet } = useBreakpoint();

    return (
        <CustomSection>
            <GatsbyImage
                alt={data.primary.cover_image.alt}
                image={
                    isTablet
                        ? data.primary.cover_image.gatsbyImageData
                        : data.primary.cover_image.thumbnails.mobile.gatsbyImageData
                }
                style={{ position: 'absolute', height: '100%', width: '100%' }}
            />
            <CustomContainer>
                <Typography
                    variant="h2"
                    color={colors.light.black}
                    transformText="uppercase"
                    textAlign="center"
                    mb={30}
                >
                    Final result
                </Typography>
                <Box display="flex" flexWrap="wrap" flexDirection={{ _: 'column', tablet: 'row' }}>
                    <Box
                        p={{ _: '20px 15px', tablet: '30px 40px' }}
                        border={{
                            _: `1px solid ${colors.light.grey}`,
                            tablet: `1px solid ${colors.light.grey}`,
                        }}
                        borderBottomColor={{ _: 'transparent', tablet: colors.light.grey }}
                        borderRightColor={{ _: colors.light.grey, tablet: 'transparent' }}
                        width={{ _: '100%', tablet: '50%' }}
                    >
                        <Box display="flex" alignItems="center" gridGap={20} mb={20}>
                            <WorksDone size="xl2" />
                            <Typography variant="h4" color="light.black" transformText="uppercase">
                                Works done
                            </Typography>
                        </Box>

                        <Box
                            display="grid"
                            gridTemplateColumns="repeat(auto-fill, minMax(250px, 1fr))"
                        >
                            {worksDone.items.map(({ works_done }: any) => (
                                <Typography
                                    key={works_done.text}
                                    variant="paragraph"
                                    color="light.black"
                                    mb={10}
                                >
                                    {works_done.text}
                                </Typography>
                            ))}
                        </Box>
                    </Box>

                    <Box
                        p={{ _: '20px 15px', tablet: '30px 40px' }}
                        border={{
                            _: `1px solid ${colors.light.grey}`,
                            tablet: `1px solid ${colors.light.grey}`,
                        }}
                        width={{ _: '100%', tablet: '50%' }}
                    >
                        <Box display="flex" alignItems="center" gridGap={20} mb={20}>
                            <Achievments size="xl2" />
                            <Typography variant="h4" color="light.black" transformText="uppercase">
                                Achievements
                            </Typography>
                        </Box>
                        <Box
                            display="grid"
                            gridTemplateColumns="repeat(auto-fill, minMax(250px, 1fr))"
                        >
                            {achievements.items.map(({ achievements: achievement }: any) => (
                                <Box key={achievement.text} display="flex" alignItems="flex-start">
                                    <GreenCheck size="medium2" />
                                    <Typography variant="paragraph" color="light.black" mb={10}>
                                        {achievement.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </CustomContainer>
        </CustomSection>
    );
};

export default FinalResult;
