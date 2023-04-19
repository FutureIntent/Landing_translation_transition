import { hexToRGB } from '@utils/helpers';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Tag from '@components/atoms/Tag/Tag';
import TagList from '@components/atoms/Tag/TagList';
import Typography from '@components/atoms/Typography';

import ActionArrow from '@components/molecules/Icons/ActionArrow';

const SectionCustom = styled.section`
    display: flex;
    flex-direction: column;
`;

const CustomTag = styled(Tag)`
    background-color: rgba(${({ theme }) => hexToRGB(theme.colors.light.black)}, 0.75);
`;

const HeroBanner = ({
    data,
    title,
    categories,
}: {
    data: any;
    title: string;
    categories: { category: { uid: string; slug: string } }[];
}) => {
    const { isXxl } = useBreakpoint();

    return (
        <SectionCustom>
            <Container>
                <Box px={{ _: '0', laptop: '12rem' }} mt={200} minHeight={440}>
                    <Typography variant="h1" color="commons.white" transformText="uppercase">
                        {title}
                    </Typography>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        flexWrap="wrap"
                        gridGap={30}
                    >
                        <Box maxWidth={800} mr="2rem">
                            <TagList>
                                {categories.map((category) => (
                                    <CustomTag key={category.category.uid}>
                                        <Typography
                                            variant="caption"
                                            color="light.grey"
                                            transformText="uppercase"
                                        >
                                            {category.category.slug.replace(/-/g, ' ')}
                                        </Typography>
                                    </CustomTag>
                                ))}
                            </TagList>
                        </Box>
                        <Box
                            as="a"
                            display="flex"
                            alignItems="center"
                            gridGap={10}
                            href={data.primary.link?.url || '#'}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Typography
                                variant="accent"
                                color="light.greyLight"
                                transformText="uppercase"
                                lineHeight={1}
                            >
                                Visit site{' '}
                            </Typography>
                            <ActionArrow size="medium3" />
                        </Box>
                    </Box>
                    <GatsbyImage
                        className="background-image"
                        image={data.primary.background_image.gatsbyImageData}
                        alt={data.primary.background_image.alt || ''}
                        imgStyle={{ height: '100%' }}
                        style={{
                            width: '100vw',
                            height: '100%',
                            minHeight: '580px',
                            position: 'absolute',
                            zIndex: '-2',
                            top: 0,
                            left: isXxl ? 'calc(((100vw - 1920px) / 2) * -1)' : 0,
                        }}
                    />
                </Box>
            </Container>
        </SectionCustom>
    );
};

export default HeroBanner;
