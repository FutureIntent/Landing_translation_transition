import { ReactElement } from 'react';

import colors from '@theme/configs/colors';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Typography from '@components/atoms/Typography';

import Computer from '@components/molecules/Icons/Computer';
import Soldiers from '@components/molecules/Icons/Soldiers';

const Solution = ({ specialists, technologies }: any): ReactElement => (
    <section>
        <Container>
            <Typography
                variant="h2"
                textAlign="center"
                color="light.greyLight"
                transformText="uppercase"
                mb={50}
            >
                Solution
            </Typography>

            <Box
                display="flex"
                flexWrap="wrap"
                pb={180}
                flexDirection={{ _: 'column', tablet: 'row' }}
            >
                <Box
                    p={{ _: '20px 15px', tablet: '30px 40px' }}
                    border={`1px solid ${colors.light.greyDark}`}
                    borderBottomColor={{ _: 'transparent', tablet: colors.light.greyDark }}
                    borderRightColor={{ _: colors.light.greyDark, tablet: 'transparent' }}
                    width={{ _: '100%', tablet: '50%' }}
                >
                    <Box display="flex" alignItems="center" gridGap={20} mb={20}>
                        <Soldiers size="xl2" />
                        <Typography variant="h4" color="light.grey" transformText="uppercase">
                            Specialists
                        </Typography>
                    </Box>

                    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minMax(280px, 1fr))">
                        {specialists.items.map(({ specialists: specialist }: any) => (
                            <Typography
                                key={specialist.text}
                                variant="paragraph"
                                color="light.greyLight"
                                mb={10}
                            >
                                {specialist.text}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                <Box
                    p={{ _: '20px 15px', tablet: '30px 40px' }}
                    border={`1px solid ${colors.light.greyDark}`}
                    width={{ _: '100%', tablet: '50%' }}
                >
                    <Box display="flex" alignItems="center" gridGap={20} mb={20}>
                        <Computer size="xl2" />
                        <Typography variant="h4" color="light.grey" transformText="uppercase">
                            Specialists
                        </Typography>
                    </Box>
                    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minMax(280px, 1fr))">
                        {technologies.items.map(({ technologies: technology }: any) => (
                            <Typography
                                key={technology.text}
                                variant="paragraph"
                                color="light.greyLight"
                                mb={10}
                            >
                                {technology.text}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    </section>
);

export default Solution;
