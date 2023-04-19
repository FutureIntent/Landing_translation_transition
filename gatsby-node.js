const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const pages = await graphql(`
        {
            allPrismicProjectCard {
                edges {
                    node {
                        id
                        uid
                        prismicId
                        lang
                        data {
                            body {
                                ... on PrismicProjectCardDataBodyBrandingSlider {
                                    items {
                                        slide {
                                            gatsbyImageData
                                            url
                                            alt
                                        }
                                        category {
                                            text
                                        }
                                    }
                                    id
                                    primary {
                                        background_cover {
                                            alt
                                            gatsbyImageData
                                            url
                                        }
                                    }
                                    slice_label
                                    slice_type
                                }
                                ... on PrismicProjectCardDataBodyBusiness {
                                    id
                                    slice_type
                                    slice_label
                                    primary {
                                        description {
                                            text
                                        }
                                        wireframe {
                                            alt
                                            gatsbyImageData
                                            url
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodyDesignStage {
                                    id
                                    slice_type
                                    slice_label
                                    primary {
                                        description {
                                            text
                                        }
                                        wireframe {
                                            alt
                                            gatsbyImageData
                                            url
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodyFigmaDesign {
                                    id
                                    slice_label
                                    slice_type
                                    primary {
                                        cover_image {
                                            alt
                                            gatsbyImageData
                                            url
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodyFullResult {
                                    id
                                    slice_label
                                    slice_type
                                    primary {
                                        cover_image {
                                            alt
                                            gatsbyImageData
                                            url
                                            thumbnails {
                                                mobile {
                                                    gatsbyImageData
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodyFullResultAchievements {
                                    id
                                    slice_label
                                    slice_type
                                    items {
                                        achievements {
                                            text
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodyFullResultWorksDone {
                                    id
                                    slice_label
                                    slice_type
                                    items {
                                        works_done {
                                            text
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodyFullBlockSlider {
                                    id
                                    slice_label
                                    slice_type
                                    items {
                                        slide {
                                            alt
                                            gatsbyImageData
                                            url
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodyHeroBanner {
                                    id
                                    slice_label
                                    slice_type
                                    primary {
                                        background_image {
                                            alt
                                            gatsbyImageData
                                            url
                                        }
                                        link {
                                            slug
                                            uid
                                            url
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodyIntro {
                                    id
                                    slice_label
                                    slice_type
                                    primary {
                                        background_image {
                                            alt
                                            gatsbyImageData
                                            url
                                        }
                                        description {
                                            text
                                        }
                                        logo {
                                            alt
                                            gatsbyImageData
                                            url
                                        }
                                        preview_on_devices {
                                            alt
                                            gatsbyImageData
                                            url
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodySolutionSpecialists {
                                    id
                                    slice_label
                                    slice_type
                                    items {
                                        specialists {
                                            text
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodySolutionTechnologies {
                                    id
                                    slice_label
                                    slice_type
                                    items {
                                        technologies {
                                            text
                                        }
                                    }
                                }
                                ... on PrismicProjectCardDataBodyUikit {
                                    id
                                    slice_label
                                    slice_type
                                    items {
                                        slide {
                                            alt
                                            gatsbyImageData
                                            url
                                        }
                                    }
                                    primary {
                                        description {
                                            text
                                        }
                                    }
                                }
                            }
                            categories {
                                category {
                                    uid
                                    slug
                                }
                            }
                            poster {
                                alt
                                gatsbyImageData
                                url
                            }
                            title {
                                text
                            }
                        }
                    }
                }
            }
        }
    `);

    pages.data.allPrismicProjectCard.edges.forEach(({ node }) => {
        createPage({
            path: `/works/${node.uid}`,
            component: path.resolve('src/components/templates/ProjectPageTemplate.tsx'),
            context: {
                ...node,
            },
        });
    });
};
