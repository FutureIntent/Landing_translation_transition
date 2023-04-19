import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Tag from '@components/atoms/Tag/Tag';
import TagList from '@components/atoms/Tag/TagList';
import Typography from '@components/atoms/Typography';

const StyledSection = styled.section`
    background: ${({ theme }) => theme.colors.commons.white};

    margin-bottom: var(--footer-height);
`;

const query = graphql`
    query ProjectListQuery {
        cards: allPrismicProjectCard(sort: { fields: last_publication_date, order: ASC }) {
            edges {
                node {
                    id
                    data {
                        title {
                            text
                        }
                        poster {
                            gatsbyImageData
                            alt
                        }
                        categories {
                            category {
                                slug
                                id
                                uid
                            }
                        }
                    }
                    uid
                }
            }
        }
        categories: allPrismicCategoryOfProject {
            edges {
                node {
                    data {
                        type_of_category
                        title {
                            text
                        }
                    }
                    prismicId
                }
            }
        }
    }
`;

const ProjectListGrid = styled.div`
    column-gap: 70px;
    gap: 80px;
    margin-top: -60px;
    padding-bottom: 120px;

    ${mediaQueries.tablet} {
        column-count: 2;
    }

    li {
        margin-bottom: 70px;
    }
`;

const ProjectList = () => {
    const { cards, categories } = useStaticQuery(query);

    return (
        <StyledSection>
            <Container>
                <ProjectListGrid>
                    {cards.edges.map(({ node: card }: any) => (
                        <Link to={`/works/${card.uid}`} key={card.uid}>
                            <Box
                                gridGap={20}
                                display="flex"
                                flexDirection="column"
                                key={card.id}
                                mb={70}
                                style={{ breakInside: 'avoid' }}
                            >
                                <GatsbyImage
                                    alt={card.data.poster.alt}
                                    image={card.data.poster.gatsbyImageData}
                                />
                                <TagList>
                                    {card.data.categories.map(({ category: cardCategory }: any) => (
                                        <Tag key={cardCategory.id}>
                                            <Typography variant="caption" color="light.greyDark">
                                                {
                                                    categories.edges.find(
                                                        (category: any) =>
                                                            category.node.prismicId ===
                                                            cardCategory.id,
                                                    )?.node.data?.title?.text
                                                }
                                            </Typography>
                                        </Tag>
                                    ))}
                                </TagList>
                                <Typography variant="h3" color="light.greyDark">
                                    {card.data.title.text}
                                </Typography>
                            </Box>
                        </Link>
                    ))}
                </ProjectListGrid>
            </Container>
        </StyledSection>
    );
};

export default ProjectList;
